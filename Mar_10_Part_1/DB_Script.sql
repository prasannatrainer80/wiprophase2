create database hospital
go

use hospital
go

if exists(select * from sysobjects where name='Patient') 
Drop Table Patient

if exists(select * from sysobjects where name='Doctor') 
Drop Table Doctor

create table Doctor
(
   DoctorId INT IDENTITY(1,1) Primary Key,
   DoctorName varchar(30),
   Speciality varchar(30), -- specify as 'CARDIO/KIDNEY/LIVER/GENERAL/ENT',
   Qualification varchar(30),
   DoctorUserName varchar(30) UNIQUE,
   DoctorPassword varchar(30),
   Email varchar(30),
   Mobile varchar(20) UNIQUE
)
GO

Create Table Patient 
(
   PatientId INT IDENTITY(1,1) Primary Key,
   PatientName varchar(30),
   HealthProblem varchar(100),
   DoctorId INT REFERENCES Doctor(DoctorId),
   Email varchar(30),
   MobileNo varchar(30),
   Age INT
)
GO
