const BarangServiceGet = require("../services/BarangServiceGet");

const BarangControllerGet = async (req, res) => {
  return res.status(200).json(await BarangServiceGet(req.params.kodeBarang));
};

module.exports = BarangControllerGet;