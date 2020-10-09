export default function ErrorTextMofifier(props) {
  switch (props) {
    case "EMAIL_NOT_FOUND":
      return "Email Not Found. Please Sign Up";
    case "INVALID_PASSWORD":
      return "Invalid Password";
    case "EMAIL_EXISTS":
      return "User Already Registered";
    case "WEAK_PASSWORD : Password should be at least 6 characters":
      return "Weak Password : Password should be at least 6 characters";
    default:
      return "Error";
  }
}
