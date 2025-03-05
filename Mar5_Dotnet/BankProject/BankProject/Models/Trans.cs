using System.ComponentModel.DataAnnotations;

namespace BankProject.Models
{
    public class Trans
    {
        [Key]
        public int TranId { get; set; }
        public int AccountNo { get; set; }
        public decimal TranAmount { get; set; }

        public string? TranType { get; set; }

    }
}
