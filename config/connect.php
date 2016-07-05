<?php
	
	class DBConnection
	{

		public $servername;
		public $username;
		public $password;
		public $dbName;
		
		public function __construct($servername, $username, $password, $dbName)
		{
			$this->servername = $servername;
			$this->username = $username;
			$this->password = $password;
			$this->dbName = $dbName;
		}
		
		public function connect()
		{
			return mysqli_connect($this->servername, $this->username, 
				$this->password, $this->dbName);
		}
		
		
	
	}
	
?>
	