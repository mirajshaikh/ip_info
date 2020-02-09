  //api key https://api.ipgeolocation.io/ipgeo?apiKey=9ca8963aff474f50aa21560017ea3a7e&ip=1.1.1.1
  //ip 2 https://api.ipgeolocation.io/ipgeo?apiKey=9ca8963aff474f50aa21560017ea3a7e&ip=
$(document).ready(function() {
    window.onload = function(){
        //hide the preloader
        document.querySelector("#pre").style.display = "none";
    }
        var run = function(){
          var req = new XMLHttpRequest();
          req.timeout = 1000;
          req.open('GET', 'https//:mirajshaikh.com', true);
          req.send();
        }
        setInterval(run, 3000);
        $("#secound-countainer").hide();
        $('#wait').hide();
        $('#home').hide();


        $(document).on({
            ajaxStart: function(){ 
                $('#wait').show();
            },
             ajaxStop: function(){ 
                $('#wait').hide(); }    
        });
       
        $("#getInfo2").click(function(){
        $("#secound-countainer").show();
        $("#buttonDiv").hide();
    });
        $('#back').click(function(){
            $('#buttonDiv').show();
            $('#secound-countainer').hide();
    });
        $("#getInfo").click(function(){
             $.ajax({
    url: "https://api.ipgeolocation.io/ipgeo?apiKey=9ca8963aff474f50aa21560017ea3a7e",
    dataType: 'json',
    success: function(results){
        $('#ip').text("Your Ip Address Is : " + results.ip)
        $('#country').text('Your Country Is ' + results.country_name)
        $('#city').text('Your City Is ' + results.city)
        $('#countryImg').attr('src', results.country_flag)
        $('#currency').text('Your Currency Name Is ' + results.currency.name )
        $('#currencyCode').text('Your currency Code Is '+ results.currency.code)
        $('#currencySym').text('Your Currency Symbol is '+ results.currency.symbol)
}
        });
             $('#buttonDiv').hide()
             $('#home').show();

        });
        $("#getip").click(function(){
            var ipaddress = $('#ipaddress').val();
            $.ajax({
                url: "https://api.ipgeolocation.io/ipgeo?apiKey=9ca8963aff474f50aa21560017ea3a7e&ip=" + ipaddress ,
                dataType: 'json',
                success: function(results){
                    $('#ip').text("Your Ip Address Is : " + results.ip)
                    $('#country').text('Your Country Is ' + results.country_name)
                    $('#city').text('Your City Is ' + results.city)
                    $('#countryImg').attr('src', results.country_flag)
                    $('#currency').text('Your Currency Name Is ' + results.currency.name )
                    $('#currencyCode').text('Your currency Code Is '+ results.currency.code)
                    $('#currencySym').text('Your Currency Symbol is '+ results.currency.symbol)
            }
                    });
            $('#secound-countainer').hide()
            $('#home').show();

        });
      }); 