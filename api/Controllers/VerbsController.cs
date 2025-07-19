using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
   [ApiController]
   [Route("verbs")]
   public class VerbsController : ControllerBase
   {
      [HttpGet]
      public IActionResult Get()
      {
         return Ok("test");
      }
   }
}