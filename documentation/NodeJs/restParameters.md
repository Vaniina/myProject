# Paramètres du reste ou destructuration (Rest parameters)

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