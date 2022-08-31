import React from "react";

import { postLogin } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useForm from "hooks/useForm";
import { Column, Img, Text, Input, Button, Row, Line } from "components";
import * as yup from "yup";

const LoginPage = () => {
  const [apiData1, setapiData1] = React.useState();
  const formValidationSchema = yup
    .object()
    .shape({
      username: yup.string(),
      password: yup.string().required("Password is required"),
    });
  const form = useForm(
    { username: "", password: "" },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );
  const navigate = useNavigate();

  function callApi1(data) {
    const req = { data: { ...data } };

    postLogin(req)
      .then((res) => {
        setapiData1(res);

        navigate("/dashboard");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Login failed! Please retry!");
      });
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-inter items-center mx-[auto] 2xl:p-[100px] 3xl:p-[120px] lg:p-[77px] xl:p-[88px] w-[100%]"
        compid="5109:9942"
        comptype="Column"
      >
        <Img
          src="images/img_close.svg"
          className="lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[3%]"
          compid="5112:9948"
          comptype="Image"
          alt="close"
        />
        <Text
          className="font-bold lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]"
          compid="5109:9945"
          comptype="Text"
        >
          Login
        </Text>
        <Text
          className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]"
          compid="5109:9946"
          comptype="Text"
        >
          Welcome Back
        </Text>
        <Column
          className="items-end lg:mb-[161px] xl:mb-[184px] 2xl:mb-[207px] 3xl:mb-[248px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[32%]"
          compid="10"
          comptype="Column"
        >
          <Input
            className="font-inter font-normal not-italic p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_700 text-gray_700 w-[100%]"
            wrapClassName="w-[100%]"
            compid="5114:9951"
            type="text"
            comptype="EditText"
            onChange={(e) => {
              form.handleChange("username", e.target.value);
            }}
            errors={form?.errors?.username}
            value={form?.values?.username}
            name="GroupTwentyFour"
            placeholder="Username"
            variant="OutlineGray401"
          ></Input>
          <Input
            className="font-inter font-normal not-italic p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_700 text-gray_700 w-[100%]"
            wrapClassName="2xl:mt-[16px] 3xl:mt-[19px] lg:mt-[12px] w-[100%] xl:mt-[14px]"
            compid="5114:9950"
            type="password"
            comptype="EditText"
            onChange={(e) => {
              form.handleChange("password", e.target.value);
            }}
            errors={form?.errors?.password}
            value={form?.values?.password}
            name="GroupTwentyThree"
            placeholder="Password"
            variant="OutlineGray401"
          ></Input>
          
          <Button
            className="common-pointer font-inter font-normal lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
            compid="5109:9974"
            comptype="Button"
            onClick={() => {
              form.handleSubmit(callApi1);
            }}
            size="md"
            variant="FillBlack900"
          >
            Sign in
          </Button>
         
         
        
        </Column>
        <Text>
        Made with ❤️ using Dhiwise
          </Text>
      </Column>

      <ToastContainer />
    </>
  );
};

export default LoginPage;
