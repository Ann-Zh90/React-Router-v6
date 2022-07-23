import { useMemo, useState } from "react";
import s from "./UseMemo_test.module.css";
const createUser = (name, surname) => {
  return { name, surname };
};
const UseMemoTest = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [click, setClick] = useState(0);
  console.log("render");

  const person = useMemo(() => createUser(name, surname), [name, surname]);
  console.log(person);

  return (
    <>
      <div className={s.form}>
        <button onClick={() => setClick((prev) => ++prev)}>
          You've clicked on me {click} times
        </button>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={surname}
          type="text"
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};

export default UseMemoTest;
