import { useState } from "react";
import "./App.css";

function App() {
  //States used for the overall app

  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [validate, setValidate] = useState(true);

  /*handleChange function -> use to handle the cases when user inputs some 
  mobile number/email, checks the validation and provide error message based on it */

  const handleChange = (value) => {
    const emailValidate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneValidate = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
    setInput(value);
    if (value.length === 0) {
      setError("");
      setValidate(true);
    } else if (emailValidate.test(value) || phoneValidate.test(value)) {
      setError("");
      setValidate(false);
      setError("Now you can click on Next");
    } else {
      setError("Enter correct Mobile Number or Email");
      setValidate(true);
    }
  };

  /*handleOnClick function -> use to handle the case when user is able 
  to click on "Next" button and user clicks it*/

  const handleOnClick = () => {
    alert("All Good");
    setValidate(true);
    setInput("");
    setError("");
  };

  /*googleAlert function -> just handling the no use case as of now.*/
  const googleAlert = () => {
    alert("Soon to be implemented");
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="flex flex-col w-4/5 desktop:w-1/4">
        <div>
          <h1 className="font-bold text-2xl my-10 mb-3">Login to Dashboard</h1>
          <h3 className="text-lg mb-2">Email or Mobile Number</h3>
        </div>
        <div className="flex flex-col w-fit text-center">
          <input
            type="text"
            className="border border-white border-b-gray-400 focus:outline-none"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          ></input>
          {!validate ? (
            <div className="text-green-600 text-sm text-left text-md">
              {error}
            </div>
          ) : (
            <div className="text-red-600 text-sm text-left text-md">
              {error}
            </div>
          )}
          <button
            className="bg-blue-400 text-white px-10 py-1 mt-8 shadow-md"
            type="submit"
            disabled={validate}
            onClick={handleOnClick}
          >
            Next
          </button>
          <h5 className="text-sm mt-5 mb-5 text-center">or</h5>
          <div
            className="hover:cursor-pointer w-7/12 mx-auto"
            onClick={googleAlert}
          >
            <img
              src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button-1024x260.png"
              alt="google"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
