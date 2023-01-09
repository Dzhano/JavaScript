function sortAnArray(array){
    function sumChars(s) {
      let acc = 0;
        for (let i = 0; i < s.length; i++) {
          acc += parseInt(s[i], 36) - 9;
        }
        return acc;
      }

      
    array = array.sort(x => x.length).sort(x => sumChars(x)); // Not sure how to make the two sort criterias to work simultaniously.
    console.log(array.join('\n'));
}

// sortAnArray(['alpha', 'gamma', 'beta']);