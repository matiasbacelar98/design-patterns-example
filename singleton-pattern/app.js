//----- Logger Class -----//
let instanceWasCreated = false;

class Logger {
  constructor() {
    // ! Only allow one instance
    if (instanceWasCreated) throw new Error('An instance was already created');

    this.logs = [];
    instanceWasCreated = true;
  }

  log(message) {
    this.logs.push(message);
    console.log(`FANCY: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const logger = new Logger();
Object.freeze(logger);

//----- First File -----//
function firstFile() {
  logger.printLogCount();
  logger.log('First file');
  logger.printLogCount();
}

//----- Second File -----//
function secondFile() {
  logger.printLogCount();
  logger.log('Second file');
  logger.printLogCount();
}

//----- Initialize -----//
firstFile();
secondFile();
