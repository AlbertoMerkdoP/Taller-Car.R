const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyToken = async (req, res, next) => {
    // Obtener el token proveniente de los headers
    const token = req.headers["x-access-token"];

    // En caso de que no exista el token
    if (!token) {
        return res
            .status(401)
            .send({ auth: false, message: "No ha sido enviado un token" });
    }

    // Decodifica el token
    const decoded = await jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
            return res.status(401).json({ "auth": false, "error": true, "message": 'Acceso no autorizado' });
        } else {
            // Guarda el token en un objeto para las rutas
            req.userId = decoded.id;
        }
        // continua con la funcion siguiente
        next();
    })

    // next();
}
module.exports = verifyToken