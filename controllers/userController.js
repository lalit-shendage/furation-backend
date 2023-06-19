const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


// user registration logic
const register = async (req, res) => {
    try {
      // Retrieve the registration data from the request body
      const { email, name, password } = req.body;
  
      // Check if the email is already registered
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new User
      const newUser = new User({
        email,
        name,
        password: hashedPassword,
      });
  
      // Save the User to the database
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Registration failed' });
    }
  };

//  user login logic
  const login = async (req, res) => {
    try {
      // Retrieve the login data from the request body
      const { email, password } = req.body;
  
      // Check if the user exists
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Compare the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Create and sign a JWT token
      const token = jwt.sign({ userId: user._id }, 'Ghost');
  
      res.status(200).json({ token, user });
    } catch (error) {
      res.status(500).json({ message: 'Login failed' });
    }
  };

  module.exports= {register, login};