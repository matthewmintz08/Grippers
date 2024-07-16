const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
    name: { type:String, required: true},
    location: { type:String, required: true},
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    routes: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Route'}]
});

module.exports = mongoose.model('Gym', gymSchema);