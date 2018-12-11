<?php 
   $hsContext  = $_POST['hsContext'];
   $firstName = $_POST['firstName'];
   $lastName = $_Post['lastName'];
   $email = $_Post['email'];
   $str_post = "firstname=" . urlencode($firstname) 
    . "&lastname=" . urlencode($lastname) 
    . "&email=" . urlencode($email) 
    . "&phone=" . urlencode($phonenumber) 
    . "&company=" . urlencode($company) 
    . "&hs_context=" . urlencode($hsContext);

$endpoint = 'https://forms.hubspot.com/uploads/form/v2/416460/90d3ce76-0563-4f6a-91f7-e2a0415ad9e9';

$ch = @curl_init();
@curl_setopt($ch, CURLOPT_POST, true);
@curl_setopt($ch, CURLOPT_POSTFIELDS, $str_post);
@curl_setopt($ch, CURLOPT_URL, $endpoint);
@curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/x-www-form-urlencoded'
));
@curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response    = @curl_exec($ch); //Log the response from HubSpot as needed.
$status_code = @curl_getinfo($ch, CURLINFO_HTTP_CODE); //Log the response status code
@curl_close($ch);
echo $status_code . " " . $response;

?>
?>