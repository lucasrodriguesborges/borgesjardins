<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['telefone'])  		||
   empty($_POST['celular']) 		||
   empty($_POST['assunto'])	||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$telefone = $_POST['telefone'];
$celular = $_POST['celular'];
$assunto = $_POST['assunto'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'lucasrodriguesborges@outlook.com.br'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Contato do site Borges Jardins:  $name";
$email_body = "Você recebeu uma nova mensagem do formulário de contato do seu site.\n\n"."Here are the details:\n\nNome: $name\n\nE-mail: $email_address\n\n\Telefone: $telefone\n\n\Celular: $celular\n\nAssunto: $assunto \n\nMessage:\n$message";
$headers = "From: informatica@borgesjardins.com.br\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>