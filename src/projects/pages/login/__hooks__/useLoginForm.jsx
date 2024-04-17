import useWindowWidth from "../../../hooks/useWindowWidth";

export default function useLoginForm(){
  
    const handleLogin = (event,formData,handleFormMessage) => {
        try{
            event.preventDefault();
            // Handle form submission here
            console.log(formData.data);
            handleFormMessage("ss",true);
    
        }
        catch{
            handleFormMessage("Invalid username and password.",false);
        }
        
      };
    return {handleLogin}
}