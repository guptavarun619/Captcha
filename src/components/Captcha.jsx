import { useEffect, useState } from "react";
import { generateCaptcha } from "../utils/captcha";

function Captcha({ captchaValid, setCaptchaValid, formSubmitted }) {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  const handleSetCaptcha = () => {
    const captcha = generateCaptcha(6);
    setUserInput("");
    setCaptcha(captcha);
  };

  const handleChangeInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleCheckCaptcha = () => {
    // console.log(userInput, captcha);
    if (userInput.length == 0) {
      setCaptchaValid(false);
      setMessage("Please enter the captcha");
    } else if (captcha == userInput) {
      setCaptchaValid(true);
      setMessage("Captcha has been validated successfully");
    } else {
      setCaptchaValid(false);
      setMessage("Entered captcha doesn't match!!!");
    }
  };

  useEffect(() => {
    // console.log("Rerendered - capta should reset");
    handleSetCaptcha();
  }, [formSubmitted]);

  useEffect(() => {
    // console.log("Rerendered - because of input");
    handleCheckCaptcha();
  }, [userInput]);

  return (
    <div className="captcha-component container max-w-sm ml-auto mr-auto">
      <div className="capta-generated flex gap-2 flex-wrap">
        <div className="captcha-img grow text-center text-xl select-none line-through italic rounded-lg bg-gray-300">
          {captcha}
        </div>
        <button className="btn" onClick={handleSetCaptcha}>
          Reset
        </button>
      </div>
      <div className="captcha-input mt-4 flex flex-col">
        <input
          type="text"
          value={userInput}
          onChange={handleChangeInput}
          className="text-input"
          placeholder="Enter captcha here"
        />
        <div
          className={`validation-messaage py-1 ${
            userInput.length == 0
              ? "text-gray-500"
              : captchaValid
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          <p className="text-xs text-center">{message}</p>
        </div>

        {/* <button className="btn" onClick={handleCheckCaptcha}>
          Validate Captcha
        </button> */}
      </div>
    </div>
  );
}

export default Captcha;
