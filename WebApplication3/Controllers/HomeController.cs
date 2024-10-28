using DataAccess.Models.Authentication;
using DataAccess.Repositories.Interfaces;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Security.Claims;
using WebApplication3.Models;

namespace WebApplication3.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;

        public HomeController(ILogger<HomeController> logger, IUserRepository userRepository, IConfiguration configuration)
        {
            _logger = logger;
            _userRepository = userRepository;
            _configuration = configuration;
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

        #region Register
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> RegisterAsync(UserModel user)
        {
            if (ModelState.IsValid)
            {
                UserModel userExsist = await _userRepository.GetUserByEmailAsync(user.EmailAddress);

                if (userExsist == null)
                {
                    UserModel newUser = new UserModel()
                    {
                        Id = Guid.NewGuid(),
                        CreatedAt = DateTime.Now,
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

        #region Log in
        public IActionResult LogIn()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> LogInAsync(UserModel user)
        {
            if (user.Password != null && user.EmailAddress != null)
            {
                UserModel dbUser = await _userRepository.GetUserByEmailAsync(user.EmailAddress);

                if (dbUser != null)
                {
                    string hashedPassword = _userRepository.HashPassword(user.Password);
                    bool correctPassword = dbUser?.Password == hashedPassword;

                    if (correctPassword)
                    {
                        List<Claim> claims = new List<Claim>()
                        {
                        new Claim(ClaimTypes.Name, user.EmailAddress),
                        new Claim(ClaimTypes.Email, user.EmailAddress)
                        };

                        ClaimsIdentity identity = new ClaimsIdentity(claims, _configuration["CookieName"]);
                        ClaimsPrincipal principal = new ClaimsPrincipal(identity);

                        await HttpContext.SignInAsync(_configuration["CookieName"], principal);

                        return RedirectToAction(nameof(Index));
                    }
                }

            }

            ModelState.AddModelError("", "Email or password are incorrect");
            return View();
        }
        #endregion

        #region Log out 
        //public Task<IActionResult> LogOutAsync()
        //{
        //    HttpContext.SignOutAsync
        //}
        #endregion

    }
}
