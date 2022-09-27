import React from "react";
import { Spacer } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { FormWrapper, ButtonWrapper } from "./style";
import { TextInput } from "components/TextInput";
import * as Yup from "yup";
import { withFormik } from "formik";
import { isEmpty } from "lodash";
import { CustomButton } from "components/Button";
import { createFn } from "redux/action";

const NewUserSchema = Yup.object().shape({
  Name: Yup.string()
    .required("Full Name is required")
    .matches(/([a-zA-Z]+\s?\b){2,}/, "First name and Last name are required"),
  Email: Yup.string().required("Email is required").email("Invalid Email")
});

const formikEnhancer = withFormik({
  validationSchema: NewUserSchema,
  mapPropsToValues: (props) => ({
    Name: "",
    Email: ""
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    const id = props.initialLength + 1;
    const payload = {
      id,
      name: values?.Name,
      username: faker.name.firstName(),
      email: values?.Email,
      address: {
        city: faker.address.cityName()
      }
    };
    props.dispatch(createFn(payload));
    // props.dispatch(createUser(payload));
    setSubmitting(false);
    props.navigate("/");
  },
  displayName: "NewUserSchema",
  validateOnChange: true,
  enableReinitialize: true
});

const FormCmp = (props) => {
  const { values, touched, errors, handleSubmit, handleChange, handleBlur, isValid, isSubmitting } =
    props;

  return (
    <FormWrapper>
      <form
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
        autoComplete="off"
      >
        <TextInput
          style={{
            border: errors.Name && touched.Name && "1px solid red"
          }}
          id="Name"
          field="Name"
          label="Name"
          className="address_input"
          placeholder="Enter Users firstname and lastname"
          name="Name"
          value={values.Name}
          onBlur={handleBlur}
          error={errors.Name}
          onChange={handleChange}
        />

        <Spacer height="8" />

        <TextInput
          style={{
            border: errors.Email && touched.Email && "1px solid red"
          }}
          id="Email"
          field="Email"
          label="Email"
          placeholder="Enter Users Email"
          onBlur={handleBlur}
          name="Email"
          value={values.Email}
          onChange={handleChange}
          error={errors.Email}
          touched={touched.Email}
        />

        <Spacer height="30" />

        <ButtonWrapper>
          <CustomButton message="Cancel" ghost="danger" link to="/" />
          <CustomButton
            isLoading={isSubmitting}
            message="Submit"
            variant="success"
            className="submit"
            type="submit"
            onClick={handleSubmit}
            disabled={isEmpty(values.Name) || !isValid || isSubmitting}
          />
        </ButtonWrapper>
      </form>
    </FormWrapper>
  );
};

export const NewUserForm = formikEnhancer(FormCmp);
