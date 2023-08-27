const bcrypt = require("bcrypt");
const fs = require("fs");
const { User, Post, Comment } = require("../models"); // Import all models
const sequelize = require("../config/connection");
const path = require("path");

(async () => {
  // Sync the models with the database
  await sequelize.sync({ force: true });

  // Load user and post data from JSON files
  const usersData = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "userData.json"), "utf8")
  );
  const postsData = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "postData.json"), "utf8")
  );
  const commentsData = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "commentData.json"), "utf8")
  );

  // Seed users
  await User.bulkCreate(usersData);
  await Post.bulkCreate(postsData);
  await Comment.bulkCreate(commentsData);

  console.log("Database seeded successfully!");
  process.exit(0);
})();
