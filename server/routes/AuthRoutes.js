import express from "express";
  import { Signup } from "../controllers/Signup.js";
  import { Login } from "../controllers/Login.js";
const router=express.Router();
router.post("/signup",Signup);
router.post("/login",Login);
export default router;
