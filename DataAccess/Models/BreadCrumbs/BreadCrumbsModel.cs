﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models.BreadCrumbs
{
    public class BreadCrumbsModel
    {
        public string? Name { get; set; }
        public string? Controller {  get; set; }
        public string? Action { get; set; }
        public bool IsActive { get; set; }
    }
}
