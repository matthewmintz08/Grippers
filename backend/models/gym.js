const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
    name: { type:String, required: true},
    location: { type:String, required: true},
    routes: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Route'}]
});

module.exports = mongoose.model('Gym', gymSchema);