using System.ComponentModel.DataAnnotations;

namespace BankProject.Models
{
    public class Account
    {
        [Key]
        public int AccountNo { get;set; }
        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? City { get; set; } 

        public string? State { get; set; } 
        public decimal Amount { get; set; } 

        public string? AccountType { get; set; } 

        public string? CheqFacil { get; set; }

    }
}
