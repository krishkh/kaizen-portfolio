import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import FormBtn from "../../components/FormBtn/FormBtn";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/Loader/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log(res)
      if (res) {
        console.log({ res });
        navigate("/kaizen-portfolio/home");
      }
    } catch (e) {
      console.error(e);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading ? (
        <Loader/>
      ) : (
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-md rounded-md">
          <h2 className="text-center text-3xl text-gray-200">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-outer flex flex-col gap-7">
              <FormInput
                Label={"Email"}
                textField={"email"}
                inpType={"text"}
                handleFunc={(e) => setEmail(e.target.value)}
                valuein={email}
              />
              <FormInput
                Label={"Password"}
                textField={"password"}
                inpType={"password"}
                handleFunc={(e) => setPassword(e.target.value)}
                valuein={password}
              />
              <FormBtn text={"Login"} />
            </div>
          </form>
          <p className="text-white">
            Don't Have an Account?{" "}
            <Link className="text-blue-400" to={"/kaizen-portfolio/signup"}>
              Sign Up
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
