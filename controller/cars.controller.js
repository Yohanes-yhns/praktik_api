const { CarsTable } = require("../model");

const getCars = async (req, res) => {
  try {
    const carsData = await CarsTable.findAll({ order: [["id", "ASC"]] });
    res.status(200).json({
      data: carsData,
      message: "Success get cars data",
    });
  } catch (error) {
    console.log("Error" + error);
    res.status(500).json({
      data: [],
      message: "Something wrong, failed get cars data",
    });
  }
};

const getOneCar = async (req, res) => {
  try {
    const idCar = req.params.id;
    const carsData = await CarsTable.findOne({
      where: { id: idCar },
    });

    if (carsData === null) {
      res.status(404).json({
        data: {},
        message: "Data cars not found, please use another id",
      });
    } else {
      res.status(200).json({
        data: carsData,
        message: "Success get one cars data",
      });
    }
  } catch (error) {
    console.log("Error" + error);
    res.status(500).json({
      data: [],
      message: "Something wrong, failed get one cars data",
    });
  }
};

const createCars = async (req, res) => {
  try {
    const id = req.body.id;
    const name = req.body.name;
    const brand = req.body.brand;
    const year = req.body.year;

    const data = {
      id: id,
      cars_name: name,
      cars_brand: brand,
      year: year,
    };
    const tryCreate = await CarsTable.create(data);
    if (tryCreate) {
      res.status(200).json({ message: "Success Create New Car" });
    } else {
      res.status(500).json({ message: "Create New Car Failed" });
    }
  } catch (error) {
    console.log("Error" + error);
    res
      .status(500)
      .json({ message: "Something wrong, failed create cars data" });
  }
};

const updateCars = async (req, res) => {
  const id = req.params.id;
  try {
    const name = req.body.name;
    const brand = req.body.brand;
    const year = req.body.year;

    const data = {
      cars_name: name,
      cars_brand: brand,
      year: year,
    };

    const findData = await CarsTable.findByPk(id);
    if (findData) {
      const tryUpdate = await findData.update(data);
      if (tryUpdate) {
        res
          .status(200)
          .json({ message: "Succesfull Update cars data with id :", id });
      } else {
        res.status(500).json({ message: "Update car Failed with id :", id });
      }
    } else {
      res.status(404).json({
        message: "Cars with id " + id + " not found, please try another id",
      });
    }
  } catch (error) {
    console.log("Error" + error);
    res
      .status(500)
      .json({ message: "Something wrong, failed update cars data" });
  }
};

const deleteCars = async (req, res) => {
  const id = req.params.id;
  try {

    const findData = await CarsTable.findByPk(id);
    if (findData) {
      const tryDelete = await findData.destroy();
      if (tryDelete) {
        res
          .status(200)
          .json({ message: "Success delete data with id : " + id });
      } else {
        res.status(500).json({ message: "Failed delete data with id : " + id });
      }
    } else {
      res.status(404).json({ message: "Failed find data with id : " + id });
    }
  } catch (error) {
    console.log("Error" + error);
    res
      .status(500)
      .json({ message: "Something wrong, Failed delete data with id " + id });
  }
};

module.exports = { getCars, getOneCar, createCars, updateCars, deleteCars };
