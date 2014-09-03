var MongoClient = require('mongodb').MongoClient,
  format = require('util').format,
  async = require('async');

var host = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : 'localhost';
var port = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : 27017;

async.waterfall([

    function(callback) {
      // do some stuff ...
      MongoClient.connect(format("mongodb://%s:%s/node-mongo-examples?w=1", host, port), function(err, db) {
        callback(null, db);
      });
    },
    function(db, callback) {
      // do some more stuff ...
      db.dropDatabase(function() {
        callback(null, db);
      });
    },
    function(db, callback) {
      var collection = db.collection('test');
      console.log('Print collection:' + collection);
      collection.remove(function(err, result) {
        callback(null, db, collection);
      });
    },
    function(db, collection, callback) {
      collection.insert([{'a':1, 'createdAt': new Date()}, {'a':2, 'createdAt': new Date()}, {'b':3, 'createdAt': new Date()}], {w:1}, function(docs){
        console.log(docs);
        callback(null, db, collection);
      });
    },
    function(db, collection, callback) {
      collection.count(function(err, count) {
        console.log("There are " + count + " records.");
      });
      collection.find().each(function(err, doc) {
        if(doc != null) console.log("Doc from Each ");
        console.dir(doc);
      });
      callback(null, db, collection);
    },
    function(db, collection, callback) {
      console.log('done.');
      callback(null, 'done');
    }
  ],
  // optional callback
  function(err, results) {
    // results is now equal to ['one', 'two']
  });
