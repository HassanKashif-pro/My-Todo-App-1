const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true, // Removes spaces from beginning and end
    minlength: 3, // Minimum length for username
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"], // Simple email regex validation
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum length for password
  },
  roles: {
    type: [String],
    default: ["user"], // Assign 'user' role by default
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set to current time
  },
});

// Pre-save hook to hash passwords (if needed)
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const bcrypt = require("bcryptjs");
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
