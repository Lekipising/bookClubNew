import express from "express";
import { addRecord, viewRecord, viewAllRecord, updateRecord, viewMemberRecord } from '../controllers/borrowController.js'
// import { authenticate } from '../middlewares/auth.js';

const borrowRouter = express.Router();

// Create Record borrow/
borrowRouter.post("/", addRecord);

// View Record borrow/:id
borrowRouter.get("/:id", viewRecord);

// View all records borrow/
borrowRouter.get("/", viewAllRecord);

// Update borrowing record borrow/
borrowRouter.put("/", updateRecord);

// View Member Borrowings borrow/bymember/:memberid
borrowRouter.get("/", viewMemberRecord);


export default borrowRouter;