function Fai(){
    getName = function (){console.log(1)};
    return this;
}
Fai.getName = function (){console.log(2)};
Fai.prototype.getName = function (){console.log(3)};
var getName = function (){console.log(4)};
function getName(){console.log(5)};
Fai.getName()
getName()
// Fai().getName()
getName()
new Fai.getName()
new Fai().getName()
new new Fai().getName()