const User = require('./user');
const BlogPost = require('./BlogPost');
const Comments = require('./comments');

User.hasMany(BlogPost, {
    foreignKey: 'BlogPost_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(User, {
    foreignKey: 'user_id'
});

BlogPost.belongsTo(User,{
    foreignKey: 'user_id',
})

BlogPost.hasMany(Comments, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE',
})


module.exports = { User, BlogPost, Comments }