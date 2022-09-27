import React from "react";
import { useField } from "formik";
import { InputGroup } from "@chakra-ui/react";
import { TextInputWrapper, TextInputBox, ErrorSpan } from "./style";

export const TextInput = (props) => {
  const [field, meta] = useField(props);

  return (
    <TextInputWrapper>
      <label htmlFor={props.name}>{props.label}</label>

      <div className="input__wrapper">
        <InputGroup>
          <TextInputBox type={props.type} {...field} {...props} autoComplete="off" />
        </InputGroup>
        {props.displayErrMessage === false ? null : meta.touched && meta.error ? (
          <ErrorSpan>{meta.error}</ErrorSpan>
        ) : null}
      </div>
    </TextInputWrapper>
  );
};
