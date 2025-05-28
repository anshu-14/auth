const bcrypt = require('bcryptjs');

// Simulate hashed password
const password = bcrypt.hashSync('123456', 10);

const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password, // hashed password
  },
];

module.exports = users;
