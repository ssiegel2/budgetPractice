<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbName = "budget";
	
	$data = json_decode(file_get_contents("php://input"), true);
	
	$expense = $data['expense'];
	$date = $data['date'];
	$amount = $data['amount'];
	
	$con = mysqli_connect($servername, $username, $password, $dbName);
	if(!$con)
	{
		die("Failed: " . mysqli_connect_error());
	}
	
	$sql = "INSERT INTO expenses (expense, date, amount) VALUES ('".$expense."', '".$date."', '".$amount."')";
	
	if(!mysqli_query($con, $sql))
	{
		echo "Error";
	}
	
	mysqli_close($con);
?>