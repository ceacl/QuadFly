const mongoose = require('mongoose');
const URI = "mongodb+srv://QuadFlyTeam:QUADFLY.team20@clusterquadfly-i6m41.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URI,{
        useCreateIndex: true,
        useNewUrlParser:true,
        useUnifiedTopology: true
})

.then(db => console.log('DB is connected'))
.catch( err => console.error(err));

module.exports = mongoose;

