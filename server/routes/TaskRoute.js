import express from "express";
import { Taskget } from "../controllers/Taskget.js";
import { Delete } from "../controllers/Delete.js";
import { ProtectionMiddle } from "../middleware/Protection.js";
import { Edit } from "../controllers/Edit.js";
import { ViewLL } from "../controllers/Viewall.js";
const router=express.Router();
router.post("/task",ProtectionMiddle,Taskget);
router.post("/task/delete:id",ProtectionMiddle,Delete);
router.post("/task/edit:id",ProtectionMiddle,Edit);
router.get("/views",ProtectionMiddle,ViewLL)
export default router
