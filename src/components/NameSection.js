import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NameSection({ data }) {
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const [state, setState] = useState(true);
  const [index, setIndex] = useState("");
  const navigate = useNavigate();
  //   console.log(data);
  console.log(data.name);
  //   console.log(data.);
  return (
    <div className="container">
      <div className="loginContent">
        <input
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter the username"
        />
        <br />
        <br />
        <input
          type="password"
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter the password"
        />
        <br />

        <button
          onClick={() => {
            data.filter((item) => {
              return text === item.name && pass === item.Password
                ? navigate("/view/" + item.id)
                : setState("false");
            });

            console.log(index);
          }}
        >
          login to get in
        </button>
        {!state ? <p>check</p> : null}
      </div>
    </div>
  );
}

export default NameSection;
