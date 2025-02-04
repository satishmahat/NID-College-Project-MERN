import express from "express";
import { postAForm, getAllForm, updateForm, deleteAForm } from "./formController.js";

const router = express.Router();

router.post("/create-entry", postAForm);
router.get("/", getAllForm);
router.put("/edit/:id", updateForm);
router.delete("/:id", deleteAForm);

export default router;
