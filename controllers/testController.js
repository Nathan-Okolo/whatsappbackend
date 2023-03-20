const Message = require("../model/dbMessages");
const Messages = require("../model/dbMessages");

module.exports.test_server = async (req, res) => {
  try {
    res.status(200).send("Hello world");
  } catch (e) {
    res.status(500).send(`this error ${e} occoured`);
  }
};

module.exports.send_messages = async (req, res) => {
  const dbMessage = req.body;
  try {
    Messages.create(dbMessage, (err, data) => {
      res.status(201).send(`new message created: \n ${data}`);
    });
  } catch (error) {
    res.status(500).send(`this error ${e} occoured`);
  }
};

module.exports.get_allMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).send(messages);
  } catch (e) {
    res.status(500).send(`this error ${e} occoured`);
  }
};
