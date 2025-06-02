const express = require("express");
const router = express.Router();
const {
  getCars,
  getOneCar,
  createCars,
  updateCars,
  deleteCars,
} = require("../controller/cars.controller");

router.get("/cars", getCars);
router.get("/cars/:id", getOneCar);
router.post("/cars", createCars);
router.put("/cars/:id", updateCars);
router.delete("/cars/:id", deleteCars);

module.exports = router;
