const sequelize = require('../config/connection');
const { User, BlogPost, Comments } = require('../models');

const userData = require ('./userData.json');
const blogPostData = require('./BlogPost.json')
const commentData = require('./commentData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

     await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    })

    await BlogPost.create(blogPostData)
    await Comments.create()
}

seedDatabase();