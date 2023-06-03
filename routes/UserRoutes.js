
import express from "express";
import { login, register,getUserByEmail,updateUserName } from "../controllers/UserControllers.js";
import { addProduct, getAllProducts } from "../controllers/ProductControllers.js";
import { Madhuri } from "../controllers/All-Controllers.js";
import { checkEmail, checkName } from "../middlewares/authMiddleware.js";
import { loginOtpCheckForEmail, loginOtpCheckForNumber,  otpCkeckForEmail, otpCkeckForNumber, otpLogin, otpRegistration} from "../controllers/OtpControllers.js";

var router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/updateUserName',checkEmail,checkName,updateUserName)
router.post('/getUserByEmail',getUserByEmail)
router.post('/add-product', addProduct);
router.post('/otpRegistration', otpRegistration);
router.post('/otpCkeckForNumber', otpCkeckForNumber);
router.post('/otpCkeckForEmail', otpCkeckForEmail);
router.post('/otpLogin', otpLogin);
// router.post('/otpCheckLogin', otpCheckLogin);
router.post('/loginOtpCheckForEmail', loginOtpCheckForEmail);
router.post('/loginOtpCheckForNumber', loginOtpCheckForNumber);

router.get('/get-all-products', getAllProducts);
router.get('/madhuri', Madhuri);

export default router;



