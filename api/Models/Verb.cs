using api.models;

namespace api.models
{
   /// <summary>
   /// Représente un verbe japonais avec ses traductions, formes de base et toutes ses formes conjuguées.
   /// </summary>
   public class Verb
   {
      public int Id { get; set; }

      /// <summary>Traduction française du verbe</summary>
      public string TranslationFr { get; set; } = string.Empty;

      /// <summary>Forme de base en kanji</summary>
      public string BaseKanji { get; set; } = string.Empty;

      /// <summary>Forme de base en rōmaji</summary>
      public string BaseRomaji { get; set; } = string.Empty;

      /// <summary>Forme de base en hiragana</summary>
      public string BaseHiragana { get; set; } = string.Empty;

      /// <summary>Groupe du verbe (godan, ichidan, irrégulier)</summary>
      public VerbGroupEnum VerbGroup { get; set; }

      /// <summary>Niveau JLPT du verbe (N5 à N1)</summary>
      public VerbLevelEnum JlptLevel { get; set; }

      #region Kanji 
      // --- Formes Présentes ---
      public string NeutralPresentKanji { get; set; } = string.Empty;
      public string NeutralPresentNegativeKanji { get; set; } = string.Empty;
      public string PolitePresentKanji { get; set; } = string.Empty;
      public string PolitePresentNegativeKanji { get; set; } = string.Empty;

      // --- Formes Passées ---
      public string NeutralPastKanji { get; set; } = string.Empty;
      public string NeutralPastNegativeKanji { get; set; } = string.Empty;
      public string PolitePastKanji { get; set; } = string.Empty;
      public string PolitePastNegativeKanji { get; set; } = string.Empty;

      // --- Te-forme (enchaînements, requêtes, etc.) ---
      public string TeFormKanji { get; set; } = string.Empty;

      // --- Progressif (en train de...) ---
      public string ProgressiveKanji { get; set; } = string.Empty;
      public string NegativeProgressiveKanji { get; set; } = string.Empty;

      // --- Volitif (proposition / volonté) ---
      public string VolitionalKanji { get; set; } = string.Empty;
      public string VolitionalPoliteKanji { get; set; } = string.Empty;

      // --- Potentiel (capacité) ---
      public string PotentialKanji { get; set; } = string.Empty;
      public string PotentialPoliteKanji { get; set; } = string.Empty;

      // --- Conditionnel (si...) ---
      public string ConditionalPoliteKanji { get; set; } = string.Empty;
      public string ConditionalNeutralKanji { get; set; } = string.Empty;

      // --- Impératif (ordre ou requête) ---
      public string ImperativeKanji { get; set; } = string.Empty;
      public string ImperativePoliteKanji { get; set; } = string.Empty;

      // --- Passif & Causatif ---
      public string PassiveKanji { get; set; } = string.Empty;
      public string CausativeKanji { get; set; } = string.Empty;
      public string CausativePassiveKanji { get; set; } = string.Empty;

      // --- Autres formes ---
      /// <summary>Forme désirative</summary>
      public string DesireKanji { get; set; } = string.Empty;

      /// <summary>Forme honorifique (respectueuse)</summary>
      public string HonorificKanji { get; set; } = string.Empty;

      /// <summary>Forme humble (modestie envers l’interlocuteur)</summary>
      public string HumbleKanji { get; set; } = string.Empty;

      /// <summary>Forme hypothétique ou d’intention</summary>
      public string HypotheticalKanji { get; set; } = string.Empty;
      #endregion 

      #region Hiragana 
      public string NeutralPresentHiragana { get; set; } = string.Empty;
      public string NeutralPresentNegativeHiragana { get; set; } = string.Empty;
      public string PolitePresentHiragana { get; set; } = string.Empty;
      public string PolitePresentNegativeHiragana { get; set; } = string.Empty;

      public string NeutralPastHiragana { get; set; } = string.Empty;
      public string NeutralPastNegativeHiragana { get; set; } = string.Empty;
      public string PolitePastHiragana { get; set; } = string.Empty;
      public string PolitePastNegativeHiragana { get; set; } = string.Empty;

      public string TeFormHiragana { get; set; } = string.Empty;

      public string ProgressiveHiragana { get; set; } = string.Empty;
      public string NegativeProgressiveHiragana { get; set; } = string.Empty;

      public string VolitionalHiragana { get; set; } = string.Empty;
      public string VolitionalPoliteHiragana { get; set; } = string.Empty;

      public string PotentialHiragana { get; set; } = string.Empty;
      public string PotentialPoliteHiragana { get; set; } = string.Empty;

      public string ConditionalPoliteHiragana { get; set; } = string.Empty;
      public string ConditionalNeutralHiragana { get; set; } = string.Empty;

      public string ImperativeHiragana { get; set; } = string.Empty;
      public string ImperativePoliteHiragana { get; set; } = string.Empty;

      public string PassiveHiragana { get; set; } = string.Empty;
      public string CausativeHiragana { get; set; } = string.Empty;
      public string CausativePassiveHiragana { get; set; } = string.Empty;

      public string DesireHiragana { get; set; } = string.Empty;
      public string HonorificHiragana { get; set; } = string.Empty;
      public string HumbleHiragana { get; set; } = string.Empty;
      public string HypotheticalHiragana { get; set; } = string.Empty;
      #endregion 

      #region Romaji 
      public string NeutralPresentRomaji { get; set; } = string.Empty;
      public string NeutralPresentNegativeRomaji { get; set; } = string.Empty;
      public string PolitePresentRomaji { get; set; } = string.Empty;
      public string PolitePresentNegativeRomaji { get; set; } = string.Empty;

      public string NeutralPastRomaji { get; set; } = string.Empty;
      public string NeutralPastNegativeRomaji { get; set; } = string.Empty;
      public string PolitePastRomaji { get; set; } = string.Empty;
      public string PolitePastNegativeRomaji { get; set; } = string.Empty;

      public string TeFormRomaji { get; set; } = string.Empty;

      public string ProgressiveRomaji { get; set; } = string.Empty;
      public string NegativeProgressiveRomaji { get; set; } = string.Empty;

      public string VolitionalRomaji { get; set; } = string.Empty;
      public string VolitionalPoliteRomaji { get; set; } = string.Empty;

      public string PotentialRomaji { get; set; } = string.Empty;
      public string PotentialPoliteRomaji { get; set; } = string.Empty;

      public string ConditionalPoliteRomaji { get; set; } = string.Empty;
      public string ConditionalNeutralRomaji { get; set; } = string.Empty;

      public string ImperativeRomaji { get; set; } = string.Empty;
      public string ImperativePoliteRomaji { get; set; } = string.Empty;

      public string PassiveRomaji { get; set; } = string.Empty;
      public string CausativeRomaji { get; set; } = string.Empty;
      public string CausativePassiveRomaji { get; set; } = string.Empty;

      public string DesireRomaji { get; set; } = string.Empty;
      public string HonorificRomaji { get; set; } = string.Empty;
      public string HumbleRomaji { get; set; } = string.Empty;
      public string HypotheticalRomaji { get; set; } = string.Empty;
      #endregion 
   }
}
