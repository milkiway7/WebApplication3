using DataAccess.Models.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task CreateUserAsync(UserModel user);
        Task<UserModel> GetUserAsync(Guid id);
        Task<UserModel> GetUserByEmailAsync(string email);
        Task<IEnumerable<UserModel>> GetUsersAsync();
        Task UpdateUserAsync(UserModel user);
        Task DeleteUserAsync(Guid id);
        Task SaveAsync();
        string HashPassword(string password);
    }
}

