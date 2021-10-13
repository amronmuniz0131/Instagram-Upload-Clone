<?php 
    header("Access-Control-Allow-Origin: *");
    $connect = mysqli_connect("localhost", "root","","db_posts");
    $recText = $_POST['text'];
    $post_id = $_POST['post_id'];
    $sql = "INSERT INTO `tbl_comments`
    (`post_id`,
    `comment_user`,
    `comment_content`) 
    VALUES ('$post_id','No_Username','$recText')";

    

    if (mysqli_query($connect, $sql)){
        echo "Data inserted Successfully";
    }
    else{
        echo "Error!";
    }
?>