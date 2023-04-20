//Updating graph depending on cusomization selections
  //Change graph orientation
  $('#orientation-select').on('change', function(event) {
    $("#data-items").css("flex-direction", event.target.value);
    if(event.target.value === 'row'){
      for (var i = 1; i <= data.length; i++){
        $("#data-point-" + i).css("height", ((data[i - 1] / graphHeight ) * 100) + "%");
        $("#data-point-" + i).css("width", "");
      }
      $(".graph-item").css("align-self", "flex-end");
    } else {
      for (var j = 1; j <= data.length; j++){
        $("#data-point-" + j).css("width", ((data[j - 1] / graphHeight ) * 100) + "%");
        $("#data-point-" + j).css("height", "");
      }
      $(".graph-item").css("align-self", "flex-start");
    }
  });
  //Change value placement on the bar
  $('#value-select').on('change', function(event) {
    var dataLength = $("#data-items").children().length;
    for (var i = 1; i <= dataLength; i++){
      $("#data-point-" + i).css("align-items", event.target.value);
    }
  });
