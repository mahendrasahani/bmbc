import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function AuthGuard() {
  const history = useHistory();

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) {
      history.push("/admin/signin");
    }
  }, [history]);

  return null;
}

export default AuthGuard;
