var mongoose = require('mongoose');
var WandSchema = new mongoose.Schema({
    maker: String,
    name: String,
    price : Number,
    required_level : Number,
    image_url : String,
    range: Number,
    damage: {        
        melee : Number,
        kinetic: Number,
        psionc : Number,
        fire : Number,
        water : Number,
        earth : Number,
        air :  Number,
        life : Number,
        poison : Number,
        death : Number,
        corrosion : Number
    }
});

module.exports = mongoose.model('Wand', WandSchema);
