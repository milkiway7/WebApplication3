using DataAccess.Models.AddProject;
using DataAccess.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public class AddProjectRepository : IAddProjectRepository
    {
        private readonly ApplicationDbContext _context;
        public AddProjectRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddProjectAsync(AddProjectModel projectModel)
        {
            _context.AddProjects.Add(projectModel);
            await SaveAsync();
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
