import { JLPTLevelEnum } from './JlptLevelEnum';
import { VerbGroupEnum } from './VerbGroupeEnum';

export class VerbModel {
  id: number | null;

  /** Traduction française du verbe */
  translationFr: string;

  /** Forme de base en kanji */
  baseKanji: string;

  /** Forme de base en hiragana */
  baseHiragana: string;

  /** Forme de base en rōmaji */
  baseRomaji: string;

  /** Groupe du verbe (godan, ichidan, irrégulier) */
  verbGroup: VerbGroupEnum;

  /** Niveau JLPT du verbe */
  jlptLevel: JLPTLevelEnum;

  //#region Kanji forms
  neutralPresentKanji: string;
  neutralPresentNegativeKanji: string;
  politePresentKanji: string;
  politePresentNegativeKanji: string;

  neutralPastKanji: string;
  neutralPastNegativeKanji: string;
  politePastKanji: string;
  politePastNegativeKanji: string;

  teFormKanji: string;

  progressiveKanji: string;
  negativeProgressiveKanji: string;

  volitionalKanji: string;
  volitionalPoliteKanji: string;

  potentialKanji: string;
  potentialPoliteKanji: string;

  conditionalPoliteKanji: string;
  conditionalNeutralKanji: string;

  imperativeKanji: string;
  imperativePoliteKanji: string;

  passiveKanji: string;
  causativeKanji: string;
  causativePassiveKanji: string;

  desireKanji: string;
  honorificKanji: string;
  humbleKanji: string;
  hypotheticalKanji: string;
  //#endregion

  //#region Hiragana forms
  neutralPresentHiragana: string;
  neutralPresentNegativeHiragana: string;
  politePresentHiragana: string;
  politePresentNegativeHiragana: string;

  neutralPastHiragana: string;
  neutralPastNegativeHiragana: string;
  politePastHiragana: string;
  politePastNegativeHiragana: string;

  teFormHiragana: string;

  progressiveHiragana: string;
  negativeProgressiveHiragana: string;

  volitionalHiragana: string;
  volitionalPoliteHiragana: string;

  potentialHiragana: string;
  potentialPoliteHiragana: string;

  conditionalPoliteHiragana: string;
  conditionalNeutralHiragana: string;

  imperativeHiragana: string;
  imperativePoliteHiragana: string;

  passiveHiragana: string;
  causativeHiragana: string;
  causativePassiveHiragana: string;

  desireHiragana: string;
  honorificHiragana: string;
  humbleHiragana: string;
  hypotheticalHiragana: string;
  //#endregion

  //#region Romaji forms
  neutralPresentRomaji: string;
  neutralPresentNegativeRomaji: string;
  politePresentRomaji: string;
  politePresentNegativeRomaji: string;

  neutralPastRomaji: string;
  neutralPastNegativeRomaji: string;
  politePastRomaji: string;
  politePastNegativeRomaji: string;

  teFormRomaji: string;

  progressiveRomaji: string;
  negativeProgressiveRomaji: string;

  volitionalRomaji: string;
  volitionalPoliteRomaji: string;

  potentialRomaji: string;
  potentialPoliteRomaji: string;

  conditionalPoliteRomaji: string;
  conditionalNeutralRomaji: string;

  imperativeRomaji: string;
  imperativePoliteRomaji: string;

  passiveRomaji: string;
  causativeRomaji: string;
  causativePassiveRomaji: string;

  desireRomaji: string;
  honorificRomaji: string;
  humbleRomaji: string;
  hypotheticalRomaji: string;
  //#endregion

  constructor(
    verbGroup: VerbGroupEnum,
    jlptLevel: JLPTLevelEnum,

    id: number | null = null,

    trad?: string,
    kanjiBase?: string,
    hiraganaBase?: string,
    romajiBase?: string,

    // Kanji forms
    neutralPresentKanji = '',
    neutralPresentNegativeKanji = '',
    politePresentKanji = '',
    politePresentNegativeKanji = '',

    neutralPastKanji = '',
    neutralPastNegativeKanji = '',
    politePastKanji = '',
    politePastNegativeKanji = '',

    teFormKanji = '',

    progressiveKanji = '',
    negativeProgressiveKanji = '',

    volitionalKanji = '',
    volitionalPoliteKanji = '',

    potentialKanji = '',
    potentialPoliteKanji = '',

    conditionalPoliteKanji = '',
    conditionalNeutralKanji = '',

    imperativeKanji = '',
    imperativePoliteKanji = '',

    passiveKanji = '',
    causativeKanji = '',
    causativePassiveKanji = '',

    desireKanji = '',
    honorificKanji = '',
    humbleKanji = '',
    hypotheticalKanji = '',

    // Hiragana forms
    neutralPresentHiragana = '',
    neutralPresentNegativeHiragana = '',
    politePresentHiragana = '',
    politePresentNegativeHiragana = '',

    neutralPastHiragana = '',
    neutralPastNegativeHiragana = '',
    politePastHiragana = '',
    politePastNegativeHiragana = '',

    teFormHiragana = '',

    progressiveHiragana = '',
    negativeProgressiveHiragana = '',

    volitionalHiragana = '',
    volitionalPoliteHiragana = '',

    potentialHiragana = '',
    potentialPoliteHiragana = '',

    conditionalPoliteHiragana = '',
    conditionalNeutralHiragana = '',

    imperativeHiragana = '',
    imperativePoliteHiragana = '',

    passiveHiragana = '',
    causativeHiragana = '',
    causativePassiveHiragana = '',

    desireHiragana = '',
    honorificHiragana = '',
    humbleHiragana = '',
    hypotheticalHiragana = '',

    // Romaji forms
    neutralPresentRomaji = '',
    neutralPresentNegativeRomaji = '',
    politePresentRomaji = '',
    politePresentNegativeRomaji = '',

    neutralPastRomaji = '',
    neutralPastNegativeRomaji = '',
    politePastRomaji = '',
    politePastNegativeRomaji = '',

    teFormRomaji = '',

    progressiveRomaji = '',
    negativeProgressiveRomaji = '',

    volitionalRomaji = '',
    volitionalPoliteRomaji = '',

    potentialRomaji = '',
    potentialPoliteRomaji = '',

    conditionalPoliteRomaji = '',
    conditionalNeutralRomaji = '',

    imperativeRomaji = '',
    imperativePoliteRomaji = '',

    passiveRomaji = '',
    causativeRomaji = '',
    causativePassiveRomaji = '',

    desireRomaji = '',
    honorificRomaji = '',
    humbleRomaji = '',
    hypotheticalRomaji = '',
  ) {
    this.id = id;
    this.translationFr = trad ?? '';
    this.baseKanji = kanjiBase ?? '';
    this.baseHiragana = hiraganaBase ?? '';
    this.baseRomaji = romajiBase ?? '';
    this.verbGroup = verbGroup;
    this.jlptLevel = jlptLevel;

    // Kanji assignment
    this.neutralPresentKanji = neutralPresentKanji;
    this.neutralPresentNegativeKanji = neutralPresentNegativeKanji;
    this.politePresentKanji = politePresentKanji;
    this.politePresentNegativeKanji = politePresentNegativeKanji;

    this.neutralPastKanji = neutralPastKanji;
    this.neutralPastNegativeKanji = neutralPastNegativeKanji;
    this.politePastKanji = politePastKanji;
    this.politePastNegativeKanji = politePastNegativeKanji;

    this.teFormKanji = teFormKanji;

    this.progressiveKanji = progressiveKanji;
    this.negativeProgressiveKanji = negativeProgressiveKanji;

    this.volitionalKanji = volitionalKanji;
    this.volitionalPoliteKanji = volitionalPoliteKanji;

    this.potentialKanji = potentialKanji;
    this.potentialPoliteKanji = potentialPoliteKanji;

    this.conditionalPoliteKanji = conditionalPoliteKanji;
    this.conditionalNeutralKanji = conditionalNeutralKanji;

    this.imperativeKanji = imperativeKanji;
    this.imperativePoliteKanji = imperativePoliteKanji;

    this.passiveKanji = passiveKanji;
    this.causativeKanji = causativeKanji;
    this.causativePassiveKanji = causativePassiveKanji;

    this.desireKanji = desireKanji;
    this.honorificKanji = honorificKanji;
    this.humbleKanji = humbleKanji;
    this.hypotheticalKanji = hypotheticalKanji;

    // Hiragana assignment
    this.neutralPresentHiragana = neutralPresentHiragana;
    this.neutralPresentNegativeHiragana = neutralPresentNegativeHiragana;
    this.politePresentHiragana = politePresentHiragana;
    this.politePresentNegativeHiragana = politePresentNegativeHiragana;

    this.neutralPastHiragana = neutralPastHiragana;
    this.neutralPastNegativeHiragana = neutralPastNegativeHiragana;
    this.politePastHiragana = politePastHiragana;
    this.politePastNegativeHiragana = politePastNegativeHiragana;

    this.teFormHiragana = teFormHiragana;

    this.progressiveHiragana = progressiveHiragana;
    this.negativeProgressiveHiragana = negativeProgressiveHiragana;

    this.volitionalHiragana = volitionalHiragana;
    this.volitionalPoliteHiragana = volitionalPoliteHiragana;

    this.potentialHiragana = potentialHiragana;
    this.potentialPoliteHiragana = potentialPoliteHiragana;

    this.conditionalPoliteHiragana = conditionalPoliteHiragana;
    this.conditionalNeutralHiragana = conditionalNeutralHiragana;

    this.imperativeHiragana = imperativeHiragana;
    this.imperativePoliteHiragana = imperativePoliteHiragana;

    this.passiveHiragana = passiveHiragana;
    this.causativeHiragana = causativeHiragana;
    this.causativePassiveHiragana = causativePassiveHiragana;

    this.desireHiragana = desireHiragana;
    this.honorificHiragana = honorificHiragana;
    this.humbleHiragana = humbleHiragana;
    this.hypotheticalHiragana = hypotheticalHiragana;

    // Romaji assignment
    this.neutralPresentRomaji = neutralPresentRomaji;
    this.neutralPresentNegativeRomaji = neutralPresentNegativeRomaji;
    this.politePresentRomaji = politePresentRomaji;
    this.politePresentNegativeRomaji = politePresentNegativeRomaji;

    this.neutralPastRomaji = neutralPastRomaji;
    this.neutralPastNegativeRomaji = neutralPastNegativeRomaji;
    this.politePastRomaji = politePastRomaji;
    this.politePastNegativeRomaji = politePastNegativeRomaji;

    this.teFormRomaji = teFormRomaji;

    this.progressiveRomaji = progressiveRomaji;
    this.negativeProgressiveRomaji = negativeProgressiveRomaji;

    this.volitionalRomaji = volitionalRomaji;
    this.volitionalPoliteRomaji = volitionalPoliteRomaji;

    this.potentialRomaji = potentialRomaji;
    this.potentialPoliteRomaji = potentialPoliteRomaji;

    this.conditionalPoliteRomaji = conditionalPoliteRomaji;
    this.conditionalNeutralRomaji = conditionalNeutralRomaji;

    this.imperativeRomaji = imperativeRomaji;
    this.imperativePoliteRomaji = imperativePoliteRomaji;

    this.passiveRomaji = passiveRomaji;
    this.causativeRomaji = causativeRomaji;
    this.causativePassiveRomaji = causativePassiveRomaji;

    this.desireRomaji = desireRomaji;
    this.honorificRomaji = honorificRomaji;
    this.humbleRomaji = humbleRomaji;
    this.hypotheticalRomaji = hypotheticalRomaji;
  }
}
