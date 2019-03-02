$(document).ready(function() {
  var yy;
  var x = document.getElementById('two');
  $("#button_0").click(function(e) {
    var y = $('#damned :selected').val();
    $.ajax({
      url: 'http://data.fixer.io/api/latest?access_key=c1632b5b6b1d36a847b1921063734c2f&symbols='+ y +'&format=1',
      dataType: 'jsonp',
      success: function(json) {
          head1.innerText = $('#damned :selected').text();
          x.style.display = "block";
          // exchange rata data is stored in json.rates
          for (var key in json.rates) {
            $('#text_2').val(json.rates[key]);
            yy = json.rates[key];
          }
      }
  });
  });

  $("#text_11").change(function (event) {
  var x = $(this).val();
  $('#text_2').val(x*yy);
  });

});
