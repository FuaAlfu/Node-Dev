// const express = require('express').Router();
const { Router } = require('express');
const authControler = require('../controlers/authControler')

const router = Router();

//a handler
// router.get('signup', () => {})
router.get('/signup', authControler.signup_get);
router.post('/signup', authControler.signup_post);
router.get('/login', authControler.login_get);
router.post('/login', authControler.login_post);

module.exports = router;