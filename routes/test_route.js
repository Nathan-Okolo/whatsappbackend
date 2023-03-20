const { Router } = require("express");
const testController = require("../controllers/testController");
const router = Router();

router.get("/", testController.test_server);
router.post("/messages/new", testController.send_messages);
router.get("/messages/sync", testController.get_allMessages);
module.exports = router;
