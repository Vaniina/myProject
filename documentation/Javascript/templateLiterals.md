# Les littéraux de gabarits

Les littéraux de gabarits sont des littéraux de chaînes de caractères permettant d'intégrer des expressions. Avec eux, on peut utiliser des chaînes de caractères multi-lignes et des fonctionnalités d'interpolation (injecter une variable dans une chaîne de caractère).

## Syntaxe

```js
`texte`

`ligne de texte 1
 ligne de texte 2`

`texte ${expression} texte`
```
### Description

Les gabarits sont délimités par des caractères accent grave (``) au lieu des apostrophes doubles ou simples. Les gabarits peuvent contenir des espaces réservés (placeholders). Ces espaces sont indiqués par le signe dollar ($) et des accolades `(${expression})`. Les expressions dans les espaces réservés et le texte compris dans ces espaces sont passés à une fonction.

Pour créer la chaîne finale, la fonction par défaut concatène simplement les différentes parties en une seule chaîne.

Devant une apostrophe par exemple, on utilise un caractère spécial qui est l'anti-slash (\\).

```js
console.log('bonjour, je m\'appelle' + user.name);
console.log(`bonjour, je m'appelle ${user.name}`);
```


---

