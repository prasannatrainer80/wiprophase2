create database lms
go

use lms
go

create table Employee
(
   EmpId INT PRIMARY KEY, 
   EmployName varchar(30), 
   MgrId INT REFERENCES Employee(EmpId),
   LeaveAvail INT, 
   DateOfBirth DateTime,
   Email varchar(30),
   Mobile varchar(30)
)
GO

Insert into Employee values(1000,'Muskan',NULL,20,'12-12-2002','muskan@gmail.com','992445552'),
(2000,'Aadithian',1000,22,'05-12-2002','aadi@gmail.com','99293444'),
(3000,'Avinash',1000,28,'11-11-2001','Avin@gmail.com','9922445'),
(4000,'Prashanth',2000,18,'11-12-2002','prash@gmail.com','99234544'),
(5000,'Anjali',3000,18,'12-12-2002','anjali@gmail.com','9994222')

