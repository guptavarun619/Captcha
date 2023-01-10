export function generateCaptcha() {
  const charSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += charSet.charAt(Math.random() * charSet.length);
  }
  return captcha;
}
