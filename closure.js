/*
We intialize myobject by calling a function that return an object literal.
function define value variable.
The variable is always avilable to the increment and get value method.
But the function scope keep it hidden from rest of program.
*/

var myobject = (function(){

var value = 0;
return {
increment: function(inc){
value += typeof inc === 'number' ? inc : 1;
},
getValue : function(){
return value;
}
};
}());

/*
How to use:
> myobject.increment(4);
> console.log(myobject.getValue());
4
*/
