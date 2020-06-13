// Import router, because we are creating a route.
const router = require('express').Router();
// Import model (Mongoose Model).
let User = require('../models/user.model');
// Define a new route for query (in point / http request).
router.route('/').get((req, res) => {
    User.find() // We query all the documents (rows).
        .then(users => res.json(users))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

// Define a new route for adding a new document (row).
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});
    // Save the new user inside Mongoose.
    newUser.save()
        .then(() => res.json('USER ADDED!'))
        .catch(err => res.status(400).json('ERROR' + err));
});

module.exports = router;