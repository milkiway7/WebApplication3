    using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models
{
    public class ModelAddProject
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public Guid CreatedBy { get; set; }
        public string Project {  get; set; }
        public string Client {  get; set; }
        public string ShortDescription { get; set; }
        public string Department { get; set; }
        public string Process { get; set; }
        public string Link { get; set; }
        public string ProjectCoordinator { get; set; }
        public string TimesheetCode { get; set; }
        public string SolutionArchitect {  get; set; }
        public string ProjectTeam { get; set; }
        public string TeamsChannelUrl { get; set; }
        public DateTime ProjectStartDate { get; set; }
        public DateTime ProjectEndDate { get; set; }
        public string Completion {  get; set; }        
    }
}
