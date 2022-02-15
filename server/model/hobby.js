const mongoose = require('mongoose');
const MSchema = mongoose.Schema

// mongoose.set('useFindAnyModify', false);

const HobbySchema = MSchema({
    title: String,
    description: String,
    userId: String,
});
module.exports = mongoose.model("Hobby", HobbySchema);