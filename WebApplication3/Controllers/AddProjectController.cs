﻿using DataAccess.Models.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication3.Controllers
{
    public class AddProjectController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }
    }
}
