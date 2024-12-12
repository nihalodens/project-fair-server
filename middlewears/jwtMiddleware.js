const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("Inside jwtMiddleware");
    
// logic authorise user
    const token = req.headers["authorization"].split(" ")[1]
    console.log(token);
    if(token){
        // verify
        try{
            const jwtResponse = jwt.verify(token,process.env.JWTPASSWORD)
            console.log(jwtResponse);
            req.userId = jwtResponse.userId
            next()  
        }catch(err){
            res.status(401).json("Authorisation failed... Please Login!!!")
        }
    }else{
        res.status(404).json("Authorisation failed... Token is Missing!!!")
    }
}

module.exports = jwtMiddleware