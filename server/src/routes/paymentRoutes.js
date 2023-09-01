const express = require("express");
const {
  createOrder,
  captureOrder,
  cancelPayment,
} = require("../controllers/paymentControllers");

const router = express.Router();
router.get("/", async (req, res) => {
  res.send("Estoy pagando!");
});
router.post("/create-order", createOrder);
router.get("/capture-order", captureOrder);
router.get("/cancel-order", cancelPayment);

module.exports = router;
