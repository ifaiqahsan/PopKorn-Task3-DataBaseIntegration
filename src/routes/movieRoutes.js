const express = require('express');
const router = express.Router();

// Placeholder route for testing
router.get('/', (req, res) => {
    res.json({ message: "Route is ready for database integration" });
});

module.exports = router;