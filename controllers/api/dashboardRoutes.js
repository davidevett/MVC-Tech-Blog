// const router = require('express').Router();
// const { User, Post, Comment } = require('../../models');

// // dashboard displays posts
// router.get('/dashboard', (req, res) => {
//     Post.findOne({
//         where: { userId: req.session.user_id },
//         include: [User, Comment],
//     });
// });

// router.post('/dashboard', (req, res) => {
//     // create a new post
//     Post.create({
//         title: req.body.title,
//         content: req.body.content,
//         userId: req.session.user_id,
//     });
// });

// router.get('/comment', (req, res) => {
//     Comment.findAll({
//         where: { postId: req.query.post_id },
//         include: [User],
//     });
// });

// router.post('/comment', (req, res) => {
//     // create a new comment
//     Comment.create({
//         commentText: req.body.commentText,
//         postId: req.body.post_id,
//         userId: req.session.user_id,
//     });
// });

// module.exports = router;
