
import express from "express";
import { login, register,getUserByEmail,updateUserName } from "../controllers/UserControllers.js";
import { addProduct, getAllProducts } from "../controllers/ProductControllers.js";
import { Madhuri } from "../controllers/All-Controllers.js";

var router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/updateUserName',updateUserName)
router.post('/getUserByEmail',getUserByEmail)
router.post('/add-product', addProduct);
router.get('/get-all-products', getAllProducts);
router.get('/madhuri', Madhuri);

export default router;



