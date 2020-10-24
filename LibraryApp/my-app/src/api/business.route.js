const express = require('express');
const businessRoutes = express.Router();

let Business = require('./business.model');
//Insert  data

businessRoutes.route('/add').post(function(req,res){
let business = new Business(req.body);
business.save()
.then(business =>{
    res.status(200).json({'business': 'Libray Added Susccessfull'});
})
.catch(err =>{
    res.status(400).send("unable to save to database");
});
});

//get data

businessRoutes.route('/').get(function(req, res){
    Business.find(function(err,business){
        if(err)
            console.log(err);
        else{
            res.json(business);
        }
    });
});


//Edit

businessRoutes.route('/edit/:id').get(function (req,res){
let id= req.params.id;
Business.findById(id, function(err, business){
res.json(business);
});
});

//Update

businessRoutes.route('/update/:id').post(function(req,res){
    Business.findById(req.params.id, function(err,business){
            if(!business)
            res.status(404).send("Data is not Fund");
            else{
                business.person_name =req.body.person_name;
                business.business_name =req.body.business_name;
                business.business_nic_number =req.body.business_nic_number;

                business.save().then(business=>{
                        res.json('Update Complete');


                })
                .catch(err=>{
                    res.status(400).send("unable to update");
                });

            }
    });

});


//Delete

businessRoutes.route('/delete/:id').get(function(req,res){
    Business.findByIdAndRemove({_id:req.params.id},function(err,business){
        if(err)res.json(err);
        else res.json("Sucessfully Removed");
    });
});

module.exports=businessRoutes;