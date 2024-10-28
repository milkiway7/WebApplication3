using DataAccess.Models.Authentication;
using DataAccess.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApplication3.Models;

namespace WebApplication3.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IUserRepository _userRepository;
        public HomeController(ILogger<HomeController> logger, IUserRepository userRepository)
        {
            _logger = logger;
            _userRepository = userRepository;
        }

        public IActionResult Index()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        #region Log in
        public IActionResult LogIn()
        {
            return View();
        }

        #endregion

        #region Register
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> RegisterAsync(UserModel user)
        {
            if(ModelState.IsValid)
            {
                UserModel userExsist = await _userRepository.GetUserByEmailAsync(user.EmailAddress);

                if(userExsist == null)
                {
                    UserModel newUser = new UserModel()
                    {
                        EmailAddress = user.EmailAddress,
                        Password = _userRepository.HashPassword(user.Password),
                        RememberMe = user.RememberMe
                    };

                    await _userRepository.CreateUserAsync(newUser);

                    return RedirectToAction(nameof(Index));
                }
            }

            ModelState.AddModelError("", "Registration failed. Please try agian.");
            return View();
        }

        #endregion

    }
}
