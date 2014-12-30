
/*
 * GET home page.
 */
 var stuff = 0;
 exports.index = function (req, res) {
     stuff++;
     res.render('index', { title: 'Famous Angular Material Jade Express Node  Orgy | FAMJENO ',request:stuff });
 };