const express = require('express');
const router = express.Router();

const Article = require('../models/article');

// Vanilla promise way:

// router.get('/articles', (req, res, next) => {
//     Article.findAll()
//     .then(articles => res.json(articles))
//     .catch(next)
// })

// `async` way:

router.get('/articles/', async (req, res, next) => {
    try {
        const articles = await Article.findAll()
        res.json(articles)
    } catch (err) {
        next(err)
    }
})

// Better `async`, using `express-async-handler` (npm) to add the `catch`:

// router.get('/articles/', asyncHandler(async (req, res, next) => {
//     const articles = await Article.findAll()
//     res.json(articles)
// }))

router.get('/articles/:id', async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.id)
        if (!article) {
            const err = Error('not found')
            // Express's default error handler respects `.status`
            err.status = 404
            return next(err) // or `throw err`
        }
        res.json(article)
    } catch (err) {
        next(err)
    }
})

router.post('/articles/', async (req, res, next) => {
    try {
        const article = await Article.create(req.body)
        // const newArticle = new Article(req.body) // or Article.build
        // const article = await newArticle.save()
        res.json({
            message: 'Created successfully',
            article
        })
    } catch (err) {
        next(err)
    }
})

// Most performant (but tricky) way:

router.put('/articles/:id', async (req, res, next) => {
    try {
        // fancy array destructuring – gets result[0][1]
        const [, [article]] = await Article.update(req.body, {
            returning: true, // Postgres option, gets db rows back
            where: {
                id: req.params.id
            },
        })
        res.json({
            message: 'Updated successfully',
            article
        })
    } catch (err) {
        next(err)
    }
})

// Simpler way (two DB calls, though):

// router.put('/articles/:id', async (req, res, next) => {
//     try {
//         const article = await Article.findById(req.params.id)
//         const updated = await article.update(req.body)
//         res.json({
//             message: 'Updated successfully',
//             article: updated
//         })
//     } catch (err) {
//         next(err)
//     }
// })

module.exports = router;
