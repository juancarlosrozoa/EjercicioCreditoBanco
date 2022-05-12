const jwt=require("jsonwebtoken");

const validarToken = (req,res,next) =>{

    const token = req.header("auth-token-jwt");

    if(!token){
        console.log("Token vacio")
        return (res.status(401).json({
            error:"Acceso denegado"
        }))
    }
    else{
        try {
            const verified = jwt.verify(token,"Colpatria");
            req.user = verified;
            //console.log(req.user);
            //console.log("Token validado")
            next()
        } catch (error) {
            //console.log("Token invalidado")
            res.status(400).json({
                error:"token no es valido"
            })
        }
    }
}

module.exports = validarToken;