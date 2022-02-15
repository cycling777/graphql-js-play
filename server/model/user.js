const mongoose = require('mongoose');
const MSchema = mongoose.Schema
// mongoose.set("useFindAnyModify", false);


const userSchema = new MSchema({
    name: String,
    age: Number,
    profession: String, 
});
module.exports = mongoose.model("User", userSchema);