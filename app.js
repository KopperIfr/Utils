// MONGOOSE METHODS
import User from './models/User.js';

// 1. Counting documents..
await User.countDocuments();
await User.countDocuments({username: 'john'});

// 2. Getting data..
await User.find(); // -> Get all users
await User.find({username: 'john', age: 12}); // -> Get user with username john and age 12
await User.findById(12367128368712); // -> Get user by its id
await User.findOne({username: 'john'}); // -> Get one user filtered by username

// 3. Updating data..
await User.findByIdAndUpdate(id, {'$set': data}, {runValidators: true});

// 4. Deleting data..
await User.findByIdAndDelete(id);