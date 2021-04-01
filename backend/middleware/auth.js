const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    try {
        //On recupère le token
        const token = req.headers.authorization.split(' ')[1];
        //On le decode et le verifie avec le token dans la variable d'environement
        const decodedToken = jwt.verify(token, process.env.TOKEN);
        //On extrait l'user id du TOKEN
        const userId = decodedToken.userId;
        //On le compare avec celui de la requete
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID non valable';
        } else {
            next(); //token validé, suivant 
        }
    } catch (error) {
        res.status(401).json({ error: error | 'requête non authentifiée'});
    }
};