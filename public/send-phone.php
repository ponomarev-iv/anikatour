<?php

$frm_name  = "Просьба перезвонить anika-tour.ru";
$recepient = "anika-tour@mail.ru";
$sitename  = "АникаТур";
$subject   = "Заявка на звонок сайта \"$sitename\"";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);

$message = "
Просьба перезвонить <br>
Имя: $name <br>
Телефон: $tel
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
