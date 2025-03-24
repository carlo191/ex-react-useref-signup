import { useState } from "react";

import "./index.css";

function App() {
  const [fullName, setfullName] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [specialization, setspecialization] = useState("");
  const [experience, setexperience] = useState("");
  const [description, setdescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experience.trim() ||
      experience <= 0 ||
      !description.trim()
    ) {
      alert("Compila tutti i campi");
      return;
    }
    console.log({
      fullName,
      username,
      password,
      specialization,
      experience,
      description,
    });
  };

  return (
    <>
      <h1>Web developer Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nome comleto</p>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
          />
        </label>
        <label>
          <p>username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </label>
        <label>
          <p>password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <label>
          <p>specialization</p>
          <select
            value={specialization}
            onChange={(e) => setspecialization(e.target.value)}
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </select>
        </label>
        <label>
          <p>experience</p>
          <input
            type="number"
            value={experience}
            onChange={(e) => setexperience(e.target.value)}
          />
        </label>
        <label>
          <p>description</p>
          <textarea
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </label>
        <button type="submit">Registrati</button>
      </form>
    </>
  );
}

export default App;
