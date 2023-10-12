import Form from "../../../../components/forms/components/Form";
import FormInput from "../../../../components/forms/components/FormInput";
import useForm from "../../../../components/forms/hooks/useForm";
import useLoginForm from "../../hooks/useLoginForm";
import LoginFormStyles from "../../styles/LoginFormStyles";
import Footer from "./Footer";
import Header from "./Header";

const LoginForm = () => {
  const initFormData = {
    username: "",
    password: "",
  };
  const formStyles = LoginFormStyles();
  const { formData, handleFormDataChange,handleFormMessage } = useForm(initFormData);
  const { handleLogin } = useLoginForm();
  return (
    <div style={formStyles.container}>
      <Form
        onSubmit={(e) => handleLogin(e, formData,handleFormMessage)}
        style={formStyles.form}
        header={<Header/>}
        footer={
          <Footer
            errorMessage={formData.error}
            buttonStyle={formStyles.button}
            alertStyle={formStyles.alert}
          />
        }
      >
        <FormInput
          label={"Username"}
          name={"username"}
          value={formData.username}
          onChange={handleFormDataChange}
          isRequired={true}
          sx={formStyles.textField}
        />
        <FormInput
          label={"Password"}
          name={"password"}
          type={"password"}
          value={formData.password}
          onChange={handleFormDataChange}
          isRequired={true}
          sx={formStyles.textField}
        />
      </Form>
    </div>
  );
};

export default LoginForm;
