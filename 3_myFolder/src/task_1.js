import fs from 'node:fs';
const folderName = 'myFolder';

setInterval(() => {
  fs.mkdir(folderName, (err) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.log(`Folder "${folderName}" already exists, skipping creation.`);
      } else {
        console.error('Error creating folder:', err);
      }
    } else {
      console.log(`Folder "${folderName}" created successfully.`);

      fs.rmdir(folderName, (err) => {
        if (err) {
          console.error('Error removing folder:', err);
        } else {
          console.log(`Folder "${folderName}" removed successfully.`);
        }
      });
    }
  });
}, 3000); 
