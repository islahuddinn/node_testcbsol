function authenticateToken(req,res, next){
    const authHeader = req.headers['autherization'];
    const token = authHeader

    if (token== null) return res.sendStatus(401);

    if(!token) return res.json({
        status:403,
        message: "user is not authenticated"
    });
    req.user = user;
    next();
}

