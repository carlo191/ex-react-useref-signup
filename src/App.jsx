import { useMemo, useState } from "react";

import "./index.css";
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

function App() {
  const [fullName, setfullName] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [specialization, setspecialization] = useState("");
  const [experience, setexperience] = useState("");
  const [description, setdescription] = useState("");
  const userNameIsValid = useMemo(() => {
    const charsvaild = username.split("").every((char) => {
      return letters.includes(char.toLowerCase()) || numbers.includes(char);
    });
    return charsvaild && username.trim().length >= 6;
  }, [username]);
  const passwordIsValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split("").some((char) => letters.includes(char.toLowerCase())) &&
      password.split("").some((char) => numbers.includes(char)) &&
      password.split("").some((char) => symbols.includes(char))
    );
  }, [password]);

  const isDecpritonValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length < 1000;
  }, [description]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experience.trim() ||
      experience <= 0 ||
      !description.trim() ||
      !userNameIsValid ||
      !passwordIsValid ||
      !isDecpritonValid
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
          {username.trim() && (
            <p style={{ color: userNameIsValid ? "green" : "red" }}>
              {userNameIsValid
                ? "Username valido"
                : "deve avere almeno 6 caratteri alafanumerici"}
            </p>
          )}
        </label>
        <label>
          <p>password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          {password.trim() && (
            <p style={{ color: passwordIsValid ? "green" : "red" }}>
              {passwordIsValid
                ? "password valida"
                : "deve avere almeno 8 caratteri tra cui 1 lettera , 1 numero e 1 simbolo"}
            </p>
          )}
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
        {description.trim() && (
          <p style={{ color: isDecpritonValid ? "green" : "red" }}>
            {isDecpritonValid
              ? "descrizione valida"
              : "deve avere almeno 100 caratteri e massimo 1000"}
          </p>
        )}
        <button type="submit">Registrati</button>
      </form>
    </>
  );
}

export default App;
