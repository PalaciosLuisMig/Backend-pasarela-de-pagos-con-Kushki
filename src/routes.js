const express = require("express");
const router = express.Router();

router.post("/api/cards", require("./api/cards"));
router.delete("/api/void/:ticket", require("./api/void"));
router.get("/api/transaction-list", require("./api/transaction-list"));

router.get("/", require("./api"));

module.exports = router;
