using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models.Authentication
{
    public class UserModel
    {
        [Required]
        [Key]
        public Guid Id { get; init; } = Guid.NewGuid();

        [Required]
        public DateTime CreatedAt { get; init; }  = DateTime.Now;

        [Required(ErrorMessage = "Email address is required")]
        [DataType(DataType.EmailAddress)]
        [DisplayName("Email address")]
        public string? EmailAddress { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string? Password { get; set; }

        [NotMapped]
        [Required(ErrorMessage = "Confirm password is required")]
        [DataType(DataType.Password)]
        [Compare(nameof(Password), ErrorMessage ="Password did not match")]
        [DisplayName("Confirm password")]
        public string? ConfirmPassword { get; set; }

        public bool RememberMe { get; set; }
    }
}
