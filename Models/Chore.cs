using System.ComponentModel.DataAnnotations;

namespace HouseRules.Models;

public class Chore
{
    public int Id { get; set; }
    [MinLength(1, ErrorMessage = "Chore names must be 1 character or more")]
    [MaxLength(100, ErrorMessage = "Chore names must be 100 characters or less")]
    [Required]
    public string Name { get; set; }
    [Range(1,5, ErrorMessage = "Difficulty must be between 1 and 5")]
    [Required]
    public int Difficulty { get; set; }
    [Range(1,400, ErrorMessage = "Frequency must be between 1 and 400")]
    [Required]
    public int ChoreFrequencyDays { get; set; }
    public List<ChoreAssignment>? ChoreAssignments { get; set; }
    public List<ChoreCompletion>? ChoreCompletions { get; set; }
}