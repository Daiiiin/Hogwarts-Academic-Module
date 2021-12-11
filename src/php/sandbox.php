<?php

    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require_once('db_connect.php');

    // $sql = "SELECT * FROM schedule WHERE subjectID = 2";
    // $DoW = '';
    // $stmt = $con->prepare($sql);
    // $stmt->execute();
    // $result = $stmt->get_result();
    // $stmt->close();
    // $rows = array();
    // for($i = 0; $fetch = $result->fetch_assoc(); $i++) {
    //     $rows[] = $fetch;
    //     if($rows[$i]['start_time'] != '') { 
    //         switch($rows[$i]['DoW']) {
    //             case 1: $DoW .= 'M'; break;
    //             case 2: $DoW .= 'T'; break;
    //             case 3: $DoW .= 'W'; break;
    //             case 4: $DoW .= 'Th'; break;
    //             case 5: $DoW .= 'F'; break;
    //             case 6: $DoW .= 'S'; break;
    //         }
    //     }
    // } echo $DoW;

    // echo json_encode($rows);

    $sql = "SELECT s.*, sc.DoW,CONCAT(sc.start_time, ' - ', sc.end_time) sched, sc.start_time FROM subject s
            JOIN schedule sc ON s.subjectID = sc.subjectID";
    $stmt = $con->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();
    $rows = array();
    while($fetch = $result->fetch_assoc()) {
        $rows[] = $fetch;
    }

    echo json_encode($rows);

    $con->close();
    

?>