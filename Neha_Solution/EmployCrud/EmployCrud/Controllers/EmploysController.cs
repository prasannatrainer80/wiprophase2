using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmployCrud.Models;
using Microsoft.AspNetCore.Cors;

namespace EmployCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmploysController : ControllerBase
    {
        private readonly EFCoreDbContext _context;

        public EmploysController(EFCoreDbContext context)
        {
            _context = context;
        }

        // GET: api/Employs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employ>>> GetEmployees()
        {
            return await _context.Employees.ToListAsync();
        }

        // GET: api/Employs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employ>> GetEmploy(int id)
        {
            var employ = await _context.Employees.FindAsync(id);

            if (employ == null)
            {
                return NotFound();
            }

            return employ;
        }

        // PUT: api/Employs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmploy(int id, Employ employ)
        {
            if (id != employ.Empno)
            {
                return BadRequest();
            }

            _context.Entry(employ).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Employs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Employ>> PostEmploy(Employ employ)
        {
            _context.Employees.Add(employ);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmploy", new { id = employ.Empno }, employ);
        }

        // DELETE: api/Employs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmploy(int id)
        {
            var employ = await _context.Employees.FindAsync(id);
            if (employ == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employ);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployExists(int id)
        {
            return _context.Employees.Any(e => e.Empno == id);
        }
    }
}
