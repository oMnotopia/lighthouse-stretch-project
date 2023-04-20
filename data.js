var data = function(){
  //Get data values entered by user
  $("#data-values-submit").on("click", function() {
    var data = $("#data-values").val();
    printData(data);
  })

  //Reset values entered by user
  $("#data-values-reset").on("click", function() {
    resetData()
  })
};

var printData = function(data){
  var graphHeight;

  //Determining the highest value, used in setting the height style.
  for (var item of data){
    if(!graphHeight) graphHeight = item;
    if(graphHeight && graphHeight < item){
      graphHeight = item
    }
  }

  //Assigning values to each bar graph item.
  for (var i = 1; i <= data.length; i++){

    //Adding bars in graph depending on number of values
    $("#data-items").append($('<li></li>')
    .attr({
      id: "data-point-" + i
    })
    .addClass("graph-item")
    )
    //Adding titles to each bar
    $("#bar-titles").append($('<div></div>')
    .attr({
      id: "bar-label-" + i
    })
    .text('bar ' + i)
    .css({
      width: "40px"
    })
    )

    //Assinging values inside bars
    $("#data-point-" + i).text(data[i-1]);

    //Assinging styles to bar graphs
    $("#data-point-" + i).css({
      "height": (data[i - 1] / graphHeight ) * 100 + "%",
      "background-color":  "black",
      "justify-content": "center",
      "font-weight": "bold"
    });
  }
}

var resetData = function() {
  $("#data-items").empty();
  $("#bar-titles").empty();
}

data()




