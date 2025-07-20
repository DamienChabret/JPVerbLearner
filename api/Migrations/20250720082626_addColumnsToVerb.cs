using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class addColumnsToVerb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CausativeHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CausativeKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CausativePassiveHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CausativePassiveKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CausativePassiveRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CausativeRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ConditionalPoliteHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ConditionalPoliteKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ConditionalPoliteRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ConditionalNeutralHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ConditionalNeutralKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ConditionalNeutralRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DesireHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DesireKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DesireRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "HonorificHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "HonorificKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "HonorificRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "HumbleHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "HumbleKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "HumbleRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "HypotheticalHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "HypotheticalKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "HypotheticalRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImperativeHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImperativeKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImperativePoliteHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImperativePoliteKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImperativePoliteRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImperativeRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NegativeProgressiveHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NegativeProgressiveKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NegativeProgressiveRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NeutralPastHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NeutralPastKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NeutralPastNegativeHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NeutralPastNegativeKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NeutralPastNegativeRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NeutralPastRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NeutralPresentHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NeutralPresentKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NeutralPresentNegativeHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NeutralPresentNegativeKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NeutralPresentNegativeRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NeutralPresentRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PassiveHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PassiveKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PassiveRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PolitePastHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PolitePastKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PolitePastNegativeHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PolitePastNegativeKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PolitePastNegativeRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PolitePastRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PolitePresentHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PolitePresentKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PolitePresentNegativeHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PolitePresentNegativeKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PolitePresentNegativeRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PolitePresentRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PotentialHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PotentialKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PotentialPoliteHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PotentialPoliteKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PotentialPoliteRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PotentialRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ProgressiveHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ProgressiveKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ProgressiveRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TeFormHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TeFormKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TeFormRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "VolitionalHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "VolitionalKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "VolitionalPoliteHiragana",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "VolitionalPoliteKanji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "VolitionalPoliteRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "VolitionalRomaji",
                table: "Verb",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CausativeHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "CausativeKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "CausativePassiveHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "CausativePassiveKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "CausativePassiveRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "CausativeRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ConditionalPoliteHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ConditionalPoliteKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ConditionalPoliteRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ConditionalNeutralHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ConditionalNeutralKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ConditionalNeutralRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "DesireHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "DesireKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "DesireRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "HonorificHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "HonorificKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "HonorificRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "HumbleHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "HumbleKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "HumbleRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "HypotheticalHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "HypotheticalKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "HypotheticalRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ImperativeHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ImperativeKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ImperativePoliteHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ImperativePoliteKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ImperativePoliteRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ImperativeRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NegativeProgressiveHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NegativeProgressiveKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NegativeProgressiveRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NeutralPastHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NeutralPastKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NeutralPastNegativeHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NeutralPastNegativeKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NeutralPastNegativeRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NeutralPastRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NeutralPresentHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NeutralPresentKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NeutralPresentNegativeHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NeutralPresentNegativeKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NeutralPresentNegativeRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "NeutralPresentRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PassiveHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PassiveKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PassiveRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PolitePastHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PolitePastKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PolitePastNegativeHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PolitePastNegativeKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PolitePastNegativeRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PolitePastRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PolitePresentHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PolitePresentKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PolitePresentNegativeHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PolitePresentNegativeKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PolitePresentNegativeRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PolitePresentRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PotentialHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PotentialKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PotentialPoliteHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PotentialPoliteKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PotentialPoliteRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "PotentialRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ProgressiveHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ProgressiveKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "ProgressiveRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "TeFormHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "TeFormKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "TeFormRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "VolitionalHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "VolitionalKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "VolitionalPoliteHiragana",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "VolitionalPoliteKanji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "VolitionalPoliteRomaji",
                table: "Verb");

            migrationBuilder.DropColumn(
                name: "VolitionalRomaji",
                table: "Verb");
        }
    }
}
