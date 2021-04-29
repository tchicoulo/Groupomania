const db =  require('../db_connect');

//Tous les posts
exports.getPosts = (req, res, next) => {
    db.query('SELECT user.id, user.pseudo, post.id, post.titre, post.description, post.date AS date, post.id_user FROM user INNER JOIN post ON user.id = post.id_user ORDER BY date DESC', (error, results, fields) => {
        if (error) {
            res.status(400).json({lol})
        } 
        res.status(200).json(results);
    })
}

//Un post en particulier
exports.getOnePost = (req, res, next) => {
    
    const values = [req.params.id];
    db.query('SELECT * FROM post WHERE post.id = ?', values, (error, results, fields) => {
        if (error) {
            res.status(400).json({error});
        }
        res.status(200).json(results)
    })
}

//Creation post
exports.createPost = (req, res, next) => {
    
    const values = [req.body.titre, req.body.description, req.body.id_user];
    db.query('INSERT INTO post VALUES (NULL, ?, ?, NOW(), ?)', values, (error, results, fields) => {
        if (error) {
            res.status(400).json({error})
        }
        res.status(201).json({ "post": {"href": "http://localhost:3000/api/posts"}})
    })
}

//Modification post
exports.modifyPost = (req, res, next) => {

    const values = [req.body.titre, req.body.description, req.params.id];
    db.query('UPDATE post SET titre = ?, description = ? WHERE post.id = ?', values, (error , results, fields) => {
        if (error) {
            res.status(400).json({error})
        }
        res.status(200).json({ "post": {"href": `http://localhost:3000/api/posts/${req.params.id}`}})
    })
}

//Suppression post
exports.deletePost = (req, res, next) => {

    const values = [req.params.id];
    db.query('DELETE FROM post WHERE post.id = ?', values, (error, results, fields) => {
        if (error) {
            res.status(400).json({error})       
        }
        res.status(200).json({ message: 'Le post à bien été supprimé !'});
    })
}


