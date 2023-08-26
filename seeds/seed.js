const bcrypt = require('bcrypt');
const fs = require('fs');
const { User, Post, Comment } = require('../models'); // Adjust the import path based on your project structure

(async () => {
  // Sync the models with the database
  await User.sync({ force: true });
  await Post.sync({ force: true });
  await Comment.sync({ force: true });

  // Load user and post data from JSON files
  const usersData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
  const postsData = JSON.parse(fs.readFileSync('./postData.json', 'utf8'));

  // Seed users
  await User.bulkCreate(usersData.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 10),
  })));

  // Seed posts
  const users = await User.findAll();
  for (const postData of postsData) {
    const user = users.find(u => u.username === postData.username);
    await Post.create({ ...postData, userId: user.id });
  }

  console.log('Database seeded successfully!');
})();
