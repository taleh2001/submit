

<?php

//получаем данные с формы

$login = $_POST['login'];
$pass = $_POST['pass'];
$email = $_POST['email'];
$tel = $_POST['tel'];

// обработаем полученные данные

$login = htmlspecialchars($login);
$pass = htmlspecialchars($pass);
$email = htmlspecialchars($email);
$tel = htmlspecialchars($tel);

$login = urldecode($login);
$pass = urldecode($pass);
$email = urldecode($email);
$tel = urldecode($tel);

$login = trim($login);
$pass = trim($pass);
$email = trim($email);
$tel = trim($tel);

// отправляем данные в почту


if (mail("talex2001@list.ru",
    "Новое письмо с сайта",
    "Логин: " .$login."\n".
    "Пароль: ".$pass."\n".
    "Email: ".$email."\n".
    "Телефон: ".$tel,
    "From: no-reply@mydomain.ru \r\n")
    ){
        echo('Писмо успешно отправлено!')
    }

    else{
        echo('Есть ошибки! Проверьте данные...')
    }

?>