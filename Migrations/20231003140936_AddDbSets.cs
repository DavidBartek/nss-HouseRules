using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HouseRules.Migrations
{
    public partial class AddDbSets : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChoreAssignment_Chore_ChoreId",
                table: "ChoreAssignment");

            migrationBuilder.DropForeignKey(
                name: "FK_ChoreAssignment_UserProfiles_UserProfileId",
                table: "ChoreAssignment");

            migrationBuilder.DropForeignKey(
                name: "FK_ChoreCompletion_Chore_ChoreId",
                table: "ChoreCompletion");

            migrationBuilder.DropForeignKey(
                name: "FK_ChoreCompletion_UserProfiles_UserProfileId",
                table: "ChoreCompletion");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ChoreCompletion",
                table: "ChoreCompletion");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ChoreAssignment",
                table: "ChoreAssignment");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Chore",
                table: "Chore");

            migrationBuilder.RenameTable(
                name: "ChoreCompletion",
                newName: "ChoreCompletions");

            migrationBuilder.RenameTable(
                name: "ChoreAssignment",
                newName: "ChoreAssignments");

            migrationBuilder.RenameTable(
                name: "Chore",
                newName: "Chores");

            migrationBuilder.RenameIndex(
                name: "IX_ChoreCompletion_UserProfileId",
                table: "ChoreCompletions",
                newName: "IX_ChoreCompletions_UserProfileId");

            migrationBuilder.RenameIndex(
                name: "IX_ChoreCompletion_ChoreId",
                table: "ChoreCompletions",
                newName: "IX_ChoreCompletions_ChoreId");

            migrationBuilder.RenameIndex(
                name: "IX_ChoreAssignment_UserProfileId",
                table: "ChoreAssignments",
                newName: "IX_ChoreAssignments_UserProfileId");

            migrationBuilder.RenameIndex(
                name: "IX_ChoreAssignment_ChoreId",
                table: "ChoreAssignments",
                newName: "IX_ChoreAssignments_ChoreId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ChoreCompletions",
                table: "ChoreCompletions",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ChoreAssignments",
                table: "ChoreAssignments",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Chores",
                table: "Chores",
                column: "Id");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
                column: "ConcurrencyStamp",
                value: "1f46cc74-43fc-4e12-b640-c3f0fa925710");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "97c39e20-b6cb-44a8-ac76-5c73d90c220d", "AQAAAAEAACcQAAAAEH1leEm2+tINayhh9sNMTQXfgvuNX9y/zHvuwOtPmz/hdwwOcwBYVC+jDf9Hu+xdYg==", "819470d1-eef7-493a-85d1-d0c8a562ba43" });

            migrationBuilder.AddForeignKey(
                name: "FK_ChoreAssignments_Chores_ChoreId",
                table: "ChoreAssignments",
                column: "ChoreId",
                principalTable: "Chores",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChoreAssignments_UserProfiles_UserProfileId",
                table: "ChoreAssignments",
                column: "UserProfileId",
                principalTable: "UserProfiles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChoreCompletions_Chores_ChoreId",
                table: "ChoreCompletions",
                column: "ChoreId",
                principalTable: "Chores",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChoreCompletions_UserProfiles_UserProfileId",
                table: "ChoreCompletions",
                column: "UserProfileId",
                principalTable: "UserProfiles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChoreAssignments_Chores_ChoreId",
                table: "ChoreAssignments");

            migrationBuilder.DropForeignKey(
                name: "FK_ChoreAssignments_UserProfiles_UserProfileId",
                table: "ChoreAssignments");

            migrationBuilder.DropForeignKey(
                name: "FK_ChoreCompletions_Chores_ChoreId",
                table: "ChoreCompletions");

            migrationBuilder.DropForeignKey(
                name: "FK_ChoreCompletions_UserProfiles_UserProfileId",
                table: "ChoreCompletions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Chores",
                table: "Chores");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ChoreCompletions",
                table: "ChoreCompletions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ChoreAssignments",
                table: "ChoreAssignments");

            migrationBuilder.RenameTable(
                name: "Chores",
                newName: "Chore");

            migrationBuilder.RenameTable(
                name: "ChoreCompletions",
                newName: "ChoreCompletion");

            migrationBuilder.RenameTable(
                name: "ChoreAssignments",
                newName: "ChoreAssignment");

            migrationBuilder.RenameIndex(
                name: "IX_ChoreCompletions_UserProfileId",
                table: "ChoreCompletion",
                newName: "IX_ChoreCompletion_UserProfileId");

            migrationBuilder.RenameIndex(
                name: "IX_ChoreCompletions_ChoreId",
                table: "ChoreCompletion",
                newName: "IX_ChoreCompletion_ChoreId");

            migrationBuilder.RenameIndex(
                name: "IX_ChoreAssignments_UserProfileId",
                table: "ChoreAssignment",
                newName: "IX_ChoreAssignment_UserProfileId");

            migrationBuilder.RenameIndex(
                name: "IX_ChoreAssignments_ChoreId",
                table: "ChoreAssignment",
                newName: "IX_ChoreAssignment_ChoreId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Chore",
                table: "Chore",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ChoreCompletion",
                table: "ChoreCompletion",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ChoreAssignment",
                table: "ChoreAssignment",
                column: "Id");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
                column: "ConcurrencyStamp",
                value: "c5bec10e-09c2-448e-b318-dc085dc9ca09");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "65d77189-677a-4651-8824-b9e135e60bed", "AQAAAAEAACcQAAAAED7fBonKHYswYNoK3uN/fppYnTihf53Fni4BuVB5rWpMg5XhZ+ry7Pi4qMOCiyRcLA==", "967aed61-8c17-46f8-bf0f-8a9881097123" });

            migrationBuilder.AddForeignKey(
                name: "FK_ChoreAssignment_Chore_ChoreId",
                table: "ChoreAssignment",
                column: "ChoreId",
                principalTable: "Chore",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChoreAssignment_UserProfiles_UserProfileId",
                table: "ChoreAssignment",
                column: "UserProfileId",
                principalTable: "UserProfiles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChoreCompletion_Chore_ChoreId",
                table: "ChoreCompletion",
                column: "ChoreId",
                principalTable: "Chore",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChoreCompletion_UserProfiles_UserProfileId",
                table: "ChoreCompletion",
                column: "UserProfileId",
                principalTable: "UserProfiles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
