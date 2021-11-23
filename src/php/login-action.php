<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include_once("db_connect.php");
    require_once('./db_connect.php');

    $retval = "";
    $status = 400;
    $type = "";
    $email = trim($_REQUEST['email']);
    $password = trim($_REQUEST['password']);
                                
    $stmt = $con->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $obj = mysqli_fetch_object($result);
    $stmt->close();

    if($result->num_rows > 0) {
        //$isPassword = password_verify($password, $obj->password);;
        // if($isPassword == true) {
        if($password == $obj->password) { //TEMPORARY
            $status = 200;
            $retval = "Successfully logged in";
            $data = $obj;
            $type = $obj->user_type;
            $_SESSION['user_id'] = $obj->userID;
            $_SESSION['fname'] = $obj->fname;
            $_SESSION['mname'] = $obj->mname;
            $_SESSION['lname'] = $obj->lname;
            $_SESSION['email'] = $obj->email;
            $_SESSION['password'] = $obj->password;
            $_SESSION['user_type'] = $obj->user_type;
            $_SESSION['user_name'] = "$obj->fname $obj->mname $obj->lname";
            $myObj = array(
                'status' => $status,
                'type' => $type,
                'message' => $retval
            );
        } else {
            $retval = "Wrong email or password";
        }
    }

    $myObj = array(
        'status' => $status,
        'type' => $type,
        'message' => $retval
    );
    $myJSON = json_encode($myObj, JSON_FORCE_OBJECT);
    echo $myJSON;
?>