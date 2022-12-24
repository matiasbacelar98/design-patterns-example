function createUser(id, name) {
  return {
    name: name,
    id: id,
    hasAccess() {
      return this.name === 'Bob';
    },
  };
}

function createNullUser() {
  return {
    name: 'Guest',
    id: -1,
    hasAccess() {
      return false;
    },
  };
}

//--------- Implementation ---------//
const users = [createUser(1, 'Bob'), createUser(2, 'Jack')];

function getUser(id) {
  const user = users.find(user => user.id === id);

  // If user was found return
  if (user) return user;

  // If not user was found then create a 'NULL USER'
  return createNullUser();
}

function printUser(id) {
  const user = getUser(id);

  console.log('Hello ' + user.name);

  if (user.hasAccess()) {
    console.log('You have access');
  } else {
    console.log('You dont have access');
  }
}

printUser(3);
printUser(2);
printUser(1);
