# Captcha

Captcha is a simple reusable react component that generates a captcha randomly for client side captcha validation

## 🔗 Links - [Live Demo](https://captcha-puce.vercel.app/)

## Usage

Declare two boolean state variables with setter functions and set their default states to false. Pass the required states to the `<Captcha/>` component as props and follow the demonstration below

```javascript
import Captcha from "./components/Captcha";

function App() {
  const [captchaValid, setCaptchaValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    // ...
    <Captcha
      captchaValid={captchaValid} // will indicate if user has entered valid capta or not
      setCaptchaValid={setCaptchaValid} // will set the validation state
      formSubmitted={formSubmitted} // will need this to reset the captcha again when form is submitted
      size={6} // length of the captcha
    />
    // ...
  );
}
```

## Run Locally

Clone the repository

```bash
  git clone https://github.com/guptavarun619/Captcha.git
```

Go to the project directory

```bash
  cd Captcha
```

Install dependencies

```bash
  npm install
```

Start the react app

```bash
  npm run dev
```

## Tech Stack

**Client:** React, TailwindCSS
