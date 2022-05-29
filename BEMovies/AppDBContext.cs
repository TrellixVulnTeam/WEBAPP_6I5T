using BEMovies.Models;
using Microsoft.EntityFrameworkCore;

namespace BEMovies
{
    public class AppDBContext: DbContext
    {
        public DbSet<Movie> Movie { get; set; }

        public AppDBContext(DbContextOptions<AppDBContext> options): base(options)
        {

        }
    }
}
