
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    list: [
        {

            title: { type: String },
            task: {type: mongoose.Schema.Types.Mixed },
            completed: {
                type: Boolean,
                default: false
            }
        }
    ],

    pin: { type: Number },
},
{timestamps:true})



module.exports = mongoose.model('task', taskSchema)


