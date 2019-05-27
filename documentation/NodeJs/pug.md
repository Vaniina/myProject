# Qu'est-ce que pug ?

**Pug** est un moteur de templates implémenté en JavaScript qui permet de générer dynamiquement du HTML. Sa syntaxe est donc minimaliste et basée sur des indentations.

## La syntaxe

Le nom des balises dans Pug est représenté par des sélecteurs inspirés de la syntaxe du CSS. De plus, sa syntaxe dépendante des indentations la rend plus condensée, plus lisible et moins sujette à des problématiques d'absence de balise fermante.

```
article#article-1
  h2 Class and id
  .class Class
  #id Id
```
Ce qui donne le HTML suivant :

```
<article id="article-1">
    <h2>Class and id</h2>
    <div class="class">Class</div>
    <div id="id">Id</div>
</article>
```


---