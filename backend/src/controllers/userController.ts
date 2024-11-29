import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/userModel';

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', userId: newUser.userId });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

// Fetch all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('-password'); // Exclude password field
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};
