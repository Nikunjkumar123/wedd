const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(403).json({ message: 'No token found' });
    }
    try {
        const data = jwt.verify(token, process.env.SECRCET);
        req.user = {
            userId: data.userId,
            email: data.email,
            role: data.role,
            name: data.name,
            gender:data.gender,
        };
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid or expired token', message: error.message });
    }
};

module.exports = verifyToken;
