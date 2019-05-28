# Paramètres du reste (Rest parameters)

Cette syntaxe permet de représenter un nombre indéfini d'arguments sous forme d'un tableau.

## Description

Si le dernier paramètre nommé fourni à la fonction est préfixé de `...` (trois points), il devient un tableau dont les éléments entre `0` (inclus) et `lesArguments.length` (exclus) sont fournis comme autres arguments à la fonction.

```
function maFonction(a, b, ...plusDArguments) {
  console.log("a", a);
  console.log("b", b);
  console.log("plusDArguments", plusDArguments);
}
```
---

## Destructuration

L'affectation par décomposition (*destructuring* en anglais) est une expression JavaScript qui permet d'extraire (*unpack* en anglais) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.

## Syntaxe

```
const a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({a, b} = {a: 10, b: 20});
console.log(a); // 10
console.log(b); // 20
```

### Description

Ces expressions utilisant des littéraux pour les **objets** ou les **tableaux** permettent de créer simplement des données regroupées. Une fois créées, on peut les utiliser de n'importe quelle façon, y compris comme valeur renvoyée par une fonction.

```
const x = [1, 2, 3, 4, 5]; // On crée un "paquet" de donnée
const [y, z] = x; // On utilise l'affectation par décomposition
console.log(y); // 1
console.log(z); // 2
```

L'intérêt de l'assignation par décomposition est de pouvoir lire une structure entière en une seule instruction.



--- 



