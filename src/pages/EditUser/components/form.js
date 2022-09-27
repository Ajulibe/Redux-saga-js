import React from "react";
import { Spacer } from "@chakra-ui/react";
import COLORS from "styles/colors";
import { FormWrapper, ButtonWrapper } from "./style";
import { TextInput } from "components/TextInput";
import * as Yup from "yup";
import { withFormik } from "formik";
import { isEmpty } from "lodash";
import { CustomButton } from "components/Button";
import { editFn } from "redux/action";

const EditUserSchema = Yup.object().shape({
  Name: Yup.string()
    .required("Full Name is required")
    .matches(/([a-zA-Z]+\s?\b){2,}/, "First name and Last name are required"),
  Email: Yup.string().required("Email is required").email("Invalid Email")
});

const formikEnhancer = withFormik({
  validationSchema: EditUserSchema,
  mapPropsToValues: (props) => ({
    Name: props?.state?.name ?? "",
    Email: props?.state?.email ?? ""
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    let userIndex;
    const user = props.data.find((item, index) => {
      userIndex = index;
      return item["id"] === props?.state?.id;
    });

    const editPayload = {
      index: userIndex,
      data: {
        ...user,
        name: values?.Name,
        email: values?.Email
      }
    };
    props.dispatch(editFn(editPayload));
    setSubmitting(false);
    props.navigate("/");
  },
  displayName: "EditUserSchema",
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
            border: errors.Name && touched.Name ? "1px solid red" : `1px solid ${COLORS.borderblue}`
          }}
          id="Name"
          field="Name"
          label="Name"
          className="address_input"
          placeholder="Enter your Users Name"
          name="Name"
          value={values.Name}
          onBlur={handleBlur}
          error={errors.Name}
          onChange={handleChange}
        />

        <Spacer height="8" />

        <TextInput
          style={{
            border:
              errors.Email && touched.Email ? "1px solid red" : `1px solid ${COLORS.borderblue}`
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
          <CustomButton message="Cancel" ghost="danger" className="cancel" link to="/" />

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

export const EditUserForm = formikEnhancer(FormCmp);
