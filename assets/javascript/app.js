 
 
 
 //   var baseGifs = ["Star Wars","Lord of the Rings","Harry Potter","Back to the Future"];
 $(document).ready(function() {

    var baseGifs = ["Star Wars", "Lord of the Rings", "Harry Potter", "Back to the Future"];
    var butts = $("#butts");
    var search = $("#search");
  
    baseGifs.forEach(baseGifs => {
        butts.append("<a class='button' id='butts'>" + baseGifs + "</a>");
  
      //document.getElementById('butts').innerHTML = "hi";
      $("#butts").html("hi");
  
    });
    console.log("it's alive!");
  });












