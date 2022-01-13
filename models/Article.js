const { model, Schema } = require("mongoose");

const articleSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title required!'],
    },
});

module.exports = model('Article', articleSchema);