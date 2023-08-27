const router = require('express').Router();
const PostModel = require('../models/Post');
const UserModel = require('../models/User');
const CommentModel = require('../models/Comment');

router.get('/', async function (req, res) {
    try { 
        const postsData = await PostModel.findAll({
            attributes: [
                "id", "title", "content", "date_created"
            ],
            include: [
                {
                    model: UserModel,
                    attributes: ["user_name"]

                },
                {
                    model: CommentModel,
                    attributes: ["content", "date_created", "id",],
                    include: {
                        model: UserModel,
                        attributes: ["user_name"]
                    }
                   
                }
            ]
            
        });
        const posts = postsData.map((post) => post.get({ plain: true }));
            res.render('home',{
            loggedIn: req.session.logged_in, posts
    
        })
    } catch (error) {
            res.render('home',{
            loggedIn: req.session.logged_in, 
            error:'Failed to load posts'

        })
    }
    
});

router.get('/signup', function(req, res) {
    res.render('signup')
});

module.exports = router 
