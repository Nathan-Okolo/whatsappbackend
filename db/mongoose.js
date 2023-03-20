const mongoose = require("mongoose");

const config = require("config");
const Pusher = require("pusher");

const dbURL = config.get("dbURL");

mongoose
  .connect(dbURL)
  .then(console.log(`connected to the database`))
  .catch((e) => {
    console.log(`this error ${e} prevented us from connecting to the database`);
  });

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();


    changeStream.on("change", (change) => {

      if(change.operationType === 'insert'){
        const messageDetails = change.fullDocument
        Pusher.trigger('messages', 'inserted',
          {
            name:messageDetails.user,
            message: messageDetails.message
          }
        );
      } else{
        console.log('Error triggering Pusher')
      }
      
    });

});
