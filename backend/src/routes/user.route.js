import { Router } from "express";
import {protectRoute} from '../middleware/auth.middleware.js'
import { getAllUsers } from "../controllers/user.controller.js";

const router = Router();

router.post('/', protectRoute, getAllUsers);

export default router;