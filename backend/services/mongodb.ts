import {MongoClient} from 'mongodb';
import assert from 'assert';

export const initMongodb = () => {    // Connection URL
    const url = 'mongodb://localhost:27017';
    
    // Database Name
    // const dbName = 'mydb';
    
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
      assert.equal(null, err);
      console.log("===> Connected successfully to mongodb");
    
    //   const db = client.db(dbName);
    
      client.close();
    }); 
}