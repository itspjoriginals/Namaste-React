export const checkValidateData = (email, password, name) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
.test(email);

const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

const isValidName = /^[a-zA-Z]+([ \-\'][a-zA-Z]+)*$/.test(name)

if(!isEmailValid) return "Email ID is not valid";
if(!isPasswordValid) return "Password is not valid"
if(!isValidName) return "Name is not valid"

return null;
}  