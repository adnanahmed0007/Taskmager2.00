import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import AuthRoutes from './routes/AuthRoutes.js';
import TaskRoute from './routes/TaskRoute.js';

const port = 8765;
const app = express();
const mongoUrl = "mongodb://localhost:27017/admin";

// Define your allowed origins
const allowedOrigins = [
  "http://localhost:5173", // local development
  "https://taskmager2-00-xko9.vercel.app" // production frontend
];

// Use CORS middleware with a function to check the origin
app.use(cors({
  origin: (origin, callback) => {
    // If no origin is provided (like in some curl or mobile requests), allow it.
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Handle preflight requests explicitly
app.options('*', (req, res) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.sendStatus(200);
});

// Other middleware
app.use(express.json());
app.use(cookieParser());

// Define your routes
app.use("/api/auth", AuthRoutes);
app.use("/", TaskRoute);

// Connect to MongoDB and start the server
async function connectToMongoDb() {
  try {
    await mongoose.connect(mongoUrl);
    console.log(`Connected to the database at ${mongoUrl}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
}

connectToMongoDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.error(e);
  });
 
   
   
