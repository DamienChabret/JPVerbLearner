using api.models;
using api.services;
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
      public async Task<ActionResult<List<Verb>>> GetAll()
      {
         var verbs = await verbService.GetAll();

         if (verbs == null || verbs.Count == 0)
            return NoContent();

         return Ok(verbs);
      }
   }
}
