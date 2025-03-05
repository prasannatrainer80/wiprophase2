using Microsoft.EntityFrameworkCore;

namespace BankProject.Models
{
    public class EFCoreDbContext : DbContext
    {
        public EFCoreDbContext() { }
        //Constructor calling the Base DbContext Class Constructor
        public EFCoreDbContext(DbContextOptions<EFCoreDbContext> options) : base(options)
        {
        }
        //OnConfiguring() method is used to select and configure the data source
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>().ToTable("Account");
            modelBuilder.Entity<Trans>().ToTable("Trans");

        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Trans> Trans { get; set; }
    }
}
