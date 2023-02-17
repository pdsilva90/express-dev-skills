var express = require('express');
var router = express.Router();

let skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/skills"

// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new
router.get('/new', skillsCtrl.new);
//GET /skills/:id
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
// Delete 
router.delete('/:id', skillsCtrl.delete);

module.exports = router;