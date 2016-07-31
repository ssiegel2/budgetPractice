<?php
	require_once("connect.php");
	
	$conDB = new DBConnection("localhost", "root", "", "budget");
	$con = $conDB->connect();
	
	$method = $_SERVER['REQUEST_METHOD'];
	$request = explode('/', trim($_SERVER['PATH_INFO'], '/'));
	
	$table = array_shift($request);
	$id = array_shift($request);
	$data = json_decode(file_get_contents('php://input'),true);

	switch($method)
	{
		case 'GET':
			getRequest($con, $table, $id, $data); break;
		case 'POST':
			postRequest($con, $table, $id, $data); break;
	}
	
	function getRequest($con, $table, $id, $data)
	{
		$sql = "SELECT * FROM $table";
		if($id != null)
		{
			$sql += " WHERE budget_id=$id";
		}
		
		$data = mysqli_query($con, $sql);
		if(!$data)
		{
			echo "Error";
			return;
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
	}
	
	function postRequest($con, $table, $id, $data)
	{
		$sql = "INSERT INTO $table SET";
		if($table != 'category')
		{
			$sql .= " budget_id=$id,";
		}
		$i = 1;
		foreach($data as $key => $value)
		{
			$sql .= " $key=";
			if(gettype($value) == "integer" or gettype($value) == "double")
			{
				$sql .= "$value";
			}
			else
			{
				$sql .= "'$value'";
			}
			if($i != count($data))
			{
				$sql .= ",";
			}
			$i++;
		}

		if(!mysqli_query($con, $sql))
		{
			echo $sql;
			echo "ERROR";
		};
		
	}
	
?>