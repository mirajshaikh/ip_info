
<?php
//post
$url="https://www.sms4india.com/api/v1/sendCampaign";
$message = urlencode("hi%20iam%0Amiraj%20and%20testing%20this%20message%0A%0ARedards%2C%0Amiraj");// urlencode your message
$curl = curl_init();
curl_setopt($curl, CURLOPT_POST, 1);// set post data to true
curl_setopt($curl, CURLOPT_POSTFIELDS, "apikey=4FL635XFFSUN9VTUQDF68TO5LWR04P67&secret=9LK0UVQ9ZLX5BKV6&usetype=stage&phone=9769643826&senderid=SMSIND&message=[$message]");// post data
// query parameter values must be given without squarebrackets.
 // Optional Authentication:
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);
echo $result;
?>