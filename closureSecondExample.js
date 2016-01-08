/*
The quo function is desiged to use without new prefix.
When we call quo. It returns new object containing a get_status method.
The get_status  method still has privilaged access to quo status property.
*/

var quo= function (status){

return {

get_status: function (){
return status;
}

};
};
/*
> var quo = quo("amazed");
> console.log(quo.get_status());
amazed
*/
