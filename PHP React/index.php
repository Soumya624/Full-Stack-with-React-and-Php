<?php
    $servername="localhost";
    $username="root";
    $password="";
    $database="react_test";

    $conn= mysqli_connect($servername,$username,$password,$database);
    if(!$conn)
    {
        echo("Database Connection Failed!");
    }
    
    $msg=$_POST['text'];
    $sql="INSERT INTO `demo`(`Message`) VALUES ('$msg')";
    $query= mysqli_query($conn,$sql);
    if(!$query)
    {
        echo("Message Couldn't Inserted!");
    }
    if($query)
    {
        echo("Message Inserted Successfully!");
    }
   
?>