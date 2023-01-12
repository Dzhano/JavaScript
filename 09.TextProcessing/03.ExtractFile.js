function extractFile(path){
    let file = path.split('\\').pop();
    let fileData = file.split('.');
    let extension = fileData.pop();
    console.log(`File name: ${fileData.join('.')}`);
    console.log(`File extension: ${extension}`);
}

// extractFile('C:\\Projects\\Data-Structures\\LinkedList.egf.cs');