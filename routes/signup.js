const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const saltSteps = 10;
const User = require('../models/User.model');

router.get('/sign-up', (req, res) => {
    res.render('signup')
 })

 router.post('/sign-up', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltSteps)
    User.create({email, username, password: hashedPassword})
    .then((newUser) => res.redirect(`/sign-up/${newUser.username}`))
}
)