using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.SignalR;

namespace EmployCrud.Models
{
    public class Users
    {
        [Key]
        public int UserId { get; set; }
        public string? FullName { get; set; }

        public string? Email { get; set; }

        public string? PasswordHash { get; set; }    

        public DateTime CreatedAt { get; set; }
    }
}
