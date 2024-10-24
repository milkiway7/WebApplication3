using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication3.Controllers
{
    [Authorize]
    public class AddProjectController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }
    }
}
