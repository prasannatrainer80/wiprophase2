create database bank
go

use bank
go

create table Account
(
   AccountNo INT Primary Key,
   FirstName varchar(30),
   LastName varchar(30),
   City varchar(30),
   State varchar(30),
   Amount numeric(9,2),
   AccountType varchar(10),
   CheqFacil varchar(10)
)
GO