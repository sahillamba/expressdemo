var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

var URL = 'mongodb://lsahil:cargo99@ds161890.mlab.com:61890/lsahil'


/* GET users listing. */
router.get('/', function(req, res, next) {
	MongoClient.connect(URL, function(err, db) {
	  if (err)  res.send('DB connection Issue !');
 		var collection = db.collection('users');
			db.collection('users').find().toArray(function(err, results) {
			  res.json(results);
	      	  db.close()
			})
	})
});

/* POST users listing. */
router.post('/', function(req, res, next) {
	// console.log(req.body);
	MongoClient.connect(URL, function(err, db) {
	  if (err)  res.send('DB connection Issue !');
	  var collection = db.collection('users');
	  console.log("Saving " + req.body);

	  collection.save(req.body, function(err, result) {
   		  res.send('Saved !!');
	      db.close()
	  })
	})

});



module.exports = router;
