using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models.Authentication
{
    public class RegisterPageModel
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        [DisplayName("Email address")]
        public string EmailAddress { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Compare(nameof(Password), ErrorMessage ="Password did not match")]
        [DisplayName("Confirm password")]
        public string ConfirmPassword { get; set; }
    }
}
