import fs from 'node:fs';
const fileName = 'info.txt';
const firstLine = 'First line!';
const secondLine = '\nanother line.';

// Write the first line (overwrite the file)
fs.writeFile(fileName, firstLine, (err) => {
  if (err) {
    console.error('Error writing first line:', err);
  } else {
    console.log(`First line written to "${fileName}".`);

    // Append the second line (add to the existing file content)
    fs.appendFile(fileName, secondLine, (err) => {
      if (err) {
        console.error('Error appending second line:', err);
      } else {
        console.log('Second line appended.');

        // Read and output the file content
        fs.readFile(fileName, 'utf8', (err, data) => {
          if (err) {
            console.error('Error reading file:', err);
          } else {
            console.log(`Content of "${fileName}":\n${data}`);
          }
        });
      }
    });
  }
});
