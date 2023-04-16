var data = function(){
  var graphHeight;

  var data = [1, 4, 3, 2, 5, 7, 2, 3];
  var listOfColors = ['blueviolet', 'green', 'blue', 'pink', 'palevioletred', 'crimson', 'orange']

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
    $("#data-items").append($('<div></div>')
    .attr({
      id: "data-point-" + i
    })
    .addClass("graph-item")
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

  //Updating graph depending on cusomization selections
  //Change graph orientation
  $('#orientation-select').on('change', function(event) {
    $("#data-items").css("flex-direction", event.target.value)
    console.log(event.target.value)
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

};

data()




