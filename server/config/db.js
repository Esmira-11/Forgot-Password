const { default: mongoose } = require("mongoose");

const db = {
    connect: async () => {
        try {
            await mongoose.connect("mongodb+srv://esmiraai:MDoJwTK5mpDZljZe@cluster0.3kppsbd.mongodb.net/chatProjectdb");
            console.log('CONNECTED!');

        } catch (err) {
            console.log('Mongodb connection error!!');
            console.log(err);
        }
    }
}

module.exports = {
    db
}