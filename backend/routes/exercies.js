// Import router for creating a new route.
const router = require('express').Router();
// Import the model (Mongoose model).
let Exercise = require('../models/exercise.model');
// Create a new route for retrieving all data
router.route('/').get((req, res) => {
    Exercise.find() // Query all documents.
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('ERROR: ' + err));
});
// Create a new route for adding a new document
router.route('/add').post((req, res) => {
   const username = req.body.username;
   const description = req.body.descrition;
   const duration = req.body.duration;
   const date = req.body.date;
   // Create a new Exercise Object.
   const newExercise = new Exercise({
       username,
       description,
       duration,
       date,
   });
   // Save the model as a document (row).
   newExercise.save()
       .then(() => res.json('EXERCISE ADDED!'))
       .catch(err => res.status(400).json('ERROR: '+ err));
});
// Create a new route for query one document by it's id.
router.route('/:id').get((req, res) =>{
   Exercise.findById(req.params.id)
       .then(exercise => res.json(exercise))
       .catch(err => res.status(400).json);
});
// Create a new route for deleting single document by its id.
router.route('/:id').delete((req, res) =>{
    Exercise.findByIdAndDelete(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json);
});
// Create a new route for updating a document by its id.
router.route('/update/:id').post((req, res) => {
   Exercise.findById(req.params.id)
       .then(exercise => {
           exercise.username = req.body.username;
           exercise.description = req.body.description;
           exercise.duration = Number(req.body.duration);
           exercise.date = Date.parse(req.body.date);

           exercise.save()
               .then(() => res.json('Exercise updated!'))
               .catch(err => res.status(400).json("ERROR: " + err));
       })
       .catch(err => res.status(400).json("ERROR: " + err));
});
// Exports all the routes.
module.exports = router;
