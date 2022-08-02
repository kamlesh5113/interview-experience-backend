const express = require('express');

const router = express.Router();


const { postInterview, getInterview, getInterviewbyId, getInterviewbyinterviewid, delte, getInterviewbyName } = require('../InterviewController/InterviewController');

router.post('/', postInterview);

router.get('/', getInterview);

router.get('/:id', getInterviewbyinterviewid);

router.get('/get/:id', getInterviewbyId);

router.get('/byName/:id', getInterviewbyName);

router.delete('/:id', delte);

module.exports = router;