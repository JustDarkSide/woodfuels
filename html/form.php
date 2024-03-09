<?php
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
            $name = $_POST['name'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $subject = $_POST['subject'];
            $textarea = $_POST['message'];
            $zipcode = $_POST['postcode'];

            $message = "Imie i Nazwisko:".$name."\n"."E-mail:".$email."\n"."Numer telefonu:".$phone."\n"."Kod pocztowy".$zipcode."\n".$textarea;

            if(mail('domkacmijzajpost@domkacmijzaj.fun', 'Nowa wiadomość dla NORDWIT !', "$message")){
                echo"<!DOCTYPE html>
                <html lang='en'>
                
                <head>
                    <meta charset='UTF-8'>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                    <title>Document</title>
                    <link rel='stylesheet' href='../css/main.css'>
                </head>
                
                <body>
                    <div class='form__afterpage'>
                        <div>
                            <h1>Thank you for your message! We will answer soon.</h1>
                            <a href='../html/index.html'>
                                <p>Back to main page</p>
                            </a>
                        </div>
                    </div>
                </body>
                
                </html>";
            }
                else{
                    echo"<!DOCTYPE html>
                    <html lang='en'>
                    
                    <head>
                        <meta charset='UTF-8'>
                        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                        <title>Document</title>
                        <link rel='stylesheet' href='../css/main.css'>
                    </head>
                    
                    <body>
                        <div class='form__afterpage'>
                            <div>
                                <h1>Something went wrong. Please try again later...</h1>
                                <a href='../html/index.html'>
                                    <p>Back to main page</p>
                                </a>
                            </div>
                        </div>
                    </body>
                    
                    </html>";
                }
        }
?>

