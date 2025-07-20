using System;
using api.Data;
using api.models;

public static class DbSeeder
{
   
    public static async Task SeedAsync(JPVerbLearnerContext context)
   {
     
         if (!context.Verbs.Any())
         {
            var verbs = new List<Verb>
            {
               // JLPT N5
               new Verb { TranslationFr = "Aller", BaseKanji = "行く", BaseHiragana = "いく", BaseRomaji = "iku", VerbeGroup = VerbGroupEnum.GROUPE_1, JlptLevel = VerbLevelEnum.JLPT_N5 },
               new Verb { TranslationFr = "Manger", BaseKanji = "食べる", BaseHiragana = "たべる", BaseRomaji = "taberu", VerbeGroup = VerbGroupEnum.GROUPE_2, JlptLevel = VerbLevelEnum.JLPT_N5 },
               new Verb { TranslationFr = "Faire", BaseKanji = "する", BaseHiragana = "する", BaseRomaji = "suru", VerbeGroup = VerbGroupEnum.GROUPE_3, JlptLevel = VerbLevelEnum.JLPT_N5 },
               new Verb { TranslationFr = "Venir", BaseKanji = "来る", BaseHiragana = "くる", BaseRomaji = "kuru", VerbeGroup = VerbGroupEnum.GROUPE_3, JlptLevel = VerbLevelEnum.JLPT_N5 },
               new Verb { TranslationFr = "Boire", BaseKanji = "飲む", BaseHiragana = "のむ", BaseRomaji = "nomu", VerbeGroup = VerbGroupEnum.GROUPE_1, JlptLevel = VerbLevelEnum.JLPT_N5 },

               // JLPT N4
               new Verb { TranslationFr = "Ouvrir", BaseKanji = "開ける", BaseHiragana = "あける", BaseRomaji = "akeru", VerbeGroup = VerbGroupEnum.GROUPE_2, JlptLevel = VerbLevelEnum.JLPT_N4 },
               new Verb { TranslationFr = "Fermer", BaseKanji = "閉める", BaseHiragana = "しめる", BaseRomaji = "shimeru", VerbeGroup = VerbGroupEnum.GROUPE_2, JlptLevel = VerbLevelEnum.JLPT_N4 },
               new Verb { TranslationFr = "Attendre", BaseKanji = "待つ", BaseHiragana = "まつ", BaseRomaji = "matsu", VerbeGroup = VerbGroupEnum.GROUPE_1, JlptLevel = VerbLevelEnum.JLPT_N4 },
               new Verb { TranslationFr = "Penser", BaseKanji = "思う", BaseHiragana = "おもう", BaseRomaji = "omou", VerbeGroup = VerbGroupEnum.GROUPE_1, JlptLevel = VerbLevelEnum.JLPT_N4 },
               new Verb { TranslationFr = "Utiliser", BaseKanji = "使う", BaseHiragana = "つかう", BaseRomaji = "tsukau", VerbeGroup = VerbGroupEnum.GROUPE_1, JlptLevel = VerbLevelEnum.JLPT_N4 },

               // JLPT N3
               new Verb { TranslationFr = "Commencer", BaseKanji = "始める", BaseHiragana = "はじめる", BaseRomaji = "hajimeru", VerbeGroup = VerbGroupEnum.GROUPE_2, JlptLevel = VerbLevelEnum.JLPT_N3 },
               new Verb { TranslationFr = "Finir", BaseKanji = "終わる", BaseHiragana = "おわる", BaseRomaji = "owaru", VerbeGroup = VerbGroupEnum.GROUPE_1, JlptLevel = VerbLevelEnum.JLPT_N3 },
               new Verb { TranslationFr = "Continuer", BaseKanji = "続ける", BaseHiragana = "つづける", BaseRomaji = "tsuzukeru", VerbeGroup = VerbGroupEnum.GROUPE_2, JlptLevel = VerbLevelEnum.JLPT_N3 },
               new Verb { TranslationFr = "Connaître", BaseKanji = "知る", BaseHiragana = "しる", BaseRomaji = "shiru", VerbeGroup = VerbGroupEnum.GROUPE_1, JlptLevel = VerbLevelEnum.JLPT_N3 },
               new Verb { TranslationFr = "Se souvenir", BaseKanji = "覚える", BaseHiragana = "おぼえる", BaseRomaji = "oboeru", VerbeGroup = VerbGroupEnum.GROUPE_2, JlptLevel = VerbLevelEnum.JLPT_N3 },

               // JLPT N2
               new Verb { TranslationFr = "Décider", BaseKanji = "決める", BaseHiragana = "きめる", BaseRomaji = "kimeru", VerbeGroup = VerbGroupEnum.GROUPE_2, JlptLevel = VerbLevelEnum.JLPT_N2 },
               new Verb { TranslationFr = "S'excuser", BaseKanji = "謝る", BaseHiragana = "あやまる", BaseRomaji = "ayamaru", VerbeGroup = VerbGroupEnum.GROUPE_1, JlptLevel = VerbLevelEnum.JLPT_N2 },
               new Verb { TranslationFr = "Protéger", BaseKanji = "守る", BaseHiragana = "まもる", BaseRomaji = "mamoru", VerbeGroup = VerbGroupEnum.GROUPE_1, JlptLevel = VerbLevelEnum.JLPT_N2 },

               // JLPT N1
               new Verb { TranslationFr = "Supporter", BaseKanji = "耐える", BaseHiragana = "たえる", BaseRomaji = "taeru", VerbeGroup = VerbGroupEnum.GROUPE_2, JlptLevel = VerbLevelEnum.JLPT_N1 },
               new Verb { TranslationFr = "Déduire", BaseKanji = "推測する", BaseHiragana = "すいそくする", BaseRomaji = "suisoku suru", VerbeGroup = VerbGroupEnum.GROUPE_3, JlptLevel = VerbLevelEnum.JLPT_N1 },
            };


            foreach (var verb in verbs)
            {
               bool exists = context.Verbs.Any(v =>
                  v.BaseKanji == verb.BaseKanji &&
                  v.TranslationFr == verb.TranslationFr);

               if (!exists)
                  context.Verbs.Add(verb);
            }

            await context.SaveChangesAsync();
         }
   }
}
