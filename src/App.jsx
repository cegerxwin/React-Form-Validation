import { useState } from "react";
import FormInput from "./components/FormInput";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    required: true,
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't character!",
      pattern: "^[a-zA-Z0-9]{3,10}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter your password",
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      required: true,
    },
  ];

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(false);
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} onChange={onChange} {...input} />
        ))}
        <button>{isLoading ? "Submit" : "Loading..."}</button>
      </form>
    </div>
  );
}

export default App;
