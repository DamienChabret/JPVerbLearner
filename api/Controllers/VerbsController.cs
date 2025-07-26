using api.models;
using api.services;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
   [ApiController]
   [Route("verbs")]
   public class VerbsController : ControllerBase
   {
      private VerbService verbService;

      public VerbsController(VerbService verbService)
      {
         this.verbService = verbService;
      }

      [HttpGet]
      public async Task<ActionResult<List<Verb>>> GetAll(
         [FromQuery] VerbFilterParams verbParams
      )
      {
         var json = System.Text.Json.JsonSerializer.Serialize(verbParams, new System.Text.Json.JsonSerializerOptions
         {
            WriteIndented = true
         });

         Console.WriteLine(json);

         List<Verb> verbs = new List<Verb>();
         if (!verbParams.EqualNull())
         {
            verbs = await verbService.GetAllByFilters(verbParams);
         }
         else
         {
            verbs = await verbService.GetAll();

         }

         return Ok(verbs);
      }

      [HttpGet("{id}")]
      public async Task<ActionResult<Verb>> GetBy(int id)
      {
         var verb = await verbService.Get(id);
         if (verb == null)
         {
            // :TODO Gérer le cas oèu c'est null, ceci génère quand même une erreur serveur
            return NoContent();
         }
         return Ok(verb);
      }
   }
}
