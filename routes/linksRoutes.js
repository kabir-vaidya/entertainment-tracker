const router = require('express').Router({mergeParams: true});
const {getLink, addLink, deleteLink} = require('../controllers/linksController');

router.route("/")
      .get(getLink)
      .post(addLink);
    
router.route("/:id")
      .delete(deleteLink);



module.exports = router;