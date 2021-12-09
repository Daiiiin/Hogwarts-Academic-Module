-- user@mail.com : user123
-- prof@mail.com : prof123
-- admin@mail.com : admin123

DROP DATABASE IF EXISTS hogwarts_academic_module;
CREATE DATABASE hogwarts_academic_module;

CREATE TABLE `users`(
    `userID` INT NOT NULL AUTO_INCREMENT,
    `fname` VARCHAR(50) NOT NULL,
    `mname` VARCHAR(50) NOT NULL,
    `lname` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
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

INSERT INTO users(fname, mname, lname, email, password, user_type) 
VALUES
('User', 'U', 'Doe', 'user@mail.com', '$2y$10$VB2bnembPmg6j2cdXfKXAu0dLs8.KT/cNZ7/Naw1KvPkH5v5L69Gi', 1),
('Professor', 'P', 'Doe', 'prof@mail.com', '$2y$10$RCSd5LKLdk/BmH8ked7BfeDit9gCEHsLEp70BERbYwLxX.grP89QG', 2),
('Admin', 'A', 'Doe', 'admin@mail.com', '$2y$10$XfpWmegItPpimo/QVyjrnezJxW9iq/GLH7rl2KG7g1ohmZrrnf2Gi', 3);

-- user@mail.com : user123
-- prof@mail.com : prof123
-- admin@mail.com : admin123