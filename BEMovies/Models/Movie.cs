using System.ComponentModel.DataAnnotations;

namespace BEMovies.Models
{
    public class Movie
    {
        public int id { get; set; }
        [Required]
        public string title { get; set; }
        [Required]
        public string author { get; set; }
        [Required]
        public string category { get; set; }
        [Required]
        public string premiere { get; set; }
    }
}
