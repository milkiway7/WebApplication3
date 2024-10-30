using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models.AddProject
{
    public class AddProjectModel
    {
        [Key]
        public int Id { get; set; }
        public int Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public string? Project {  get; set; }
        public string? Client {  get; set; }
        public string? ShortDescription { get; set; }
        public string? Description { get; set; }
        public string? Process {  get; set; }
        public string? Link { get; set; }
        public string? ProjectCoordinator { get; set; }
        public string? TimesheetCode { get; set; }
        public string? SolutionArchitect { get; set; }
        public string? ProjectTeam { get; set; }
        public string? TeamsChannerUrl { get; set; }
        public string? ProjectStartDate { get; set; }
        public string? ProjectEndDate { get; set; }
        public string? Completion {  get; set; }
        public string? DeliverablesInline { get; set; }
        public string? Budget { get; set; }
        public byte[]? SupportingDocumentation { get; set; }

    }
}
