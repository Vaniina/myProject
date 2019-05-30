# Les fondamentaux JS

![](https://allenpike.com/images/2015/javascript-guy.jpg)

Résumé des différentes choses à savoir pour bien débuter en javascript.
Cette documentation va reprendre les bases, à savoir :

- [Les types de données](#les-types-de-donnes)
- [Les opérateurs](#les-oprateurs)
- [Les comparaisons](#les-comparaisons)
- [Les variables](#les-variables)
- [Les fonctions](#les-fonctions)

> **Note:** Penser à maintenir cette documentation pour la suite et à prendre des cafés ☕️ ! 

---

## Les types de données

Pour commencer, il faut savoir qu'en javascript il y a différents types de données.
Celles-ci permettent de stocker les différentes structures et gagner en confort.

On peut dès à présent en citer les principales :

- [Boolean](#boolean)
- [String](#string)
- [Number](#number)
- [Object](#object)
- [Array](#array)

Il est important de noter que chacun de ces types a son propre intérêt, et ils peuvent donner accès à différentes méthodes internes.

#### Boolean

Un boolean est représenté par `true` ou `false`, il permet de dire si quelque chose a un état spécifique.
Par exemple, spécifier si une fonctionnalité est active.


Il y a différentes façon de générer un boolean, une liste non exhaustive :

```js
// En dure
const IS_DEV_MODE = true;

// Par comparaison
const IS_DEV_MODE = location.hash === '#dev'; // si c'est égale
const IS_DEV_MODE = location.hash !== '#dev'; // si ce n'est pas égale

// En transformant une donnée, si celle-ci est vide, retourne false, sinon true.
const IS_DEV_MODE = Boolean(location.hash);
const IS_DEV_MODE = !!location.hash; // version "racourcie" du dessus.
```

#### String

Les strings, ou _chaines de caractères_, permettent de stocker des caractères ou du texte.
Il existe différentes façon d'écrire du texte :

```js
const monTexte = "Coucou toi";
const monTexte = 'Coucou toi';
const monTexte = `Coucou toi`;
```

Celles-ci donnent accès à pleins de méthodes liées au traitement de texte, disponibles directement sur ceux-ci, notons les principaux : `length`, `toUpperCase`, `toLowerCase`, `charAt`, `substr`, `indexOf`, `substring`, `split`, `trim`, ...

```js
const monTexte = '  Coucou   ';
const result = monTexte.trim();

result; // <- 'Coucou'
```

Il est possible d'accéder individuellement à des caractères de ce texte, en utilisant les propriétés des tableaux :

```js
const monTexte = "Coucou toi";

monTexte[0]; // 'C'
monTexte[1]; // 'o'
monTexte[2]; // 'u'

monTexte.length = 10;
```


Il est également possible d'assembler différents textes ensembles via l'opérateur `+` :
```js
const monTexte1 = "Coucou toi, ";
const monTexte2 = "Tu vas bien";

const result = monTexte1 + monTexte2 + " ? ";

result; // <- 'Coucou toi, Tu vas bien ?'
```

#### Number

Les nombres, permettent essentiellement à faire des calculs : addition, soustraction, multiplication, ...

```js
const count = 22;
const result = count * 13 + 5;
```

Les nombres à virgules utilisent le symbole `.` pour celle-ci :

```js
const count = 22.5;
```

Ils possèdent également des méthodes accessibles sur tous les nombres.

```js
const count = 22.5;
const result = count.toFixed(2);

result; // '22.50' <- résultat converti en string
```

#### Object

Les objets permettent de stocker des structures plus complexes pour un besoin spécifique.
Ils peuvent être définis en format JSON, ou de façon plus dynamique.

```js
const car = {
    seats: 4,
    luggages: 2,
    price: 22500,
    extras: {
        color: "red",
    }
};
```

Nous pouvons accéder aux données de cet objet de 2 façons différentes :

```js
car.seats; // accès à la donnée 'seats' dans 'car'.
car["luggages"]; // accès à la donnée 'luggages' dans 'car'.
```

Nous devons enchaîner les propriétés pour accéder à des niveaux plus bas :

```js
car.extras.color; // accès à 'color' dans 'extras' dans 'car
```

> **Note:** Les accès se font toujours du plus haut niveau, au plus bas. **Rien n'est explicite !**

#### Array

Les `array`, ou *tableaux*, permettent de stocker des listes d'informations.

```js
const children = ["John", "Anna", "Vince"];
const noChildren = []; // Tableau vide
```

Implicitement, un Array est un Objet ou chaque clé est un nombre.

```js
const children = ["John", "Anna", "Vince"];

children[0]; // <- "John"
children[1]; // <- "Anna"
children[2]; // <- "Vince"
children[3]; // <- undefined
```

La force des `array`, est de pouvoir manipuler des listes, enlever/ajouter des éléments, les classer par rapport à un filtre et pas mal d'autres informations.
Nous noterons les fonctionnalités principales : `.length`, `.push()`, `.indexOf`, `.splice()`, `.sort()`, `.map()`, `.join()`, `.find()`, `.findIndex()`, `.filter()`, `.forEach()`.

---

## Les opérateurs

Les différents opérateurs mathématiques sont disponibles pour effectuer des calculs plus ou moins complexes :

- `+` Additioner des nombres, **ou assembler des strings ensembles**.
- `-` Soustraction de nombres.
- `/` Division de nombres.
- `*` Multiplication de nombres.

> **Note:** Il en existe d'autres, que l'on notera plus tard, car moins courant (`%`, `^`, `!`, `~`, `|`, `&`, `<<`, `<<<`, `>>`, `>>>`).

---

## Les comparaisons

Les opérateurs de comparaison permettent d'éxecuter du code dans un cas précis.
Ils sont souvent utilisés dans les conditions `if()` ou dans des fonctions pour trouver des éléments, par exemple: `array.find()`, `array.filter()`

- `a === b` Est égal.
- `a !== b` N'est pas égal.
- `a < b` Est plus petit que.
- `a <= b` Est plus petit ou égal à.
- `a > b` Est plus grand ou égal à.
- `a >= b` Est plus grand ou égal à.

Il est possible d'effectuer de multiples comparaisons à la suite, via les opérateurs suivants :

- `||` -> OU
- `&&` -> ET

Ainsi :

```js
// Si le nom est "John" et son âge supérieur à 30.
if (name === "John" && age > 30) {
  alert("Bonjour toi !");   
}
```

Il existe aussi l'opérateur ternaire qui permet de faire des conditions sur une seule ligne :

```js
const message = (sexe === "male") ? "Une bière ?" : "Un rosé ?";
```


---

## Les variables

Les variables permettent de stocker tout types de données. Elles sont utilisées pour tout et n'importe quoi.
Il existe 2 types de variables :

- `const` - Variable constante qui ne peut changer de valeur.
- `let` - Variable qui existe que entre les accolades `{}` où elle se situe.
- `var` plus vraiment utilisé, on n'en parlera pas.

#### Création de la variable

Pour créer une variable, il suffit d'utiliser le mot clé magique ci-dessus est de donner un nombre à notre variable, et de lui assigner une valeur avec le symbole `=`.

```js
let user = "Vince";
const age = 30;
```

Dans certains cas (pour `let` uniquement), il est possible de créer une variable sans lui attribuer de valeur sur le moment, afin de changer sa valeur plus tard :

```js
let name;
```

#### Changer sa valeur

Une fois la variable créé, on peut modifier sa valeur à tout moment (uniquement si ce n'est pas une constante), toujours avec le symbole `=`, mais cette fois sans utiliser `let`.

```js
let user = "John";
const IS_ADMIN = true;

if (isAdmin) {
    user = "Maître du monde"; // On change la valeur
}

user; // <- "Maître du monde"
```

#### Portée de la variable

Les types de variables `let` et `const`, n'existent que dans le bloc d'accolade `{}` dans lequel elles se situent.

```js
const user = "John"; // globale
const isAdmin = true; // globale

if (isAdmin) {
    const age = 32; // existe uniquement dans le if
    let weight = 60; // existe uniquement dans le if
}

// ici age et weight n'existe plus.
```

#### Cas des objets

Dans le cas des objets, il est inutile d'utiliser `let` et `const` pour créer des propriétés dans des objets.

```js
const car = {
  color: "red"
};

car.seats = 5; // On peut créer directement la donnée.
car.color = "blue"; // On peut modifier les données.
```

---

## Les fonctions

Les fonctions permettent de rassembler une logique du code. On peut en créer directement, ou bien en utiliser indirectement (via les méthodes `array.map()` par exemple).

#### Fonction basique
Il y a 2 parties, la fonction en elle-même :
```js
function bonjour() {
    return "Coucou";
}
```

Et l'appel à cette fonction.
```js
bonjour(); // <- "Coucou"
```

La structure est toujours la même, **et les parenthèses sont nécessaires**.


#### Envoie d'un paramètre
Si l'on souhaite envoyer un paramètre à la fonction, il faut modifier légèrement le code.

```js
function bonjour (name) { // <- On reçoie une variable qu'on a appelé "name" qui contient "John"
    return "Coucou " + name;
}
```

Et l'appel à cette fonction.
```js
bonjour("John"); // <- "Coucou John"
bonjour("Anna"); // <- "Coucou Anna"
```

#### Envoie de plusieurs paramètres

Si l'on souhaite envoyer plusieurs paramètres à la fonction, il suffit d'ajouter dans les parenthèses la liste des variables que l'on souhaite envoyer, séparées par des virgules.

```js
function bonjour (name, age) { // <- 2 paramètres appelés 'name' et 'age'
    return "Coucou " + name + ", tu as " + age + " ans ";
}
```

Et l'appel à cette fonction avec les 2 paramètres.
```js
bonjour("John", 32); // <- "Coucou John, tu as 32 ans"
bonjour("Louise", 22); // <- "Coucou Louise, tu as 22 ans"
```

> **Note:** On peut envoyer comme ça autant de paramètres que l'on souhaite.

#### Paramètres non utilisés

Dans le cas où la fonction possède des paramètres non-utilisés, on peut les exclurent tant que tout ceux à droite ne sont pas utilisés.

Exemple:
```js
function getParams (a, b, c, d, e, f) {
    return d + 5;
}

// Seul d est utilisé, on peut enlever tout ceux à droite.
function getParams (a, b, c, d) {
    return d + 5;
}
```


#### Fonctions raccourcies

Aussi appelées *arrow functions*, celles-ci permettent de simplifier la création de fonction, car oui encore, les développeurs sont feignants.

Ainsi, au lieu d'écrire :
```js
function bonjour (name) {
    return "Coucou " + name;
}
```

Il est possible d'écrire :

```js
const bonjour = (name) => {
    return "Coucou " + name;
};
```

Et si la fonction contient qu'une seule ligne de code, nous pouvons simplifier encore plus !
```js
const bonjour = (name) => "Coucou " + name;
```

> **Note:** Il ne faut pas ajouter de crochets autour de la chaîne de caractère, sinon la fonction ne retournera pas la valeur.

#### Fonctions anonymes

![](https://www.erenumerique.fr/wp-content/uploads/2016/02/Les-Anonymous.jpg)

Dans certains cas, lorsque l'on envoie une fonction en paramètre à une autre fonction par exemple, il n'est pas nécessaire de donner un nom à celle-ci.

Ainsi, le code suivant :

```js
[7,12,15]
    .filter(function isBig (element) {
        return element > 10;
    });
```

Peut être transformé en :
```js
[7,12,15]
    .filter(function (element) {
        return element > 10;
    });
```

Et ainsi en :

```js
[7,12,15]
    .filter((element) => element > 10);
```


---


## La boucle for

L'instruction `for` crée une boucle composée de trois expressions optionnelles séparées par des points-virgules, et encadrées entre des parenthèses qui sont suivies par une instruction (généralement une *instruction de bloc*) à exécuter dans la boucle.

L'instruction `for` qui suit débute en déclarant la variable `i` et en l'initialisant à 0. Elle vérifie que `i` est inférieur (strictement) à 9 et exécute ensuite les deux instructions contenues dans la boucle, ensuite elle incrémente `i` de 1, ce qui sera fait à chaque passage dans la boucle.

```js
for (let i = 0; i < 9; i++) {
   console.log(i);
}
```


---


## La boucle for...in

L'instruction `for...in` permet d'itérer sur les **propriétés énumérables** d'un objet qui ne sont pas des **symboles**. Pour chaque propriété obtenue, on exécute une instruction (ou plusieurs grâce à un *bloc* d'instructions).

### Description

Une boucle `for...in` ne parcourt pas les propriétés qui ne sont pas énumérables et qui ne sont pas des symboles. Les objets qui ont été créés par des constructeurs intégrés comme Array et Object ont hérité de propriétés non énumérables de `Object.prototype` et `String.prototype` comme les méthodes `indexOf()` du type `String` ou `toString` depuis `Object`. La boucle parcourera toutes les propriétés énumérables de l'objet et aussi celles dont il hérite du prototype du constructeur (les propriétés les plus proches de l'objet dans la chaîne des prototypes primeront sur les propriétés des prototypes).

> Note : `for...in` ne doit pas être utilisé pour parcourir un Array, lorque l'ordre des éléments est important.

```js
const object = {a:1, b:2, c:3};
    
for (let property in object) {
  console.log(`object.${property} = ${object[property]}`);
}
```


---


## La boucle for...of

L'instruction `for...of` permet de créer une boucle Array qui parcourt un objet itérable (ce qui inclut les objets `Array`, `Map`, `Set`, `String`, `TypedArray`, l'objet `arguments`, etc.) et qui permet d'exécuter une ou plusieurs instructions pour la valeur de chaque propriété.

```js
let tableauItérable = [1, 2, 3];

for (let valeur of tableauItérable) {
  console.log(valeur);
}
```


---






















