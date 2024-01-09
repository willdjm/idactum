<?php

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as MailerException;

$mail = new PHPMailer(true);

try {

  $mail->SMTPDebug = false;
  $mail->isSMTP();
  $mail->Host = 'rv1.u1.com.br';
  $mail->SMTPAuth = true;
  $mail->Username = 'xxx@xxx.com.br';
  $mail->Password = 'xxx';
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;

  $mail->setFrom('xxx@xxx.com.br', 'Contato Site - iDactum');
  $mail->addAddress('xxx@xxx.com.br');

  // $mail->addBCC('seusite@outlook.com');

  $mail->isHTML(true);

  $fields = file_get_contents('php://input');
  $fields = json_decode($fields, true);

  $mail->CharSet = 'UTF-8';

  $mail->Subject = 'Contato Site - iDactum';

  $mail->Body = '<p></p>Nome: ' . $fields['nome'] . '<br>' .
    'E-mail: ' . $fields['email'] . '<br>' .
    'Telefone: ' . $fields['telefone'] . '<br>' .
    'Mensagem: ' . $fields['mensagem'] . '<br></p>' .
    '<small>Este e-mail foi enviado através do site da iDactum, por favor não responda.</small>';

  $mail->AltBody = 'Nome: ' . $fields['nome'] . '\n' .
    'E-mail: ' . $fields['email'] . '\n' .
    'Telefone: ' . $fields['telefone'] . '\n' .
    'Mensagem: ' . $fields['mensagem'] . '\n\n' .
    'Este e-mail foi enviado através do site da iDactum, por favor não responda.';

  header('Content-Type: application/json');

  if ($mail->send()) {
    header('HTTP/1.1 200 OK');
    echo json_encode(['status' => 'success']);
  } else {
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode(['status' => 'error', 'error' => $mail->ErrorInfo]);
  }
} catch (MailerException $e) {
  header('HTTP/1.1 500 Internal Server Error');
  echo json_encode(['status' => 'error', 'error' => $mail->errorMessage()]);
}
