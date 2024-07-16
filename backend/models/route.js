const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    gymId: { type:mongoose.Schema.Types.ObjectId, ref: 'Gym', required: true},
    name: {type: String, required:true},
    photo: { type: String, required: true},
    rating: { type: String, required: true},
    wall : { type: String, required: true},
    completed: { type: Boolean, required: true},
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    climbedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Route', routeSchema)