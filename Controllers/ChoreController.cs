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
    // [Authorize]
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

    [HttpPost("{id}/complete")]
    // [Authorize]
    public IActionResult PostChoreCompletion(int id, [FromQuery] int userId)
    {
        ChoreCompletion newChoreCompletion = new ChoreCompletion
        {
            ChoreId = id,
            UserProfileId = userId,
            CompletedOn = DateTime.Today
        };
        
        _dbContext.ChoreCompletions.Add(newChoreCompletion);
        _dbContext.SaveChanges();

        return Ok(newChoreCompletion);
    }

    // TEST THIS ONE DOWN

    [HttpPost]
    // [Authorize(Roles = "Admin")]
    public IActionResult PostChore(Chore newChore)
    {
        _dbContext.Chores.Add(newChore);
        _dbContext.SaveChanges();

        return Created($"/api/chore/{newChore.Id}", newChore);
    }

    [HttpPut("{id}")]
    // [Authorize(Roles = "Admin")]
    public IActionResult EditChore(int id, Chore editedChore)
    {
        Chore foundChore = _dbContext.Chores.SingleOrDefault(c => c.Id == id);
        if (foundChore == null)
        {
            return NotFound();
        }
        else if (id != editedChore.Id)
        {
            return BadRequest();
        }

        foundChore.Name = editedChore.Name;
        foundChore.Difficulty = editedChore.Difficulty;
        foundChore.ChoreFrequencyDays = editedChore.ChoreFrequencyDays;

        _dbContext.SaveChanges();

        return NoContent();
    }

    [HttpDelete("{id}")]
    // [Authorize(Roles = "Admin")]
    public IActionResult DeleteChore(int id)
    {
        Chore foundChore = _dbContext.Chores.SingleOrDefault(c => c.Id == id);
        if (foundChore == null)
        {
            return NotFound();
        }

        _dbContext.Chores.Remove(foundChore);

        _dbContext.SaveChanges();

        return NoContent();
    }

    [HttpPost("{id}/assign")]
    // [Authorize(Roles = "Admin")]
    public IActionResult PostChoreAssignment(int id, [FromQuery] int userId)
    {
        ChoreAssignment newChoreAssignment = new ChoreAssignment
        {
            ChoreId = id,
            UserProfileId = userId
        };
        
        _dbContext.ChoreAssignments.Add(newChoreAssignment);
        _dbContext.SaveChanges();

        return Ok(newChoreAssignment);
    }

    [HttpPost("{id}/unassign")]
    // [Authorize(Roles = "Admin")]
    public IActionResult PostChoreUnassignment(int id, [FromQuery] int userId)
    {
        // even though a post, is this endpoint to be written like a delete?

        ChoreAssignment foundChoreAssignment = _dbContext
            .ChoreAssignments
            .SingleOrDefault(ca => ca.ChoreId == id && ca.UserProfileId == userId);

        if (foundChoreAssignment == null)
        {
            return NotFound();
        }

        _dbContext.ChoreAssignments.Remove(foundChoreAssignment);
        _dbContext.SaveChanges();

        return Ok(foundChoreAssignment);
    }
}