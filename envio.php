
<?php

// Aqui simplesmente estou pegando os input do formulário via post
$nome = $_POST["nome"];
$email = $_POST["email"];
$mensagem = $_POST["mensagem"];

$texto = "<h3> Formulário de Contato </h3><br>
			<b>Nome:</b> $nome<br>
			<b>E-mail:</b> $email<br>
			<b>Mensagem:</b> $mensagem<br>";

//AQUI ENVIO O PRIMEIRO EMAIL PARA O DESTINATARIO
$emailDestino = "contato@rafaelmodolo.com.br";
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= "From:" . $email . "\r\n";
mail($emailDestino, 'Contato - Site Rafael Modolo', $texto, $headers);

//AQUI ENVIO O PRIMEIRO EMAIL PARA O CLIENTE
$headers2 = "MIME-Version: 1.0\r\n";
$headers2 .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers2 .= "From:" . $emailDestino . " \r\n";
$texto .= "Seu e-mail foi recebido<br>
			Logo estarei entrando em contato!<br>
			<br>
			Rafael Modolo - Desenvolvedor Web<br>
			https://rafamodolo.com.br<br>
			contato@rafaelmodolo.com.br<br>
			Obrigado
			<br>
			<img src='./assinatura-rafael-modolo.jpg'>";
mail($email, 'Contato - Rafael Modolo', $texto, $headers2);

print '<script>location.href="#";</script>';

?>
