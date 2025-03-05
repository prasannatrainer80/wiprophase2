using BankProject.Models;

namespace BankProject.Services
{
    public class BankService
    {
        private readonly EFCoreDbContext _context;

        public BankService(EFCoreDbContext context)
        {
            _context = context;
        }


    }
}
