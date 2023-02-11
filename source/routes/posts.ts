/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/posts';
import controller_home from '../controllers/home-controller'
import controller_quote from '../controllers/quote-controller'

const router = express.Router();

router.get('/home', controller_home.getHome);
router.get('/Quotes', controller_quote.getQuotes)

router.get('/posts', controller.getPosts);
router.get('/posts/:id', controller.getPost);
router.put('/posts/:id', controller.updatePost);
router.delete('/posts/:id', controller.deletePost);
router.post('/posts', controller.addPost);

export = router;