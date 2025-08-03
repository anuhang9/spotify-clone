import { Router } from "express";
import { getAdmin } from "../controllers/admin.controller.js";

const router = Router();

router.post('/', getAdmin);

export default router;