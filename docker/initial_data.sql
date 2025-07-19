-- Create schema
CREATE SCHEMA IF NOT EXISTS JPVerbs;

-- Use the schema
USE JPVerbs;

-- Create ENUM types
CREATE TYPE jpverbs.verb_group_enum AS ENUM (
    'GROUPE_1',
    'GROUPE_2',
    'GROUPE_3'
);

CREATE TYPE jpverbsjlpt_level_enum AS ENUM (
    'JLPT_N5',
    'JLPT_N4',
    'JLPT_N3',
    'JLPT_N2',
    'JLPT_N1'
);

-- Create Verb table
CREATE TABLE jpverbs.Verb (
    id SERIAL PRIMARY KEY,
    translation_fr VARCHAR(100) NOT NULL,
    base_kanji VARCHAR(50),
    base_hiragana VARCHAR(50) NOT NULL,
    base_romaji VARCHAR(50) NOT NULL,
    verb_group verb_group_enum NOT NULL,
    jlpt_level jlpt_level_enum NOT NULL
);

INSERT INTO jpverbs.verb
  (translation_fr, base_kanji, base_hiragana, base_romaji, verb_group, jlpt_level)
VALUES
  -- JLPT N5
  ('Manger', '食べる', 'たべる', 'taberu', 'GROUPE_2', 'JLPT_N5'),
  ('Boire', '飲む', 'のむ', 'nomu', 'GROUPE_1', 'JLPT_N5'),
  ('Faire', 'する', 'する', 'suru', 'GROUPE_3', 'JLPT_N5'),
  ('Aller', '行く', 'いく', 'iku', 'GROUPE_1', 'JLPT_N5'),
  ('Voir', '見る', 'みる', 'miru', 'GROUPE_2', 'JLPT_N5'),
  ('Venir', '来る', 'くる', 'kuru', 'GROUPE_3', 'JLPT_N5'),

  -- JLPT N4
  ('Attendre', '待つ', 'まつ', 'matsu', 'GROUPE_1', 'JLPT_N4'),
  ('Entrer', '入る', 'はいる', 'hairu', 'GROUPE_1', 'JLPT_N4'),
  ('Ouvrir', '開ける', 'あける', 'akeru', 'GROUPE_2', 'JLPT_N4'),

  -- JLPT N3
  ('Savoir', '知る', 'しる', 'shiru', 'GROUPE_1', 'JLPT_N3'),
  ('Commencer', '始める', 'はじめる', 'hajimeru', 'GROUPE_2', 'JLPT_N3'),

  -- JLPT N2
  ('Décider', '決める', 'きめる', 'kimeru', 'GROUPE_2', 'JLPT_N2'),
  ('Perdre', '失う', 'うしなう', 'ushinau', 'GROUPE_1', 'JLPT_N2'),

  -- JLPT N1
  ('Se souvenir', '思い出す', 'おもいだす', 'omoidasu', 'GROUPE_1', 'JLPT_N1'),
  ('S’excuser', '謝る', 'あやまる', 'ayamaru', 'GROUPE_1', 'JLPT_N1'),
  ('Faire (forme humble)', '致す', 'いたす', 'itasu', 'GROUPE_3', 'JLPT_N1')