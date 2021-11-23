CREATE DATABASE hogwarts_academic_module;

CREATE TABLE `users`(
    `userID` INT NOT NULL AUTO_INCREMENT,
    `fname` VARCHAR(50) NOT NULL,
    `mname` VARCHAR(50) NOT NULL,
    `lname` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `user_type` ENUM('student', 'professor', 'admin') NOT NULL DEFAULT 'student',
    `date_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`userID`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `student`(
    `studentID` INT NOT NULL AUTO_INCREMENT,
    `userID` INT NOT NULL,
    `year_level` ENUM('1','2','3','4','5') NOT NULL DEFAULT '1',
    `house` ENUM('Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin') NOT NULL,
    `deleted` ENUM('0','1') NOT NULL DEFAULT '0',
    PRIMARY KEY(`studentID`),
    FOREIGN KEY(`userID`) REFERENCES `users` (`userID`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `subject`(
    `subjectID` INT NOT NULL AUTO_INCREMENT,
    `subject_name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(150) NOT NULL,
    `deleted` ENUM('0','1') NOT NULL DEFAULT '0',
    `date_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(`subjectID`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `professor`(
    `professorID` INT NOT NULL AUTO_INCREMENT,
    `userID` INT NOT NULL,
    `subjectID` INT NOT NULL,
    PRIMARY KEY(`professorID`),
    FOREIGN KEY(`userID`) REFERENCES `users` (`userID`),
    FOREIGN KEY(`subjectID`) REFERENCES `subject` (`subjectID`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `enrolled`(
    `enrolledID` INT NOT NULL AUTO_INCREMENT,
    `studentID` INT NOT NULL,
    `subjectID` INT NOT NULL,
    `professorID` INT NOT NULL,
    `dropped` ENUM('0','1') NOT NULL DEFAULT '0',
    `date_enrolled` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(`enrolledID`),
    FOREIGN KEY(`studentID`) REFERENCES `student` (`studentID`),
    FOREIGN KEY(`professorID`) REFERENCES `professor` (`professorID`),
    FOREIGN KEY(`subjectID`) REFERENCES `subject` (`subjectID`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `grades`(
    `gradeID` INT NOT NULL AUTO_INCREMENT,
    `enrolledID` INT NOT NULL,
    `midtermGrade` INT NOT NULL,
    `finalGrade` INT NOT NULL,
    `date_modified` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(`gradeID`),
    FOREIGN KEY(`enrolledID`) REFERENCES `enrolled` (`enrolledID`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;