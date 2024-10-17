import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const admin = "admin123";
  const [password, setPassword] = useState("");

  function handleLogin() {
    password === admin ? navigate("/booking") : alert("Password salah");
  }
  return (
    <div className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-[url('/assets/pantai.jpg')]">
      <div className="w-2/5 bg-orange-200 h-3/5 rounded-lg flex flex-col">
        <p className="text-center text-2xl font-bold mt-14">Login</p>
        <div className="w-full flex justify-center mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>

        <div className="w-full flex flex-col p-8 items-center justify-center">
          <div className="w-5/5">
            <p className="text-md font-semibold">Admin</p>
            <input className="w-52" type="email" name="" id="" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="w-5/5">
            <p className="text-md font-semibold">Password</p>
            <input className="w-52" type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button onClick={handleLogin} className="w-2/5 bg-slate-400 mt-7 py-2 rounded-sm font-semibold text-white">
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
