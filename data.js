var data = function(){

  //Get data values entered by user
  $("#data-values-submit").on("click", function() {
    var data = $("#data-values").val();
    console.log(data);
    printData(data);
  })

  //Reset values entered by user
  $("#data-values-reset").on("click", function() {
    resetData()
  })



  //Updating graph depending on cusomization selections
  //Change graph orientation
  $('#orientation-select').on('change', function(event) {
    $("#data-items").css("flex-direction", event.target.value)
    if(event.target.value === 'row'){
      for (var i = 1; i <= data.length; i++){
        $("#data-point-" + i).css("height", ((data[i - 1] / graphHeight ) * 100) + "%");
        $("#data-point-" + i).css("width", "");
      }
    $(".graph-item").css("align-self", "flex-end");
    } else {
      for (var i = 1; i <= data.length; i++){
        $("#data-point-" + i).css("width", ((data[i - 1] / graphHeight ) * 100) + "%");
        $("#data-point-" + i).css("height", "");
      }
    $(".graph-item").css("align-self", "flex-start");
    }
  });
  //Change value placement on the bar
  $('#value-select').on('change', function(event) {
    for (var i = 1; i <= data.length; i++){
      $("#data-point-" + i).css("align-items", event.target.value);
    }
  });

  //Allow users to update bar labels

};

var printData = function(data){
  var graphHeight;
  var listOfColors = ['blueviolet', 'green', 'blue', 'pink', 'palevioletred', 'crimson', 'orange']

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
      "background-color":  listOfColors[Math.floor(Math.random() * listOfColors.length)],
      "justify-content": "center",
      "font-weight": "bold"
    });
  }
}

var resetData = function() {
  $("#data-items").empty()
}

data()




