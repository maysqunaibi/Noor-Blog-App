const express = require('express')

const BlogCtrl = require('../controllers/blog-ctrl')

const router = express.Router()

router.post('/blog', BlogCtrl.createBlog)
router.put('/blog/:id', BlogCtrl.updateBlog)
router.delete('/blog/:id', BlogCtrl.deleteBlog)
router.get('/blog/:id', BlogCtrl.getBlogById)
router.get('/blogs', BlogCtrl.getBlogs)

module.exports = router
