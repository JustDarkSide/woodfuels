<!DOCTYPE html>
<html lang="pl">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<form action="" method="post">
            <input type="text" name="name">
            <input type="text" name="e-mail">
            <input type="submit" value="Wyślij">
        </form>
        <?php

            if($_SERVER['REQUEST_METHOD'] === 'POST'){
                $name = $_POST['name'];
                $surname = $_POST['surname'];
                mail('domkacmijzajpost@domkacmijzaj.fun', 'test', "$surname");
            }
        ?>
	</body>
</html>
