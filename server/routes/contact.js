let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/contact');

//Secure function for safety purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in 
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
/*GET Route for the Book List Page - READ Operation */
router.get('/', contactController.displayContactList);

/*GET Route for diaplaying the add Page - CREATE Operation */
router.get('/add', requireAuth, contactController.displayAddPage);

/*POST Route for processing the add page - CREATE Operation */
router.post('/add', requireAuth, contactController.processAddPage);

/*GET Route for diaplaying the Edit Page - UPDATE Operation */
router.get('/edit/:id', requireAuth,  contactController.displayEditPage);

/*POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth,  contactController.processEditPage);

/*GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth,  contactController.performDelete);

module.exports = router;