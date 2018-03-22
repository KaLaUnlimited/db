CREATE DATABASE IF NOT EXISTS reunify_db;
USE reunify_db;
# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS students;
# Create the students table
CREATE TABLE students (
student_id int NOT NULL PRIMARY KEY,
student_name varchar(255) NOT NULL,
student_photo varchar(255) NOT NULL,
grade_level varchar(10) NOT NULL,
par1_name varchar(255) NOT NULL,
par1_addr varchar(255) NOT NULL,
par1_csz varchar(255) NOT NULL,
par_gvt_id int NOT NULL,
par2_name varchar(255) NOT NULL,
par2_addr varchar(255) NOT NULL,
par2_csz varchar(255) NOT NULL,
par2_gvt_id int NOT NULL,
reunify_pnt varchar(50) NOT NULL,
student_status varchar(100) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS release_stud;
# Create the release student table
CREATE TABLE release_stud (
student_id int NOT NULL PRIMARY KEY,
par_govt_id int NOT NULL,
time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS checkin_parent;
# Create the parent check-in table
CREATE TABLE checkin_parent (
par_govt_id int NOT NULL PRIMARY KEY,
par1_name varchar(255) NOT NULL,
time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
