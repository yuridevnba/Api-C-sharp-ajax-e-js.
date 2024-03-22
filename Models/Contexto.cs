using Microsoft.EntityFrameworkCore;

namespace WebApplication2.Models
{
    public class Contexto :DbContext
    {
        public DbSet<Pessoa> Pessoas { get; set; } 

        public Contexto(DbContextOptions<Contexto> opcoes) : base(opcoes){ }
    }
}
