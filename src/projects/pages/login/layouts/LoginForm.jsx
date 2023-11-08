import Form from "../../../components/forms/components/Form";
import FormInput from "../../../components/forms/components/FormInput";
import useForm from "../../../components/forms/hooks/useForm";
import useLoginForm from "../hooks/useLoginForm";
import afreightLogo from '../../../../assets/afreight-logo.png'
import Button from "../../../components/Button";


export default function LoginForm ({handleSetUser}){
  const initFormData = {
    username: "",
    password: "",
  };
  const { formData, handleFormDataChange,handleFormMessage } = useForm(initFormData);
  const { handleLogin } = useLoginForm();
  return (
    <div className="w-100 p-5 d-flex">
      <Form
        onSubmit={
          (e) => handleSetUser(formData)
          // handleLogin(e, formData,handleFormMessage)
        }
        className="flex-column align-self-center container card p-5 card w-50 h-75"
       
        headerElement={<Header/>}
        footerElement={
          <Footer
            errorMessage={formData.error}
            buttonClassName={"mb-3"}
            alertClassName={"alert"}
          />
        }
      >
        <FormInput
          label={"Username"}
          name={"username"}
          value={formData.username}
          onChange={handleFormDataChange}
          isRequired={true}
          className="mb-3"
        />
        <FormInput
          label={"Password"}
          name={"password"}
          type={"password"}
          value={formData.password}
          onChange={handleFormDataChange}
          isRequired={true}
          className="mb-3"
        />
      </Form>
    </div>
  );
};

function Header(){
  return (
      <center>
         
     <img src={afreightLogo} alt='afreight-logo' className='w-75 mb-2'/>
      </center>
  )
}

 
function Footer({errorMessage,buttonClassName,alertClassName}){
  return(
      <>
      {errorMessage && (
        <Alert severity={"error"} className={alertClassName}>
          {errorMessage}
        </Alert>
      )}

      <Button
        type={"submit"}
        isLoading={false}
        label={"login"}
        className={buttonClassName}
      />
    </>
  )
}