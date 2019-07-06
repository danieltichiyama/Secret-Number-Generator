'use strict';
module.exports = function() {

let num = Math.floor(Math.random()*1000001);
    
return function (){
    return num;
};

};