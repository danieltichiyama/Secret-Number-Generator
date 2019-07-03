'use strict';
module.exports = function() {

let num;

// = Math.floor(Math.random()*1000001);

(function randomizer (){
    num = Math.floor(Math.random()*1000001);
})();
    
return function (){
    // let num = Math.floor(Math.random()*1000001);
    console.log(num);
    return num;
};

};