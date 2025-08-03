import { Router } from "express";

const router = Router();

router.post('/', (req, res)=>{
    res.send("album route")
})

export default router;