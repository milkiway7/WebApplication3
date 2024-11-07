using DataAccess.Models.AddProject;
using DataAccess.Repositories.Interfaces;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public class AddProjectRepository : IAddProjectRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<AddProjectRepository> _logger;

        public AddProjectRepository(ApplicationDbContext context, ILogger<AddProjectRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<bool> AddProjectAsync(AddProjectModel projectModel)
        {
            try
            {
                projectModel.DeliverablesJson = JsonSerializer.Serialize(projectModel.DeliverablesInline);
                projectModel.BudgetJson = JsonSerializer.Serialize(projectModel.BudgetInline);

                _context.AddProjects.Add(projectModel);
                await SaveAsync();
                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Couldn't save in data base: {projectModel.Project}");
                return false;
            }

        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
