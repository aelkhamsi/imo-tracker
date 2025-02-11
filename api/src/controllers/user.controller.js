

exports.getUsers = (_, res) => {
  const users = [
    {firstName: "Achraf", lastName: 'El Khamsi'}
  ];

  res.status(200).json(users)
}
