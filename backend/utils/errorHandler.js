const registerValid = (name, email, password, cf_password) => {
    if (!name) return "Please enter your name";
    if (!email) return "Please enter your email address";
    if (!validateEmail(email)) return "Please enter valid email";
    if (!password) return "Please enter new password";
    if (password.length < 6)
      return "Password should contain atleast 6 characters";
    if (!cf_password) return "Please retype your password to confirm";
    if (password !== cf_password)
      return "Passwords does not match. Please try again";
  };
  
  const loginValid = (email, password) => {
    if (!email) return "Please enter your email";
    if (!password) return "Please enter your password";
  };
  
 
  
 
  

  
  module.exports = {
    registerValid,
    loginValid,
  
  };