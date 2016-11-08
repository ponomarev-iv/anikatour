<?php

$frm_name  = "Заявка с сайта anika-tour.ru";
$recepient = "anika-tour@mail.ru";
$sitename  = "АникаТур";
$subject   = "Новая заявка с сайта \"$sitename\"";

$rest = trim($_POST["rest"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$fio = trim($_POST["fio"]);

$message = "
Имя: $fio <br>
E-mail: $email <br>
Телефон: $phone <br>
Вид отдыха: $rest
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
