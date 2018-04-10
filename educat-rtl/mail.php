<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent=" From: $name \n email: $email \n Message: $message";
$recipient = "info@email.com";
$subject = "Add Your Subject Here";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header("location: thank-you.html"); 
?>