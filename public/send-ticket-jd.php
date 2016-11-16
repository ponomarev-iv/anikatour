<?php

$frm_name  = "Бронирование ЖД билетов";
$recepient = "anika-tour@mail.ru";
$sitename  = "АникаТур";
$subject   = "Заявка на бронирование \"$sitename\"";

$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$fio = trim($_POST["fio"]);
$rest = trim($_POST["rest"]);

$message = "
Бронирование ЖД билетов <br>
Имя: $fio <br>
E-mail: $email <br>
Телефон: $phone 
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
