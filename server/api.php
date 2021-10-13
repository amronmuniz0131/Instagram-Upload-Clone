<?php 
header("Access-Control-Allow-Origin: *");
    $connect = mysqli_connect("localhost", "root","","db_posts");
    $sql = "SELECT 
    Group_concat(CONCAT(comment_content) separator ', ') as comment_content,
    Group_concat(comment_user separator ', ') as comment_user,
    post_id,
    id,
    username,
    caption,
    imageUrl  
    FROM tbl_comments RIGHT JOIN tbl_postcontents ON tbl_comments.post_id = tbl_postcontents.id
    GROUP BY tbl_postcontents.id";
    
    $result = mysqli_query($connect, $sql);
    $json_array = array();
    while($row = mysqli_fetch_assoc($result)){
        $json_array[]=$row;
    }

    echo json_encode($json_array);
    
?>