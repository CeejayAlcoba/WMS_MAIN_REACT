import useWindowWidth from "../../hooks/useWindowWidth";
import LoginForm from "./__layouts__/LoginForm";
import SideDesign from "./__layouts__/SideDesign";
export default function LoginPage({ handleSetUser }) {
  const { windowWidth } = useWindowWidth();
  return (
    <div
      className="d-flex justify-content-between"
      style={{ width: "100vw", height: "100vh", backgroundColor: "#00529C" }}
    >
      {windowWidth > 768 && <SideDesign />}
      <LoginForm handleSetUser={handleSetUser} />
    </div>
  );
}
