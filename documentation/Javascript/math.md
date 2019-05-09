## ParseInt()

La fonction `parseInt()` analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.

### Description

La fonction `parseInt()` convertit le premier argument en une chaîne, l'analyse et renvoie un entier ou `NaN`. Si la valeur renvoyée n'est pas `NaN`, ce sera l'entier représentant le nombre contenu dans la chaîne dans la base donnée. Une base **10** est utilisée pour la base décimale, **8** pour la base octale, **16** pour la base hexadécimale. Pour les bases supérieures à **10**, les lettres de l'alphabet seront utilisées pour représenter les chiffres supérieurs à **9**. Par exemple, pour la base hexadécimale, on utilisera les lettres **A** à **F**.

Si, lors de l'analyse de la chaîne, `parseInt()` rencontre un caractère qui n'est pas un chiffre dans la base donnée, ce caractère, ainsi que les suivants seront ignorés. `ParseInt()` tronque les nombres fournies en valeurs entières. Les espaces en début et en fin de chaîne sont autorisés.

Si la base fournie vaut `undefined` ou 0 (ou si elle n'est pas utilisée comme paramètre), le moteur JavaScript procèdera comme suit :

- Si l'argument `string` commence avec "0x" ou "0X", la base considérée sera la base 16 (hexadécimale) et le reste de la chaîne sera analysé et converti.

- Si l'argument `string` commence avec "0", la base considérée sera la base 8 (octale) ou la base 10 (décimale). La base exacte qui sera choisie dépendra de l'implémentation. ECMAScript 5 définit que la base 10 doit être utilisée. Cependant, cela n'est pas supporté par tous les navigateurs. C'est pour cette raison qu'il faut **toujours spécifier une base lorsqu'on utilise `parseInt()`.**

- Si l'argument `string` commence avec une autre valeur, la base considérée sera la base 10.

Si le premier caractère de la chaîne de caractères ne peut pas être converti, `parseInt()` renverra `NaN`.

Pour des raisons arithmétiques, la valeur `NaN` n'est un nombre pour aucune base. La fonction `isNaN()` peut être utilisée pour déterminer si le résultat obtenu par `parseInt()` vaut `NaN`. Si `NaN` est utilisé dans une opération arithmétique, le résultat de cette opération sera aussi `NaN` (on dit que NaN` est une valeur « toxique »).

Pour convertir un nombre en une chaîne de caractères dans une base donnée, on utilisera `monEntier.toString(base)`.


---


## ParseFloat()

La fonction `parseFloat()` permet de transformer une chaîne de caractères en un nombre flottant après avoir analysée celle-ci (`parsing`).

### Description

`ParseFloat` est une fonction non associée à un objet, disponible au plus haut niveau de l'environnement JavaScript.

`ParseFloat` analyse l'argument fourni sous la forme d'une chaîne de caractères et renvoie un nombre flottant correspondant. L'analyse de la chaîne s'arrête dès qu'un caractère qui n'est pas +, -, un chiffre, un point ou un exposant. Ce caractère, ainsi que les suivants, seront ignorés. Les blancs en début et en fin de chaîne sont autorisés.

Si le premier caractère de la chaîne ne peut pas être converti en un nombre, `parseFloat()` renverra `NaN`.

Pour des raisons arithmétiques, la valeur `NaN` n'est jamais un nombre, quelle que soit la base considérée. On peut utiliser la méthode `isNaN` afin de déterminer si le résultat obtenu par `parseFloat()` est `NaN`. Si `NaN` est passé comme valeur lors d'opérations arithmétiques, ces opérations renverront également `NaN` comme résultat.

`ParseFloat()` peut également analyser et renvoyer la valeur `Infinity` qui représente l'infini numérique. Ici, on pourra utiliser la fonction `isFinite()` afin de déterminer si le résultat obtenu est un nombre fini (c'est-à-dire qui n'est ni `Infinity`, ni `-Infinity`, ni `NaN`).

`ParseFloat()` peut également analyser un objet si celui-ci implémente la méthode `toString()` ou `valueOf()`. La valeur renvoyée par `parseFloat()` est le résultat de `parseFloat()` appliqué à la valeur renvoyée par `toString()` ou `valueOf()` .



---


## Math.floor()

La fonction `Math.floor(x)` renvoie le plus grand entier qui est inférieur ou égal à un nombre `x`.

### Description

`Floor()` est une méthode statique de l'objet `Math`, elle doit toujours être utilisée avec la syntaxe  `Math.floor()` elle ne doit pas être utilisée avec un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

```js
Math.floor( 45.95); //  45
Math.floor( 45.05); //  45
Math.floor(  4   ); //   4
Math.floor(-45.05); // -46
Math.floor(-45.95); // -46
Math.floor(null);   // 0
```


---


## Math.round()

La fonction `Math.round()` retourne la valeur d'un nombre arrondi à l'entier le plus proche.

### Description

Si la partie décimale du nombre est plus grande que 0.5, l'argument est arrondi à l'entier le plus proche dont la valeur absolue est plus grande. Si elle est plus petite que 0.5, l'argument est arrondi à l'entier le plus proche dont la valeur absolue est plus petite. Si la partie décimale du nombre vaut exactement 0.5, l'argument est arrondi à l'entier le plus proche en direction de l'infini positif

> Note : Attention, pour la plupart des langages de programmation, c'est le nombre avec la plus grande valeur absolue qui est renvoyé ; on a donc une différence de comportement pour les nombres négatifs dont la partie décimale vaut exactement 0.5. 

`Round()` étant une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.round()`, elle ne doit pas être utilisée comme une méthode d'un objet qui aurait été créé (`Math` n'est pas un constructeur).

```js
Math.round(20.49); //  20
Math.round(20.5);  //  21
Math.round(42);    //  42
Math.round(-20.5); // -20
Math.round(-20.51);// -21
```


---


## Math.random()

La fonction `Math.random()` renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle `[0, 1[` (ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu) selon une distribution approximativement uniforme sur cet intervalle. Ce nombre peut ensuite être multiplié afin de couvrir un autre intervalle.

```js
// On renvoie un nombre aléatoire entre 0 (inclus) et 1 (exclus)`
function getRandom() {
  return Math.random();
}
``` 


---


## ToFixed()

La méthode `toFixed()` permet de formater un nombre en notation à point-fixe.

### Description

`ToFixed()` renvoie une chaîne de caractères représentant `objetNumber` sans notation exponentielle et qui possède exactement `nbChiffres` pour la partie fractionnaire. Le nombre est arrondi si nécessaire et la partie fractionnaire est complétée par des zéros si nécessaire pour obtenir la longueur souhaitée.

```js
const numObj = 12345.6789;

numObj.toFixed();       // Renvoie '12346' : arrondi, aucune partie fractionnaire
numObj.toFixed(1);      // Renvoie '12345.7' : arrondi ici aussi
numObj.toFixed(6);      // Renvoie '12345.678900' : des zéros sont ajoutés
```


---















