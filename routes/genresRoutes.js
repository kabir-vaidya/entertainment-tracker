const router = require('express').Router();
const {getGenres, addGenre, deleteGenre} = require('../controllers/genresController');
const links = require('./linksRoutes')
router.use('/:gid/links', links);


router.route("/")
      .get(getGenres)
      .post(addGenre);
    
router.route("/:id")
      .delete(deleteGenre);


module.exports = router;