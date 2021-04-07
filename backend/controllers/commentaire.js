const db = require('../db_connect');

//Tous les commentaires d'un post en particulier
exports.getComments = (req, res, next) => {
    const values = [req.params.id];
    db.query('SELECT user.id, user.pseudo, commentaire.id,  commentaire.date_com, commentaire.description_com FROM user INNER JOIN commentaire ON user.id = commentaire.id_user WHERE commentaire.id_post = ? ORDER BY commentaire.date_com DESC', values, (error, results, fields) => {
        if (error) {
            res.status(400).json({error})
        }
        res.status(200).json(results)
    })
}

//Création d'un commentaire
exports.createComment = (req, res, next) => {
    const values = [req.body.description, req.params.id, req.body.id_user];
    db.query('INSERT INTO commentaire VALUES (NULL, NOW(), ?, ?, ?)', values, (error, results, fields) => {
        if (error) {
            res.status(400).json({error})
        }
        res.status(201).json({ "comment": {"href": `http://localhost:3000/api/posts/${req.params.id}/comments`}})
    })
}

//Modification d'un commentaire
exports.modifyComment = (req, res, next) => {
    const values = [req.body.description, req.params.id];
    db.query('UPDATE commentaire SET description_com = ? WHERE commentaire.id = ?', values, (error, results, fields) =>  {
        if (error) {
            res.status(400).json({error})
        }
        res.status(200).json({ message: 'Votre commentaire à été modifié ! '})
    })
}

//Suppression d'un commentaire
exports.deleteComment = (req, res, next) => {
    const values = [req.params.id];
    db.query('DELETE FROM commentaire WHERE commentaire.id = ?', values, (error, results, fields) => {
        if (error) {
            res.status(400).json({error})
        }
        res.status(200).json({ message: 'Votre commentaire à bien été supprimé ! '})
    })
}


