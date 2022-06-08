exports.getPosts = (req, res, next ) => {
  res.status(200).json({name: 'Standa'});
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  res.status(201).json({id: new Date().toISOString(), title: title, content: content});
}