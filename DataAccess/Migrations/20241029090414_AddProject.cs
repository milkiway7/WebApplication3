using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class AddProject : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AddProjects",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Status = table.Column<int>(type: "int", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Project = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Client = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ShortDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Process = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Link = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProjectCoordinator = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TimesheetCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SolutionArchitect = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProjectTeam = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TeamsChannerUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProjectStartDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProjectEndDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Completion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DeliverablesInline = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Budget = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SupportingDocumentation = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AddProjects", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AddProjects");
        }
    }
}
