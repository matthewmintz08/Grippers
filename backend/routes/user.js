const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create a new user
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a user by Id
router.post('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).send({ message: 'User not found'});
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a user by Id
router.put('/:userId', async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new:true, runValidators:true});
        if(!user) {
            return res.status(404).send({message: "User not found"});
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;