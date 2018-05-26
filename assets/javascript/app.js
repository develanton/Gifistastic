$(document).ready(function () {


    var baseGifs = ["Star Wars", "Lord of the Rings", "Harry Potter", "Back to the Future"];
    var butts = $("#butts");
    var search = $("#search");
    var count = 0;

    var wordloop = baseGifs.forEach(baseGifs => {
        butts.append("<button class='button' id='butts'>" + baseGifs + "</a>");

    });

    $("#searchButt").on("click", function (event) {
        event.preventDefault();
        var userInput = $("#search").val().trim();

        butts.append("<button class='button' id='butts'>" + userInput + "</button>");

        console.log(userInput);

        $("#search").val("");

    })


    console.log("it's alive!");

    $(document.body).on("click", "#butts", function (event) {

        var term = event.target.innerText;
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=aOBNvDAUoSCFk4afN29oBolqLxw9lcaC&q=" + term + "&limit=10&offset=0&rating=R&lang=en"
      
        console.log("Term: " + term);




        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            var result = response.data;
            console.log(result);

            for (let i = 0; i < result.length; i++) {

               
                
                var divers = $("#gifDisplay").append("<div>");

                var ratings = ("Rating:"+ result[i].rating);
               
                
              
                var imgs = ("<img src='"+result[i].images.fixed_width.url+"'>");


                divers.append(imgs + ratings);
                

                
               
                
            }
            
           

               
        
               
        })

    })





});












