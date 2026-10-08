exports.getAll = (req, res) => {
  res.json({ data: [] });
};

exports.create = (req, res) => {
  res.status(201).json({ message: 'Created' });
};

exports.deleteOne = (req, res) => {
  res.sendStatus(204);
};
