// Home Work 1
// const fs = require('fs/promises');
// const path = require('path');
//
// const SortByGender = async (readFolder, gender, toFolder) => {
//     try {
//         const folder = path.join(__dirname, readFolder)
//         const files = await fs.readdir(path.join(folder));
//
//         for (file of files) {
//             const pathToFile = path.join(folder, file);
//
//             const data = await fs.readFile(pathToFile)
//
//             const user = JSON.parse(data.toString());
//
//             if (user.gender !== gender) {
//                 await fs.rename(pathToFile, path.join(__dirname, toFolder, file));
//             }
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }
// SortByGender('boys', 'male', 'girls');
// SortByGender('girls', 'female', 'boys');

// Home Work 2