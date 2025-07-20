# JP Verb Learner

Application qui permet d'apprendre les verbes en Japonais.

Fonctionnalités à développer : 
- Système d'apprentisage espacés 
- Système d'authenfication
- Système d'entrainement et d'apprentisage journalier
- Petit dashboard pour voir la suite d'apprentisage
- Système de maitrise par utilisateur
- Formulaire pour préciser ce qu'on veut voir en apprentisage Japonais
- Système de groupe de maitrise par verbe par utilisateur

- Système de migration de base de données avec scripts SQL


# Technologies 
- Angular v.17
- Postgres
- Keycloak 
- Back c# .net v.8 with Entity Framework version '9.0.7


# Front
Lancer le front : 
ng serve

# API 
Lancer l'api : 
dotnet run

Générer classe selon DB


# Idées
Pages : 
- Liste des verbes
Liste des verbes, sous forme de cartes avec juste en affichage les info suivante: 
   - Forme de base
   - Traduction
   - Niveau JLPT
   - Groupe

- Quizz
Au moment de lancer un Quizz, une page avec plusieurs options s'affichent :
Politesse : Polie / Neutre
Temps : présent / passé
Forme à voir : 
   - Forme Basique
   - Forme "te"
   - Forme potentielle
   - Forme volitive
   - Forme passive
   - Forme causative
   - Forme conditionnelle (ば, たら, etc.)
   - Forme en cours (〜ている)
 
- Connexion

Pour la connexion, utilisé : Keycloak 