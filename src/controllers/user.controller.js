const User = require("../schema/user.schema");

module.exports.getUsersWithPostCount = async (req, res) => {
  try {
    let { page, limit } = req.query;

    // Getting details of the User Post through aggregation
    let getUser = await User.aggregate([
      {
        $lookup: {
          from: "posts",
          localField: "_id",
          foreignField: "userId",
          as: "posts",
        },
      },
      {
        $project: {
          _id: "$_id",
          name: "$name",
          posts: { $size: "$posts" },
        },
      },
    ]);

   

    res.status(200).json({
      data: { users },
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};
