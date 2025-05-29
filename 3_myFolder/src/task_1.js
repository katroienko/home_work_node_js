
const fsCallback = require('fs');
const folderName = 'myFolder';

// Create directory
fsCallback.mkdir(folderName, (err) => {
  if (err) {
    console.error('Error creating folder:', err);
  } else {
    console.log(`Folder "${folderName}" created successfully.`);

    // Remove directory (after successful creation)
    fsCallback.rmdir(folderName, (err) => {
      if (err) {
        console.error('Error removing folder:', err);
      } else {
        console.log(`Folder "${folderName}" removed successfully.`);
      }
    });
  }
});
