const mongoose = require('mongoose');

<<<<<<< HEAD
const URI = "mongodb+srv://QuadFlyTeam:QUADFLY.team20@clusterquadfly-i6m41.mongodb.net/test?retryWrites=true&w=majority";
=======
const URI = "mongodb+srv://QuadFlyTeam:password@clusterquadfly-i6m41.mongodb.net/test?retryWrites=true&w=majority";
>>>>>>> 892cb1f85dd1c60706acd0cb1ce0a33fb0cbb024

mongoose.connect(URI,{
        useCreateIndex: true,
        useNewUrlParser:true,
        useUnifiedTopology: true
})

.then(db => console.log('DB is connected'))
.catch( err => console.error(err));

module.exports = mongoose;

