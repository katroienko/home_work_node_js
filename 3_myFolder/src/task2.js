import * as fs from 'node:fs/promises';

const fileName = 'info.txt';
const firstLine = 'First line!';
const secondLine = '\n second line.';



async function handleFile() {
  try {
    await fs.writeFile(fileName, firstLine);
    // console.log(`First line written to "${fileName}".`);

    await fs.appendFile(fileName, secondLine);
    // console.log('Second line appended.');

    const data = await fs.readFile(fileName, 'utf8');
    // console.log(`Content of "${fileName}":\n${data}`);
    return true;
  } catch (err) {
    // console.error('File operation error:', err);
    err.message = 'File operation error:', err;
    return false;
  }
}

const result= await handleFile();
const createdMessage = result ? 'operation is saxesfull': 'File operation error';

console.log(createdMessage);
