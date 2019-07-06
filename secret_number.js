'use strict';
module.exports = function() {

let num;

(function randomizer (){
    num = Math.floor(Math.random()*1000001);
})();
    
return function (){
    return num;
};

};