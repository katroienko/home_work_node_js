import * as fs from 'node:fs/promises';

const folderName = 'myFolder';

async function createAndRemoveFolder() {
  try {
    await fs.mkdir(folderName);
    console.log(`Folder "${folderName}" created successfully.`);

    await fs.rmdir(folderName);
    console.log(`Folder "${folderName}" removed successfully.`);
    return true;
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.log(`Folder "${folderName}" already exists, skipping creation.`);
      return false;
        } else {
      console.error('Error during folder operation:', err);
      return false;
    }
  }
}


const data = await createAndRemoveFolder();

console.log(data);
