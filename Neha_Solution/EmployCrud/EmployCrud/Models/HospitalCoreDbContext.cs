using Microsoft.EntityFrameworkCore;

namespace EmployCrud.Models
{
    public class HospitalCoreDbContext : DbContext
    {
        public HospitalCoreDbContext(DbContextOptions<HospitalCoreDbContext> options) : base(options)
        {
        }
        //OnConfiguring() method is used to select and configure the data source
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Doctor>().ToTable("Doctor");
        }


        public DbSet<Doctor> Doctor { get; set; }
    }
}
