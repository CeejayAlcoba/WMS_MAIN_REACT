import { jwtDecode } from "jwt-decode";

export default function useToken() {
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwtDecode(token) : null;
  
  return {token, decodedToken };
}
