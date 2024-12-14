import React, { useState } from "react";

function ReactFormHandling1() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange} // Pass the function reference here
        />
        <br />
        <h1>Email is: {email}</h1>
      </form>
    </div>
  );
}

export default ReactFormHandling1;
