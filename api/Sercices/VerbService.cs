using System.Runtime.CompilerServices;
using api.Data;
using api.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.services
{

   public class VerbService : BaseServiceInterface<Verb>
   {
      private JPVerbLearnerContext context;

      public VerbService(JPVerbLearnerContext context)
      {
         this.context = context;
      }

      public void Create(Verb entity)
      {
         this.context.Add(entity);
         this.context.SaveChanges();
      }

      public async void Delete(int idEntity)
      {
         Verb entityToDelete = await this.Get(idEntity);
         if (entityToDelete == null)
            throw new Exception("Entity does not exist");

         this.context.Remove(entityToDelete);
         this.context.SaveChanges();
      }

      public async Task<Verb> Get(int idEntity)
      {
         Verb result;
         result = await this.context.Verbs.SingleAsync(v => v.Id == idEntity);
         return result;
      }

      public async Task<List<Verb>> GetAll()
      {
         List<Verb> results = new List<Verb>();
         results = await this.context.Verbs.ToListAsync();
         return results;
      }

      public async Task<List<Verb>> GetAllByFilters(VerbFilterParams verbFilterParams)
      {
         var results = await this.context.Verbs
            .Where(t => verbFilterParams.GroupValue.Contains(t.VerbGroup))
            .Where(t => verbFilterParams.LevelValue.Contains(t.JlptLevel))
            .ToListAsync();


         return results;
      }


      public void Update(Verb entity)
      {
         throw new NotImplementedException();
      }
   }

}