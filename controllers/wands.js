var Wands = require('../models/wands');

module.exports = {
    findAll : function(req,res){
        Wands.find({}).exec(function(err,docs){
            if(err){ 
                res.json({success:false,err:err});
            }
            res.json({success:true,docs:docs});
        });        
    },
    findOne : function(req,res){
        Wands.findOne({_id:req.params.id}).exec(function(err,doc){
            if(err){ 
                res.json({success:false,err:err});
            }
            res.json({success:true,docs:[doc]});
        });
    },
    create: function(req,res){
        var wand = new Wands(req.body);
        wand.save(function(err,doc){
            res.json({success:true,docs:[doc]});
        });
    }
}