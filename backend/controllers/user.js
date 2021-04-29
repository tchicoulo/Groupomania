const db = require('../db_connect');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


//Signup, inscription
exports.signup = (req, res, next) => {
    const regexPasswordHard = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; //Regex Password avec caractères exigés. 

    if (regexPasswordHard.test(req.body.password)){
       
        const values = [req.body.email];
        db.query('SELECT * FROM user WHERE email= ?', values, (err, results, rows) => {
                //Si email déjà utilisé
                if (results.length > 0) {
                    res.status(401).json({
                        message: 'Adresse mail non disponible : Email déjà utilisé.'
                    })
                //Si email non utilisé
                } else {
                //Cryptage du MDP
                bcrypt.hash(req.body.password, 10)
                .then(hash => {
                    //Ajout à la BDD
                    const values = [req.body.pseudo, req.body.email, hash];
                    db.query('INSERT INTO user VALUES (NULL, ?, ?, ?)', values,
                        (err, results, fields) => {
                            if (err) {
                                console.log(err);
                                res.status(400).json("erreur");
                            }
                            res.status(201).json({
                                message: 'Votre compte à bien été créé !'
                            });
                        }
                    );
                })
                .catch(error => res.status(500).json({
                    error
                }));
            }
            });
     } 
     else {
         res.status(400).json({ message : 'Mot de passe invalide, veuillez mettre au minimum 8 caractères, dont 1 majuscule et un nombre'})
     }
}

// Login, connection
 exports.login = (req, res, next) => {

    const values = [req.body.email];
    db.query('SELECT * FROM user WHERE email= ?', values, (error, results, fields) => {
        // Si l'utilisateur existe
        if (results.length > 0) {
            bcrypt.compare(req.body.password, results[0].password)
                .then( bcryptOk => {
                    if (!bcryptOk) {
                        res.status(401).json({ message : 'Mot de passe incorrect !'})
                    } else {
                        res.status(201).json({
                            userId: results[0].id,
                            pseudo: results[0].pseudo,
                            token: jwt.sign(
                                {userId: results[0].id},
                                process.env.TOKEN,
                                { expiresIn: '24h'}
                            )
                        });
                    }
                })
        } else {
            res.status(400).json({ message: 'Utilisateur non trouvé.'})
            
        }
    })
 };
 
// Delete, Suppression utilisateur
exports.delete = (req, res, next) => {

    const values = [req.params.id];
    db.query('DELETE FROM user WHERE user.id = ?', values, (error , results, fields) => {
        if (error) {
            res.status(400).json({error})
        }
        res.status(200).json({ message: `L\'utilisateur à bien été supprimé !`})
    })
}