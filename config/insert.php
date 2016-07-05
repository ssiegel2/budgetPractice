<?php
	
	require_once('connect.php');
	
	$data = json_decode(file_get_contents("php://input"), true);
	
	$expense = $data['expense'];
	$date = $data['date'];
	$amount = $data['amount'];
	
	$conDB = new DBConnection("localhost", "root", "", "budget");
	$con = $conDB->connect();
	
	$sql = "INSERT INTO expenses (expense, date, amount) VALUES ('".$expense."', '".$date."', '".$amount."')";
	
	if(!mysqli_query($con, $sql))
	{
		echo "Error";
	}
	
	mysqli_close($con);
?>