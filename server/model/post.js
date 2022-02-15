const mongoose = require('mongoose');
const MSchema = mongoose.Schema
// mongoose.set("useFindAnyModify", false);

const PostSchema = MSchema({
    comment: String,
    uerId: String,
});
module.exports = mongoose.model("Post", PostSchema);