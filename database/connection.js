const mongoose = require('mongoose');

const connect = async() => {
    await mongoose.connect('mongodb+srv://saad:saad@cluster0.nud1k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(() => {
            console.log("database started!");
        }).catch((err) => {
            console.log(err);
        })

    await mongoose.connection.on('error', err => {
        console.log(err);
    });

}

module.exports = connect