using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace DataAccess.Models.AddProject
{
    public class AddProjectModel
    {
        [Key]
        public int Id { get; init; }
        public int Status { get; set; }
        public DateTime CreatedAt { get; init; }
        [JsonPropertyName("projectName")]
        public string? Project {  get; set; }
        [JsonPropertyName("client")]
        public string? Client {  get; set; }
        [JsonPropertyName("shortDescription")]
        public string? ShortDescription { get; set; }
        [JsonPropertyName("department")]
        public string? Department { get; set; }
        [JsonPropertyName("process")]
        public string? Process {  get; set; }
        [JsonPropertyName("linkTeams")]
        public string? Link { get; set; }
        [JsonPropertyName("projectCoordinator")]
        public string? ProjectCoordinator { get; set; }
        [JsonPropertyName("timesheetCode")]
        public string? TimesheetCode { get; set; }
        [JsonPropertyName("solutionArchitect")]
        public string? SolutionArchitect { get; set; }
        [JsonPropertyName("projectTeam")]
        public string? ProjectTeam { get; set; }
        [JsonPropertyName("teamsChannelUrl")]
        public string? TeamsChannerUrl { get; set; }
        [JsonPropertyName("projectStartDate")]
        public DateTime? ProjectStartDate { get; set; }
        [JsonPropertyName("projectEndDate")]
        public DateTime? ProjectEndDate { get; set; }
        [JsonPropertyName("completion")]
        public string? Completion {  get; set; }
        [NotMapped]
        [JsonPropertyName("deliverables")]
        public List<List<string>>? DeliverablesInline { get; set; }
        [NotMapped]
        [JsonPropertyName("budget")]
        public List<List<string>>? BudgetInline { get; set; }
        [JsonPropertyName("supportingDocumentation")]
        public byte[]? SupportingDocumentation { get; set; }
        public string? DeliverablesJson { get; set; }
        public string? BudgetJson { get; set; }

    }
}
