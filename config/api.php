<?php
	require_once("connect.php");
	
	$conDB = new DBConnection("localhost", "root", "", "budget");
	$con = $conDB->connect();
	$request = $_GET['request'];
	
	if($request == 'getExpense')
	{
	
		$budgetID = $_GET['budgetID'];
		
		$sql = "SELECT * FROM expense WHERE budget_id = " . $budgetID . " ORDER BY expense_date DESC";
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
	}
	else if($request == 'postExpense')
	{
		$data = json_decode(file_get_contents("php://input"), true);
	
		$budgetID = $_GET['budgetID'];
		$categoryID = $data['categoryID'];
		$expense = $data['expense'];
		$date = $data['date'];
		$amount = $data['amount'];
		
		$sql = "INSERT INTO expense (budget_id, category_id, expense_name, expense_date, expense_amount) VALUES ('".$budgetID."', '".$categoryID."','".$expense."', '".$date."', '".$amount."')";
		
		if(!mysqli_query($con, $sql))
		{
			echo "Error";
		}
	}
	else if($request == 'getIncome')
	{
	
		$budgetID = $_GET['budgetID'];
		
		$sql = "SELECT * FROM income WHERE budget_id = " . $budgetID . " ORDER BY income_date DESC";
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
	}
	else if($request == 'postIncome')
	{
		$data = json_decode(file_get_contents("php://input"), true);
	
		$budgetID = $_GET['budgetID'];
		$categoryID = $data['categoryID'];
		$income = $data['income'];
		$date = $data['date'];
		$amount = $data['amount'];

		
		$sql = "INSERT INTO income (budget_id, category_id, income_name, income_date, income_amount) VALUES ('".$budgetID."', '".$categoryID."','".$income."', '".$date."', '".$amount."')";
		
		if(!mysqli_query($con, $sql))
		{
			echo "Error";
		}
	}
	else if($request == 'getCategories')
	{
		$sql = "SELECT * FROM category ORDER BY category_name ASC";
		
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
		
	}
	else if($request == 'postCategories')
	{
		$data = json_decode(file_get_contents("php://input"), true);
	
		$categoryID = $data['name'];
		
		$sql = "INSERT INTO category (category_name) VALUES ('".$categoryID."')";
		
		if(!mysqli_query($con, $sql))
		{
			echo "Error";
		}		
	}
	mysqli_close($con);
?>