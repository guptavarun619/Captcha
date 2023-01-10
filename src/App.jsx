import { useEffect, useState } from "react";
import { generateCaptcha } from "./utils/captcha";

function App() {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleSetCaptcha = () => {
    const captcha = generateCaptcha();
    setCaptcha(captcha);
  };

  const handleChangeInput = (event) => {
    setUserInput(event.target.value);
  };

  useEffect(() => {
    handleSetCaptcha();
  }, []);

  return (
    <div className="App">
      <h1 className="py-1 text-3xl text-center font-bold">
        Capta Assignment : 🚀 In Progress
      </h1>
      <div className="container max-w-xs p-4 ml-auto mr-auto rounded-lg shadow-lg">
        <div className="capta-generated flex gap-2">
          {/* user-select: none;
        text-decoration:line-through;
        font-style: italic; */}
          <div className="capta-img grow text-center text-xl select-none line-through italic rounded-lg bg-gray-300">
            {captcha}
          </div>
          <button
            className="px-3 py-2 text-white font-medium rounded-lg text-sm bg-cyan-600  hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700 "
            onClick={handleSetCaptcha}
          >
            Reset
          </button>
        </div>
        <div className="captcha-input mt-4">
          <input
            type="text"
            value={userInput}
            onChange={handleChangeInput}
            className="w-full border-2 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
