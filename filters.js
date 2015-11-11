app.filter('kebab', function () {
  return function (input) {
    return typeof input === "string" ? input.replace(/_/g , "-"): input
  };
});

app.filter('camel', function () {
  return function (input) {
    var inputArray = input.split('');
    for(var i = 0; i < inputArray.length; i++){
      if(inputArray[i] == '_' || inputArray[i] == '-'){
        inputArray.splice(i, 1);
        var charToCapitalize = inputArray[i];
        inputArray.splice(i, 1);
        inputArray.splice(i, 0, charToCapitalize.toUpperCase());
      }
    }
    return inputArray.join('');
  };
});

app.filter('pigLatin', function () {
  return function (input) {
    var finalArray = [];
    var wordArray = input.split(' ');
    for(var i = 0; i < wordArray.length; i++){
      var inputArray = wordArray[i].split('');
      var firstLetter = inputArray.splice(0,1);
      inputArray.push(firstLetter.toString(), "a", "y");
      finalArray.push(inputArray.join(''));
    }
    return finalArray.join(' ')
  }
});