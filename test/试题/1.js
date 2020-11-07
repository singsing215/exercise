// var Test = {
//     foo:'test',
//     func: function(){
//         var self = this;
//         console.log(this.foo);
//         console.log(self.foo);
//         (function(){
//             console.log(this.foo);
//             console.log(self.foo);
//         }())
//     }
// }
// Test.func()

// function count(str) {
//     var obj = {};
//     str.replace(/[a-z]/g,function(i){
//         obj[i]===undefined?obj[i]=1:obj[i]++;
//     })
//     return obj;
// }
// console.log(count('Hello World'))


// function find(a) {
//   var charList = a.split(" ");
//   var index = -1;
//   var maxWordLength = 0;
//   for (var i = 0; i < charList.length; i++) {
//     if (charList[i].length > maxWordLength) {
//       maxWordLength = charList[i].length;
//       index = i;
//     }
//   }
//   return charList[index];
// }
// console.log(find('str fsafd  asdadsds'))
var a = [1, 1, 1]
console.log(a instanceof Array)