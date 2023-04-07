// Assignment code here
//

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;

}
// Variables for password generation
function generatePassword() {
	var passwordLength = 0;
	var lowercase = false;
	var uppercase = false;
	var numeric = false;
	var special = false;
	var valid = false;
	var password = "";



	//  while loop to check if password length is between 8 and 128
	while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
		passwordLength = prompt("How many characters would you like your password to be?");
    // if statement to check if user clicked cancel and close the prompt
		if (passwordLength === null) {
			return "";
		}

		if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
			alert("Please enter a number between 8 and 128.");
		}
	}



	//  confirm statements to check if user wants lowercase, uppercase, numeric, and special characters
	lowercase = confirm("Would you like to include lowercase letters?");
	uppercase = confirm("Would you like to include uppercase letters?");
	numeric = confirm("Would you like to include numbers?");
	special = confirm("Would you like to include special characters?");

	// if statement to check if user selected at least one character type
	if (!lowercase && !uppercase && !numeric && !special) {
		alert("You must select at least one character type.");
		return "";
	}

	// generate password based on user input
	var charset = "";

	if (lowercase)
		charset += "abcdefghijklmnopqrstuvwxyz";
	if (uppercase)
		charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if (numeric)
		charset += "0123456789";
	if (special)
		charset += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
	for (var i = 0, n = charset.length; i < passwordLength; ++i) {
		password += charset.charAt(Math.floor(Math.random() * n));
	}
	// 
	return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);