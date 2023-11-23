// const fs = require('fs');
const path = require('path');

const notes = './test.txt';

/*fs.stat('./test.txt', (err, stats) => {
  if (err) {
    cosole.error(err)
  } else {
    console.log(stats.isFile());
  }
})*/

// console.log(path.dirname(notes));
// console.log(path.resolve(notes));
// console.log(path.join(notes));

/*fs.open(notes, 'r', (err, fd) => {
  console.log(err);
  console.log(fd);
})*/


/*const fss = require('fs/promises');
async function example() {
  let filehandle;
  try {
    filehandle = await fss.open(notes, 'r');
    // console.log(filehandle.fd);
    console.log(await filehandle.readFile({ encoding: 'utf8' }));
  } finally {
    if (filehandle) await filehandle.close();
  }
}
example();*/

/*const fs = require('fs');
const util = require('util');

async function example() {
  const open = util.promisify(fs.open);
  const fd = await open(notes, 'r');
  console.log(fd);
}
example();*/

/*
const fs = require('fs');

const content = 'Some content!';

fs.writeFile(notes, content, err => {
  if (err) {
    console.error(err);
  }
  // example()
  // file written successfully
});
*/

/*const fs = require('fs/promises');

async function example() {
  try {
    const content = 'Some content!';
    await fs.appendFile(notes, content);
  } catch (err) {
    console.log(err);
  }
}
example();*/

/*const fs = require('fs');

const folderName = './test';

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}*/

const fs = require('fs');

const folderPath = './test';

let file = fs.readdirSync(folderPath);
console.log(file);


