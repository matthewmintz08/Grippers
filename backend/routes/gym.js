const express = require('express');
const router = express.Router();
const Gym = require('../models/gym');

// Create a new gym
router.post('/', async (req, res) => {
    try {
        const gym = new Gym(req.body);
        await gym.save();
        res.status(201).send(gym);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Create a new gym
router.get('/', async (req, res) => {
    try {
        const gyms = await Gym.find();
        res.send(gyms)
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;