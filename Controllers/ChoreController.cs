using HouseRules.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using HouseRules.Models;
using Microsoft.EntityFrameworkCore;

namespace HouseRules.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChoreController : ControllerBase
{
    private HouseRulesDbContext _dbContext;

    public ChoreController(HouseRulesDbContext context)
    {
        _dbContext = context;
    }

// get all chores
    [HttpGet]
    [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.Chores.ToList());
    }

    [HttpGet("{id}")]
    // [Authorize]
    public IActionResult GetById(int id)
    {
        Chore foundChore = _dbContext
            .Chores
            .Include(c => c.ChoreAssignments)
            .Include(c => c.ChoreCompletions)
            .SingleOrDefault(c => c.Id == id);
        if (foundChore == null)
        {
            return NotFound();
        }

        return Ok(foundChore);
            
    }
}