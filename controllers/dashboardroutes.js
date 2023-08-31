const router = require("express").Router();
const withAuth = require("../utils/auth");
const PostModel = require("../models/Post");
const UserModel = require("../models/User");
const CommentModel = require("../models/Comment");

// console.log(req.session.user_id)
router.get("/", withAuth, async function (req, res) {
  try {
    const postsData = await PostModel.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["id", "title", "content", "date_created"],
      include: [
        {
          model: UserModel,
          attributes: ["user_name"],
        },
        {
          model: CommentModel,
          attributes: ["content", "date_created", "id"],
          include: {
            model: UserModel,
            attributes: ["user_name"],
          },
        },
      ],
    });
    const posts = postsData.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      loggedIn: req.session.logged_in,
      userName: req.session.user_name,
      posts,
    });
  } catch (error) {
    res.render("dashboard", {
      loggedIn: req.session.logged_in,
      userName: req.session.user_name,
      error: "Failed to load posts",
    });
  }
});

router.get("/new", withAuth, async function (req, res) {
  res.render("newpost", {
    loggedIn: req.session.logged_in,
  });
});

router.get("/edit/:id", withAuth, async function (req, res) {
  try {
    const postData = await PostModel.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "title", "content", "date_created"],
    });
    const post = postData.get({ plain: true });
    res.render("editpost", {
      loggedIn: req.session.logged_in,
      post,
    });
  } catch (error) {
    res.render("editpost", {
      loggedIn: req.session.logged_in,
      error: "Failed to load post",
    });
  }
});

module.exports = router;
