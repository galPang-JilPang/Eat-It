const fs = require('fs');
const path = require('path');

const { users } = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json')));

const findUser = (userid, password) => users.find(user => user.id === userid && user.password === password);

const addUser = userData => {
  fs.writeFileSync(path.join(__dirname, '../database/users.json'), userData);
};

module.exports = { findUser, addUser };
