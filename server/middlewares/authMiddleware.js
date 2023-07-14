import JWT from 'jsonwebtoken'

//Protected routes using token

export const requireLogin = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        next();
    } catch (error) {
        console.log(error)
    }
}