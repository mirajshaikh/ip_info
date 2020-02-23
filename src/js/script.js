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
        $("#omit").hide();

        $(document).on({
            ajaxStart: function(){
                $("#info").hide();
                $('#wait').show();

            },
             ajaxStop: function(){
                $("#info").show();
                $('#wait').hide();
                $("#omit").hide();
                $('#buttonDiv').hide()

            }    
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
        $('#ipadd').text("Your Ip Address Is : " + results.ip)
        $('#country').text('Your Country Is ' + results.country)
        $('#state').text('Your State Is ' + results.subdivision)
        $('#city').text('Your City Is ' + results.city)
        $('#isp').text('Your ISP Is '+ results.org)
        $('#countryImg').attr('src', "https://www.countryflags.io/"+results.country_code+"/flat/64.png")

            }
        });
             $('#buttonDiv').hide()
             $('#home').show();
             $("#info").hide();


        });
        // $("#getip").click(
//             function myFunction(){
//            var ipaddre = ($("#ipaddress").val())
//             $.ajax({
//                 url: "https://www.iplocate.io/api/lookup/" +ipaddre ,
//                 dataType: 'json',
//                 success: function(results){
//                 $('#ipadd').text("The Ip Address Is : " + results.ip)
//                 $('#country').text('The Country Is ' + results.country)
//                 $('#state').text('The State Is ' + results.subdivision)
//                 $('#city').text('The City Is ' + results.city)
//                 $('#isp').text('The ISP Is '+ results.org)
//                 $('#countryImg').attr('src', "https://www.countryflags.io/"+results.country_code+"/flat/64.png")

// }
//                     });
//             $("#info").hide();
//             $('#secound-countainer').hide()
//             $('#home').show();
            
//                 };
        $("#home").click(function(){
            $("#info").hide();
            $("#buttonDiv").show();
            $("#home").hide();
            $("#omit").show();
        });
      }); 

      