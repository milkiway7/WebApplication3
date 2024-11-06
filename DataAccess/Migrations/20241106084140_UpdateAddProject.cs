using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class UpdateAddProject : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Description",
                table: "AddProjects",
                newName: "Department");

            migrationBuilder.RenameColumn(
                name: "DeliverablesInline",
                table: "AddProjects",
                newName: "DeliverablesJson");

            migrationBuilder.RenameColumn(
                name: "Budget",
                table: "AddProjects",
                newName: "BudgetJson");

            migrationBuilder.AlterColumn<DateTime>(
                name: "ProjectStartDate",
                table: "AddProjects",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "ProjectEndDate",
                table: "AddProjects",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Department",
                table: "AddProjects",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "DeliverablesJson",
                table: "AddProjects",
                newName: "DeliverablesInline");

            migrationBuilder.RenameColumn(
                name: "BudgetJson",
                table: "AddProjects",
                newName: "Budget");

            migrationBuilder.AlterColumn<string>(
                name: "ProjectStartDate",
                table: "AddProjects",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "ProjectEndDate",
                table: "AddProjects",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);
        }
    }
}
