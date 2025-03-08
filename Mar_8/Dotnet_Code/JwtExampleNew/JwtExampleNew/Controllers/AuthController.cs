using JwtExampleNew.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JwtExampleNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] JwtExampleNew.Models.LoginRequest request)
        {
            var token = await _authService.Authenticate(request.Username, request.Password);
            if (string.IsNullOrEmpty(token))
            {
                return Unauthorized("Invalid credentials");
            }
            return Ok(new { Token = token });
        }
    }
}
