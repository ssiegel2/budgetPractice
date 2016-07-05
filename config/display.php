<?php
	
	require_once('connect.php');
	
	$conDB = new DBConnection("localhost", "root", "", "budget");
	$con = $conDB->connect();
	$budgetID = $_GET['budgetID'];

	
	$sql = "SELECT * FROM expense WHERE budget_id = " . $budgetID;
	//echo $sql;
	$data = mysqli_query($con, $sql);
	
	if(!$data)
	{
		echo "Error";
	}
	else
	{
		$jsonArray = array();
		while($row = mysqli_fetch_assoc($data))
		{
			$jsonArray[] = $row;
		}
		echo json_encode($jsonArray);
	}
	
	mysqli_close($con);
	
?>