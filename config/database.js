
const mongoose = require('mongoose');
user=process.env.mongoURI

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/furaction-backend`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });  
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;
