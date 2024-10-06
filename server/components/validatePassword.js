const bcrypt = require("bcryptjs");

// Function to validate password
const validatePassword = async (inputPassword, storedPasswordHash) => {
  try {
    if (!inputPassword || !storedPasswordHash) {
      throw new Error("Input password and stored password hash are required");
    }
    // Compare the input password with the stored hashed password
    const isMatch = await bcrypt.compare(inputPassword, storedPasswordHash);
    // Log for debugging purposes
    console.log("Password comparison result:", isMatch);
    return isMatch;
  } catch (error) {
    console.error("Error while validating password:", error.message);
    throw new Error("Password validation failed");
  }
};

module.exports = validatePassword;
