const Bootcamp = require("../models/Bootcamp");
const User = require("../models/User");

//CRUD
//add bootcamp
exports.createBootcamp = async (req, res) => {
  const { title, description, image } = req.body;
  try {
    const newBootcamp = new Bootcamp({
      title,
      description,
      image,
    });
    const addedBootcamp = await newBootcamp.save();
    res.status(200).json(addedBootcamp);
  } catch (error) {
    console.error(error);
  }
};

//get bootcamp
// exports.getBootcamp = async (req, res) => {
//   try {
//     const findBootcamps = await Bootcamp.find();
//     res.status(200).json(findBootcamps)
//   } catch (error) {
//     console.error(error)
//   }
// };

exports.getBootcamp = async (req, res) => {
  try {
    const findBootcamps = await Bootcamp.find();
    res.status(200).json(findBootcamps);
  } catch (error) {
    console.error(error);
  }
};

//get one bootcamp
exports.getOneBootcamp = async (req, res) => {
  Bootcamp.findById(req.params.id)
    .then((bootcamp) => res.json(bootcamp))
    .catch((err) =>
      res.status(404).json({ msg: "No bootcamp found with that ID" })
    );
};

//edit bootcamp
exports.editBootcamp = async (req, res) => {
  const id = req.params.id;
  Bootcamp.findByIdAndUpdate(id, req.body, { new: true })
    .then((bootcamp) => {
      if (!bootcamp) {
        return res.status(404).send({ msg: "Bootcamp Not Found " });
      }
      res.send(bootcamp);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR jjj" }));
};

//delete bootcamp
exports.deleteBootcamp = async (req, res) => {
  const id = req.params.id;
  Bootcamp.findByIdAndDelete(id)
    .then((bootcamp) => {
      if (!bootcamp) {
        return res.status(404).send({ msg: "Bootcamp Not Found " });
      }
      res.send(bootcamp);
    })
    .catch((err) => res.status(400).send({ msg: "Bootcaamp delete .." }));
};

//likes
exports.followBootcamp = async (req, res) => {
  const { ID, userID } = req.body;
  //const { userID } = req.body;
  const favBook = await Bootcamp.findById(req.body.ID);
  const liker = await User.findById(req.body.userID);
  const tab = liker.favorite;
  try {
    if (req.body.userID) {
      await User.findByIdAndUpdate(req.body.userID, {
        $push: { myBootcamps: req.body.ID },
      });
    } else null;
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(req.body.ID);
};
