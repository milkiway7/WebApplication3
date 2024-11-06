using DataAccess.Models.AddProject;
using DataAccess.Models.Authentication;
using DataAccess.Repositories.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApplication3.Controllers
{
    [Authorize]
    public class AddProjectController : Controller
    {
        private readonly IAddProjectRepository _addProjectRepository;

        public AddProjectController(IAddProjectRepository addProjectRepository)
        {
            _addProjectRepository = addProjectRepository;
        }

        public IActionResult Index()
        {
            return View();
        }

        [Route("AddProject/AddProjectAsync")]
        [HttpPost]
        public async Task<IActionResult> AddProjectAsync([FromBody] AddProjectModel data)
        {
            if (data == null) return BadRequest(new { error = true, message = "Error: no data provided" });

            var success = await _addProjectRepository.AddProjectAsync(data);

            if (success)
            {
                return Ok(new { success = true, message = $"Project {data.Project} has been saved", updatedData = data });
            }
            else
            {
                return StatusCode(500, new { error = true, message = $"Problem with saving project: {data.Project}" });
            }

        }
    }
}
