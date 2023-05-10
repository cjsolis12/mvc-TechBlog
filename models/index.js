const User = require('./user');
const BlogPost = require('./BlogPost');
const Comments = require('./comments');

User.hasMany(BlogPost, {
    foreignKey: 'BlogPost_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, BlogPost, Comments }