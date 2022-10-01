import React from "react";
import {
  Container,
  Icon,
  Form,
  FormH1,
  Text,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  FormWrap,
} from "./SigninEl";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MooFarm</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
