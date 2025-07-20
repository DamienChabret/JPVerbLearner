import { JLPTLevelEnum } from './JlptLevelEnum';
import { VerbGroupEnum } from './VerbGroupeEnum'; 

export class VerbModel {
  trad: string;
  kanji: string;
  hiragana: string;
  romaji: string;
  group: VerbGroupEnum;
  level: JLPTLevelEnum;

  constructor(
    trad: string,
    kanji: string,
    hiragana: string,
    furigana: string,
    verb_group: VerbGroupEnum,
    verb_level: JLPTLevelEnum
  ) {
    this.trad = trad;
    this.kanji = kanji;
    this.hiragana = hiragana;
    this.romaji = furigana;
    this.group = verb_group;
    this.level = verb_level;
  }
}
