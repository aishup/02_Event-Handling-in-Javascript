.l
var navi = document.getElementById("navigation");

var navigation_children;


var bindEventsToLinks = function(navigation_children) {

   navigation_children.onclick = onclick_function;
   var x = navigation_children.querySelector("a");
   console.log(x);
  
};
 
var onclick_function = function() {
    console.log("clicked link");
  };

for(var i=0;i<navi.children.length;i++)
{
  navigation_children = navi.children[i];
  console.log(navigation_children);
  bindEventsToLinks(navigation_children);

 }
