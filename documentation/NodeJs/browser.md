# Browser (navigateur internet)

Un navigateur internet (*browser* en anglais), est un logiciel conçu pour consulter et afficher le *World Wide Web*.

Il produit des **tokens** (*jetons* en anglais), il les prend au fur et à mesure de l'affichage de la page HTML :

```
<h1> titre </h1>

<h1> : en premier
<titre> : en deuxième
</h1> : en troisième

Il y a ici 3 tokens.
```


Il existe un token spécial, qui est la balise `<script>`. Elle va faire une nouvelle analyse de la page HTML, du début à la fin. Ce qui entraîne la fabrication d'un nouveau **DOM** et ainsi une stabilisation du **DOM** (affichage de la bonne page HTML).

## RFC (request for comments)

Les **RFC**, littéralement *demande de commentaires*, sont un cahier des charges décrivant les aspects et spécifications techniques de l'Internet, ou de différents matériels informatiques.