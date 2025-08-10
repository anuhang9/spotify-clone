import { Router } from "express";
import { getAlbumById, getAllAlbums } from "../controllers/album.controller.js";

const router = Router();

router.post('/', getAllAlbums)
router.post('/:albumId', getAlbumById)

export default router;