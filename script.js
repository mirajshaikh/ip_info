  //api key https://api.ipgeolocation.io/ipgeo?apiKey=9ca8963aff474f50aa21560017ea3a7e&ip=1.1.1.1
  //ip 2 https://api.ipgeolocation.io/ipgeo?apiKey=9ca8963aff474f50aa21560017ea3a7e&ip=
$(document).ready(function() {
    window.onload = function(){
        //hide the preloader
        document.querySelector("#pre").style.display = "none";
    }
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
    url: "https://www.iplocate.io/api/lookup/",
    dataType: 'json',
    success: function(results){
        $('#ip').text("Your Ip Address Is : " + results.ip)
        $('#country').text('Your Country Is ' + results.country)
        $('#state').text('Your State Is ' + results.subdivision)
        $('#city').text('Your City Is ' + results.city)
        $('#isp').text('Your ISP Is '+ results.org)
        $('#countryImg').attr('src', "https://www.countryflags.io/"+results.country_code+"/flat/64.png")

}
        });
             $('#buttonDiv').hide()
             $('#home').show();

        });
        /* $("#getip").click(function(){
            var ipaddress = $('#ipaddress').val();
            $.ajax({
                url: "https://api.ipgeolocation.io/ipgeo?apiKey=9ca8963aff474f50aa21560017ea3a7e&ip=" + ipaddress ,
                dataType: 'json',
                success: function(results){
                    $('#countryImg').attr('src', results.country_flag)
                    $('#ip').text("Your Ip Address Is : " + results.ip)
                    $('#country').text('Your Country Is ' + results.country)
                    $('#country').text('Your State Is ' + results.regionName)
                    $('#city').text('Your City Is ' + results.city)
                    $('#currency').text('Your Currency Name Is ' + results.currency)
            }
                    }); 
            $('#secound-countainer').hide()
            $('#home').show();

        });*/
      }); 