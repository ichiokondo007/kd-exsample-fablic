import React, { useState } from "react";

const Login: React.FC = () => {
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Login Name:", loginName);
    console.log("Password:", password);
  };

  return (
    <div className="body-bg min-h-screen flex flex-col items-center pt-10">
      <div className="skewed"></div>
      <header className="relative z-10 mt-0">
        <img src="/kd.svg" alt="KD-Lab Logo" className="mx-auto w-64" />
      </header>
      <main className="relative z-10 bg-white w-full max-w-[600px] mx-auto p-8 md:p-12 mt-6 rounded-lg shadow-2xl">
        <section>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">LoginName (free)</label>
              <input
                type="text"
                value={loginName}
                onChange={(e) => setLoginName(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                placeholder="Enter your login name"
              />
            </div>

            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                title="Password"
                placeholder="Enter your password"
              />
            </div>

            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
            >
              Login
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;