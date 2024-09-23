const bcrypt = require("bcryptjs");

// Function to validate password
const validatePassword = async (inputPassword, storedPasswordHash) => {
  try {
    // Compare the input password with the stored hashed password
    const isMatch = await bcrypt.compare(inputPassword, storedPasswordHash);
    return isMatch;
  } catch (error) {
    console.error("Error while validating password:", error);
    throw new Error("Password validation failed");
  }
};

module.exports = validatePassword;
