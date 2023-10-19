
import LoginForm from "./layouts/LoginForm";
import SideDesign from "./layouts/SideDesign";
export default function LoginPage({handleSetUser}) {

  return (
    <div className="d-flex justify-content-between" style={{width:"100vw", height:"100vh",backgroundColor:"#00529C"}}>
      <SideDesign/>
      <LoginForm handleSetUser={handleSetUser}/>
    </div>
  );
}
