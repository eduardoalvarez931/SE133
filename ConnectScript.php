<?php
mysql_connect("localhost","root","My@pt102") or die("could not connect");
mysql_select_db("world") or die("could not find db");

if(isset($_POST['search'])){
    $searchquery = $_POST['search'];
    $searchquery = preg_replace("#[^0-9a-z]#i","",$searchquery);

    $query = mysql_query("SELECT * FROM city WHERE name LIKE '%searchquery%'") or die("could not search!");
    $count = mysql_num_rows($query);
    if($count == 0){
        $output = 'There was no search results!';
    }
    else{
        while($row = mysql_fetch_array($query)){
            $cityName = $row['name'];
            $id = $row['id'];

            $output = '<div> '.$cityName.'</div>';
        }
    }
}

?>