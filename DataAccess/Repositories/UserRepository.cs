using DataAccess.Models.Authentication;
using DataAccess.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task CreateUserAsync(UserModel user)
        {
            _context.Users.Add(user);
            await SaveAsync();
        }

        public async Task DeleteUserAsync(Guid id)
        {
            UserModel? user = _context.Users.FirstOrDefault(x => x.Id == id);
            if (user == null)
            {
                _context.Users.Remove(user);
                await SaveAsync();
            }
        }

        public async Task<UserModel> GetUserAsync(Guid id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<UserModel> GetUserByEmailAsync(string email)
        {
            UserModel? user = await _context.Users.FirstOrDefaultAsync(u=> u.EmailAddress == email);
            return user;
        }

        public async Task<IEnumerable<UserModel>> GetUsersAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task UpdateUserAsync(UserModel user)
        {
            _context.Users.Update(user);
            await SaveAsync();
        }
        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        public string HashPassword(string password)
        {
            using (var sha256 = SHA256.Create())
            {
                var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                return Convert.ToBase64String(bytes);
            }
        }
    }
}
