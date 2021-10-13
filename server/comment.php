<?php 
    header("Access-Control-Allow-Origin: *");
// File name
$filename = $_FILES['file']['name'];

// Valid file extensions
$valid_extensions = array("jpg","jpeg","png","pdf");

// File extension
$extension = pathinfo($filename, PATHINFO_EXTENSION);

// Check extension
if(in_array(strtolower($extension),$valid_extensions) ) {
    $newFileName = uniqid().$filename;
   // Upload file
   if(move_uploaded_file($_FILES['file']['tmp_name'], "post_images/".$newFileName)){
    $image_url = "http://localhost/post_images/".$newFileName;
    $connect = mysqli_connect("localhost", "root","","db_posts");
    $sql = "INSERT INTO `tbl_postcontents`
    (`username`,
    `caption`,
    `imageUrl`) 
    VALUES ('awit','No_Username','$image_url')";

    

    if (mysqli_query($connect, $sql)){
        echo "Data inserted Successfully";
    }
    else{
        echo "Error!";
    }
   }else{
      echo 0;
   }
}else{
   echo 0;
}


?>