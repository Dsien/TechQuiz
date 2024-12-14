//# Create checkConnection.js
import mongoose from 'mongoose';

async function checkConnection() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/techquiz');
    console.log('Database connection successful');
  } catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
}

checkConnection();
EOF

// Create connection.js
cat > server/config/connection.js << 'EOF'
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/techquiz');
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw new Error('Database connection failed.');
  }
};

export default connectDB;