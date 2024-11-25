using DataAccess.Constants;
using DataAccess.Models.AddProject;
using DataAccess.Models.Authentication;
using DataAccess.Models.BreadCrumbs;
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
        private readonly IUserRepository _userRepository;
        private readonly ILogger<AddProjectController> _logger;

        public AddProjectController(IAddProjectRepository addProjectRepository, IUserRepository userRepository, ILogger<AddProjectController> logger)
        {
            _addProjectRepository = addProjectRepository;
            _userRepository = userRepository;
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewData["Breadcrumbs"] = new List<BreadCrumbsModel>()
            {
                new BreadCrumbsModel{Name="Add project", Controller="AddProject",Action="Index", IsActive=true }
            };

            return View();
        }

        [Route("AddProject/AddProjectAsync")]
        [HttpPost]
        public async Task<IActionResult> AddProjectAsync([FromBody] AddProjectModel data)
        {
            if (data == null) return BadRequest(new { error = true, message = "Error: no data provided" });

            UserModel user = await _userRepository.GetUserByEmailAsync(User.Identity.Name);

            if (user != null) {
                data.CreatedBy = user.Id;
                data.CreatedByEmail = user.EmailAddress;
                //data.Status = AddProjectConstants.Statuses.NewItem;
                data.CreatedAt = DateTime.Now;

                bool success = await _addProjectRepository.AddProjectAsync(data);

                string? email = user.EmailAddress;

                if (success)
                {
                    return Ok(new { success = true, message = $"Project {data.Project} has been saved", id = data.Id, createdBy = data.CreatedBy, createdAt = data.CreatedAt, status = data.Status, createdByEmail = email });
                }
                else
                {
                    _logger.LogError("Project couldn't  be saved in data base");
                    return StatusCode(500, new { error = true, message = $"Problem with saving project: {data.Project}" });
                }
            }

            _logger.LogError("User not found");

            return StatusCode(500, new { error = true, message = $"User for created by field not found" });
        }

        [Route("AddProject/UpdateFormStatus")]
        [HttpPut]
        public async Task<IActionResult> UpdateFormStatus([FromBody] AddProjectModel data)
        {
            if (data == null) return BadRequest(new { error = true, message = "Error: no data provided" });

            bool success = await _addProjectRepository.UpdateProjectAsync(data);

            if (success)
            {
                return Ok(new { success = true, message = "Project has been rejected", status = data.Status });
            }
            else
            {
                return StatusCode(500, new { error = true, message = $"Internal server error, project {data.Project} couldn't be rejected" });
            }

        }
    }
}
