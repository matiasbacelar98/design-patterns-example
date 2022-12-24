//----- Basic example -----//
function createUser(name, age) {
  return {
    name: name,
    age: age,
    printName() {
      console.log(this.name);
    },
  };
}

const jackUser = createUser('Jack', 20);
const roseUser = createUser('Rose', 20);

// jackUser.printName();
// roseUser.printName();

//------- Factory example -------//
const factory = {
  createLocations(defaultLoc, currentLoc) {
    return {
      defaultLocation: defaultLoc,
      currentLocation: currentLoc,
    };
  },
  createFamilyGroup(wife, sons) {
    return {
      wife: wife,
      kids: sons,
    };
  },
};

const infoCard = {
  locations: factory.createLocations('New York', 'California'),
  family: factory.createFamilyGroup(true, false),
};

console.log(infoCard);
