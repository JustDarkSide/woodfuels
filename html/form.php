<?php
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
            $name = $_POST['name'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $subject = $_POST['subject'];
            $textarea = $_POST['message'];

            $message = "Imie i Nazwisko:".$name."\n"."Numer telefonu:".$phone."\n".$textarea;

            mail('domkacmijzajpost@domkacmijzaj.fun', 'Nowa wiadomość dla NORDWIT !', "$message");

            echo "sraka";
        }
?>

