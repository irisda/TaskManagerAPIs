const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'must provide a name'],
        trim: true, 
        maxlength: [20, 'Name can not be more than 20 characters']
    },
    completed: {
       type: Boolean,
       default: false
    }

});

//model is a representative of a collection

module.exports = mongoose.model('Task', TaskSchema);