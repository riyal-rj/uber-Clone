import express from 'express';

import {loginUser, registerUser, 
        verifyEmail,getUserProfile, logoutUser} from './../controllers/user.controller.js'
import {authUser} from './../middlewares/auth.middleware.js'

const router=express.Router();



router.post('/register',registerUser);
router.post('/verify',verifyEmail);
router.post('/login',loginUser);

router.get('/profile',authUser,getUserProfile);
router.get('/logout',authUser,logoutUser);

export default router;