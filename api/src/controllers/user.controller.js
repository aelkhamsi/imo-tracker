const USERS = [
  { firstName: 'Hamza', lastName: 'ACHAK'},
  { firstName: 'Aymane', lastName: 'SAIDI'},
  { firstName: 'Ayoub', lastName: 'FDILI'},
  { firstName: 'Haitam', lastName: 'BENTAYEBI'},
  { firstName: 'Hamza', lastName: 'HATIM'},
  { firstName: 'Imane', lastName: 'BELARBI'},
  { firstName: 'Khadija', lastName: 'BENAISSA'},
  { firstName: 'Lina', lastName: 'CHAKIR'},
  { firstName: 'Mohamed Amine', lastName: 'HALHOUL'},
  { firstName: 'Mohamed', lastName: 'MOURCHIDI'},
  { firstName: 'Mohamed Wassim', lastName: 'AABIYDA'},
  { firstName: 'Mustapha Amine', lastName: 'AHIZOUNE'},
  { firstName: 'Nada', lastName: 'SANHADJI'},
  { firstName: 'Omar', lastName: 'ELHARIRI'},
  { firstName: 'Saad', lastName: 'GUESSOUS'},
  { firstName: 'Sami', lastName: 'MOUSSAOUI'},
  { firstName: 'Mountassir', lastName: 'TIGUINT'},
  { firstName: 'Yacine', lastName: 'GMOUH'},
  { firstName: 'Yahya', lastName: 'NASRI'},
  { firstName: 'Yasser', lastName: 'EL MOUSSAED'},
]

exports.getUsers = (_, res) => {
  res.status(200).json(USERS)
}
