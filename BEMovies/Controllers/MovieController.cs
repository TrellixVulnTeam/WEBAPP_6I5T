using BEMovies.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BEMovies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly AppDBContext _context;

        public MovieController(AppDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listMovies = await _context.Movie.ToListAsync();

                return Ok(listMovies);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var movie = await _context.Movie.FindAsync(id);

                if(movie == null)
                {
                    return NotFound();
                }

                return Ok(movie);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Movie value)
        {
            try
            {
                _context.Add(value);
                await _context.SaveChangesAsync();

                return Ok(value);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Movie value)
        {
            try
            {
                if(id != value.id)
                {
                    return BadRequest();
                }

                _context.Update(value);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Movie edited" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var movie = await _context.Movie.FindAsync(id);

                if (movie == null)
                {
                    return NotFound();
                }

                _context.Movie.Remove(movie);
                await _context.SaveChangesAsync();

                return Ok(new { message = "Movie deleted" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
