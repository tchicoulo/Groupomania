const db =  require('../db_connect');


exports.getPosts = (req, res, next) => {
    db.query('SELECT user.pseudo, post.id, post.id_user, post.titre, post.description, post.date AS date FROM user INNER JOIN post on user.id = post.id_user ORDER BY date DESC', (error, results, fields) => {
        if (error) {
            res.status(400).json({error})
        } 
        res.status(200).json(results);
    })
}

exports.getOnePost = (req, res, next) => {}

exports.createPost = (req, res, next) => {
    db.query(`INSERT INTO post VALUES (NULL, '${req.body.titre}', '${req.body.description}', NOW(), '${req.body.id_user}')`, (error, results, fields) => {
        if (error) {
            res.status(400).json({error})
        }
        res.status(201).json({ message :  'Votre post à bien été publié !'})
    })
}

exports.modifyPost = (req, res, next) => {}

exports.deletePost = (req, res, next) => {}


