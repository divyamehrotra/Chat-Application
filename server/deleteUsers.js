require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./modals/userModel');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    try {
      await User.deleteMany({});
      console.log('All users deleted successfully');
    } catch (err) {
      console.error('Error deleting users:', err);
    } finally {
      await mongoose.connection.close();
      process.exit(0);
    }
  })
  .catch(err => {
    console.error('Connection error:', err);
    process.exit(1);
  }); 