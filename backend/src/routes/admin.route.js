import { Router } from "express";
import { createSong, deleteSong, createPlaylist, deletePlaylist, checkAdmin } from "../controllers/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.use(protectRoute, requireAdmin);

router.get("/check", checkAdmin);

router.post("/songs", createSong);
router.delete("/songs/:id", deleteSong);

router.post("/playlists", createPlaylist);
router.delete("/playlists/:id", deletePlaylist);

export default router;