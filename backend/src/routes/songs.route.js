import { Router } from "express";

const router = Router();

router.post('/', (req, res)=>{
    res.send("songs route")
})

export default router;