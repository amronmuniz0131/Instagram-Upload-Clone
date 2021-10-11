<?php 
header("Access-Control-Allow-Origin: *");
    $connect = mysqli_connect("localhost", "root","","db_posts");
    $sql = "SELECT 
    Group_concat(CONCAT(comment_content) separator ', ') as comment_content,
    Group_concat(comment_user separator ', ') as comment_user,
    username,
    caption,
    imageUrl
     FROM tbl_postcontents LEFT JOIN tbl_comments ON tbl_postcontents.id = tbl_comments.post_id";
    $result = mysqli_query($connect, $sql);
    $json_array = array();
    while($row = mysqli_fetch_assoc($result)){
        $json_array[]=$row;
    }

    echo json_encode($json_array);
    
?>