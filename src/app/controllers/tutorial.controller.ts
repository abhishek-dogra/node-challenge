exports.create = (req: { body: { title: any; description: any; published: any; }; }, res: any) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };
  res.send(tutorial);
};

exports.findAll = (req: any, res: any) => {
  const title = req.query.title;
  res.send({yes:"No"});
};

exports.findOne = (req: any, res: any) => {
  const id = req.params.id;
  res.send({haan:"yahan"});
};