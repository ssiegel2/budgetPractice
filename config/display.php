<?php
	
	require_once('connect.php');
	
	$conDB = new DBConnection("localhost", "root", "", "budget");
	$con = $conDB->connect();
	
	$sql = "SELECT * FROM expenses";
	
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