import { useRef, useState } from "react";
import Captcha from "./components/Captcha";

function App() {
  const [captchaValid, setCaptchaValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const nameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

  const handleSubmitForm = () => {
    console.log(nameRef.current.value);
    console.log(phoneRef.current.value);
    console.log(addressRef.current.value);
    console.log("Captcha must be validated so form was submitted");
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    // setCaptchaValid(false);
    nameRef.current.value = "";
    phoneRef.current.value = "";
    addressRef.current.value = "";
  };

  return (
    <div className="App">
      <h1 className="py-1 text-3xl text-center font-bold">
        Captcha Assignment 🚀
      </h1>
      <div className="form-message container max-w-sm ml-auto mr-auto">
        {formSubmitted && (
          <div className="py-4 mx-8 shadow-xl rounded-lg">
            <h3 className="text-xl text-center font-semibold">
              Your form was submitted successfully 🎉
            </h3>
            <div className="container mt-2 flex justify-center">
              <button className="btn" onClick={handleResetForm}>
                Reset form
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="form container max-w-xl p-4 ml-auto mr-auto flex flex-col gap-4 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Name"
          ref={nameRef}
          className="text-input"
        />
        <input
          type="tel"
          placeholder="Phone"
          ref={phoneRef}
          className="text-input"
        />
        <input
          type="text"
          placeholder="Address"
          ref={addressRef}
          className="text-input"
        />

        <Captcha
          captchaValid={captchaValid}
          setCaptchaValid={setCaptchaValid}
          formSubmitted={formSubmitted}
        />

        <button
          className="btn"
          onClick={handleSubmitForm}
          disabled={!captchaValid}
        >
          Submit Form
        </button>
      </div>
    </div>
  );
}

export default App;
