using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JwtExampleNew.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class SomeProtectedController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProtectedData()
        {
            return Ok(new { message = "This is protected data" });
        }
    }
}
