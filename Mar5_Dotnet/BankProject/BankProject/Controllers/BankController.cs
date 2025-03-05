//using BankProject.Models;
//using BankProject.Services;
//using Microsoft.AspNetCore.Mvc;

//namespace BankProject.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class BankController : ControllerBase
//    {
//        private readonly EFCoreDbContext _context;
//        private readonly BankService _service;

//        public BankController(EFCoreDbContext context)
//        {
//            _context = context;
//          _service=  new BankService(_context);
           
//        }

//        [HttpPost]
//        public async Task<ActionResult<Account>> PostAccount(Account account)
//        {
//            _service.AddAccount(account);
//            ////int accno = GenerateAccountNo();    
//            ////account.AccountNo = accno;
//            //_context.Accounts.Add(account);
//            //await _context.SaveChangesAsync();

//            return CreatedAtAction("GetAccount", new { id = account.AccountNo }, account);
//        }

//        //public int GenerateAccountNo()
//        //{
//        //    int accountNo = _context.Accounts.Max(x => x.AccountNo);
//        //    accountNo++;
//        //    return accountNo;
//        //}

//    }
//}