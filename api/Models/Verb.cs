using api.models;

namespace api.models
{

   public class Verb
   {
      
      public int Id { get; set; }
      public string TranslationFr { get; set; } = string.Empty;
      public string BaseKanji { get; set; } = string.Empty;
      public string BaseRomaji { get; set; } = string.Empty;
      public string BaseHiragana { get; set; } = string.Empty;
      public VerbGroupEnum VerbeGroup { get; set; }
      public VerbLevelEnum JlptLevel { get; set; }
   }

}