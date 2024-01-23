const carName = "   B   M   W";
// trim()
// will remove the spaces
// you beautiful string

const trimmedCarName = carName.trim().replace(/[^a-zA-Z0-9]/g,"");
console.log(trimmedCarName);