const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const userData = require('./userData.json');
const blogPostData = require('./blogPost.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const existingUsers = await User.findAll();
  
    if (existingUsers.length === 0) {
      const createdUsers = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });
  
      for (const blogPost of blogPostData) {
        const createdBlogPost = await BlogPost.create({
          ...blogPost,
          user_id: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
        });
  
        for (const comment of commentData) {
          await Comment.create({
            ...comment,
            user_id: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
            blogPost_id: createdBlogPost.id,
          });
        }
      }
    } else {
      console.log('Seed data already exists. Skipping seed process.');
    }
  };
  
  seedDatabase();