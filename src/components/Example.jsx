import React, { useState } from "react";

const Example = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState(["Nrupul", "Aman", "abdullah"]);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleadd = () => {
    setUsers([...users, text]);
    console.log(text);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="name"
        name="name"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleadd}>ADD</button>
      <div>
        value:{text}
        <div>
          Users:
          <div>
            {/* {users.map((user) => (
              <h4 key={user}>{user}</h4>
            ))}
             */}
            {users.map((user) => (
              <h4 key={user}>{user}</h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
