import { Router } from "express";
import { getStarts } from "../controllers/start.controller.js";
import {protectRoute, requireAdmin} from '../middleware/auth.middleware.js'

const router = Router();

router.post('/', protectRoute, requireAdmin, getStarts)

export default router;