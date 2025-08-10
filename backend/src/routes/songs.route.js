import { Router } from "express";
import { protectRoute, requireAdmin} from '../middleware/auth.middleware.js'
import { getAllSongs, getFeaturedSongs, getMadeForYouSongs, getTrendingSongs } from "../controllers/song.controller.js";

const router = Router();

router.post('/', protectRoute, requireAdmin, getAllSongs);
router.post('/featured', getFeaturedSongs);
router.post('/made-for-you', getMadeForYouSongs);
router.post('/trending', getTrendingSongs);

export default router;