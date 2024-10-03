function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input must be an array");
        } else {
            const result = mixedArray
                .filter(item => typeof item === 'string') 
                .map(item => item.toLowerCase());  //this line converts to lowercase

            resolve(result); 
        }
    });
}

const mixedArray = ['Pizza', 10, true, 2, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))  // this will result an output ['pizza', 'wings']
    .catch(error => console.error(error));