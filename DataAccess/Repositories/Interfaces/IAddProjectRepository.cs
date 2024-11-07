using DataAccess.Models.AddProject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repositories.Interfaces
{
    public interface IAddProjectRepository
    {
        Task<bool> AddProjectAsync(AddProjectModel projectModel);
        Task SaveAsync();
    }
}
