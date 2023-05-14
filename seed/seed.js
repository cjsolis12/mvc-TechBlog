const sequelize = require('../config/connection');
const { User, BlogPost, Comments } = require('../models');

const userData = require('./userData.json');
const blogPostData = require('./BlogPost.json')
const commentData = require('./commentData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    const user =  await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for(const blogPost of blogPostData){
        await BlogPost.create({
            ...blogPost,
            user_id: user[Math.floor(Math.random() * user.length)].id,
        })
    }

}

seedDatabase();