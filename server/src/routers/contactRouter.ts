import { Router } from "express";

const contactRouter = Router();

/**
 * Cont
 */
contactRouter.get("/", (req, res) => {
    return res.send("contact");
});

export default contactRouter;