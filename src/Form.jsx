import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("帳號或密碼不能為空！");
      return;
    }
    setSubmittedData(`帳號: ${username}, 密碼: ${password}`);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-10 text-4xl font-black text-white">Profiler Test</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center ">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Account"
          className="mb-2 rounded-md border border-gray-300 p-2"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mb-2 rounded-md border border-gray-300 p-2"
        />
        <button
          type="submit"
          className="mt-4 rounded bg-blue-800 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-500 focus:outline-none"
        >
          Submit
        </button>
        <p className="mt-4 text-white">{submittedData}</p>
      </form>
    </div>
  );
};

export default Form;
