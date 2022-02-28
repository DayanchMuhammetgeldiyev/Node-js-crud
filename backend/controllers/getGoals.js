const asyncHandler =  require('express-async-handler');

// @desc Get Goals
// GET /api/v1/goals
// @access Private
const getGoals = asyncHandler (async (req, res) => {
     if(!req.body.text){
         res.status(400)
         throw new Error('Bad Request')
     }
    
    res.status(200).json({ message: 'Goals World' });
});
// @desc Set Goals
// POST /api/v1/goals
// @access Private
const setGoal = asyncHandler( async (req, res) => {
    res.status(200).json({ message: 'Set Goals' }); 
});
// @desc Update Goals
// PUT /api/v1/goals/:id
// @access Private
const updateGoal = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}` });
})
// @desc Delete Goals
// DELETE /api/v1/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}` });
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}