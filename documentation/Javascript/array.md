# Méthodes des Array

![](https://media.makeameme.org/created/Array-Array-Everywhere.jpg)

##### Pré-requis:

- [Array keskecé ?](./bases.md#array)
- [Variables et tout !](./bases.md#les-variables)
- [Les fonctions c kwa ?](./bases.md#les-fonctions)

---

##### Résumé du dernier épisode

Les tableaux, *ou array*, permettent de simuler des listes d'informations, il y a différentes API disponibles sur cette donnée qui nous rendent la vie meilleure ! ☀️🏝

Ici, nous allons voir chacune des fonctionnalités essentielles des tableaux, à savoir :

- `.length` - Récupérer la taille du tableau
- `.push()` - Ajouter un élément à la fin du tableau
- `.indexOf()` - Récupérer la position du élément
- `.splice()` - Enlever un élément du tableau
- `.slice()` - Récupérer une partie du tableau
- `.sort()` - Classer le tableau
- `.map()` - Retourner une information de chaque élément du tableau
- `.filter()` - Filtrer les éléments du tableau
- `.forEach()` - Faire une action sur chaque élément du tableau
- `.find()` - Récupérer un élément du tableau
- `.findIndex()` - Récupérer la position un élément du tableau
- `.concat()` - Permet de retourner un nouveau tableau en additionnant des tableaux entre eux
- `.reduce()` - Permet d'accumuler des résultats en fonction du tableau

Toutes ces fonctionalités sont disponibles à partir d'un tableau, il suffit d'ajouter le code après la référence du tableau.

```js
const myTable = [7,8,9];
myTable.length; // <- 3
myTable.indexOf; // <- Function
myTable.forEach; // <- Function
```

### Enchainer les opérations

Puisque ces appels sont disponibles sur tous les tableaux, si une fonction retourne un tableau il est possible d'enchainer ces méthodes.

```js
const myTable = [7,8,9];
const identity = (v) => v;

myTable
    .map(identity) // .map() retourne un tableau
    .map(identity) // .map() retourne un tableau
    .map(identity) // .map() retourne un tableau
    .map(identity) // .map() retourne un tableau
    .map(identity) // .map() retourne un tableau
    // etc.
```

---

# [].length

Permet de retourner, ou modifier la taille d'un tableau

```js
const list = [7, 8, 9, 10];

console.log(list.length); // Affiche 4
console.log(list); // Affiche [7, 8, 9, 10]

// Modifie la taille du tableau
list.length = 3; 
console.log(list.length); // Affiche 3
console.log(list); // Affiche [7, 8, 9]
```

---

# [].push()

Permet d'ajouter un ou plusieurs éléments à la fin du tableau

```js
const list = [7, 8, 9, 10];

list.push("chat"); // Ajoute chien
list.push("cheval", "chien"); // Ajoute cheval et chien

list; // <- [7, 8, 9, 10, "chat", "cheval", "chien"]
```

> **Note:** Il existe la méthode `unshift()` pour ajouter les éléments au début du tableau.

---

# [].indexOf()

Permet de récupérer la position d'un élément dans le tableau, retourne `-1` si non trouvé.

```js
const list = ["chien", "chat", "cheval"];
const position = list.indexOf("chat");

if (position === -1) {
    console.error("non trouvé");
} else {
    console.log("Trouvé à la position", position);
    console.log("Preuve list[position] = ", list[position]);
}

```


---


# [].splice()

Permet de:

- Supprimer des éléments d'un tableau.
- Insérrer des éléments à un tableau.
- Les deux à la fois !

Il prend 3 paramètres :

- `start` La position où l'on commence à supprimer ou insérer.
- `deleteCount` Combien d'items on supprime (si on spécifié: `0`).
- `...items` Les éléments à insérer (optionnel)

Supprimer des éléments :
```js
const list = ["chien", "chat", "cheval", "poussin"];
list.splice(1, 2); // On supprime à partir du "chat" 2 éléments, donc le chat et le cheval.


list; // <- ["chien", "poussin"]
```

Insertions d'éléments:
```js
const list = ["chien", "chat", "cheval", "poussin"];
list.splice(1, 0, "licorne", "crocodile"); // A l'index 1 (chat), on ne supprime aucun élément mais on ajoute "licorne" et "crocodile"


list; // <- ["chien", "licorne", "crocodile", "chat", "cheval", "poussin"]
```


---

# [].slice()

Permet de retourner une partie d'un tableau. Prend 2 arguments :
- `start` - La position à laquelle on commence à extraire.
- `end` - La position à laquelle on arrête d'extraire.

```js
const list = ["cheval", "chien", "chat", "poussin", "licorne"];
const result = list.slice(2, 4);

result; // <- ["chat", "poussin"]
```

---

# [].sort()

Permet d'ordonner un tableau, il est possible d'ajouter sa propre fonction pour choisir l'algorythme utilisé, dans ce cas ci, 2 paramètres sont donnés :
- `a` qui correspond au premier élément à comparer
- `b` qui correspond au second élément à comparer

Il faut alors retourner un nombre plus petit que 0, égale à 0, ou plus grand que 0 pour les comparer.

Exemple simple :

```js
const list = [7, 89, 232, 2];
list.sort();

list; // <- [2, 232, 7, 89]
```

Exemple avec notre propre algorythme :

```js
const list = [7, 89, 232, 2];
list.sort((a, b) => b - a);

list; // <- [232, 89, 7, 2]
```

Exemple de comparaison de string dans un sous-objet:

```js
const list = [{ name: "Vince"}, { name: "Anna"}, { name: "John" }];
list.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});

list; // <- [{ name: "Anna"}, { name: "John"}, { name: "Vince" }];
```

---

# [].map()

Permet de retourner un nouveau tableau à partir d'élement calculer du premier.

Prend comme paramètre une fonction avec 3 paramètres:`

- `element` - L'élément du tableau
- `index` - La position dans le tableau
- `array` - Le tableau

```js
const list = [5, 6, 7, 8];
const result = list.map(element => element * 2);

list; // -> [5, 6, 7, 8]
result; // -> [10, 12, 14, 16]
```

Cette fonction est souvent utilisée pour retournée des sous-objets:
```js
const list = [{ name: "Vince"}, { name: "Anna"}];
const result = list.map(element => element.name);

result; // -> ["Vince", "Anna"]
```

---

# [].filter()

Permet de retourner un nouveau tableau contenant uniquement les éléments passant le filtre du premier.

Prend comme paramètre une fonction avec 3 paramètres:`

- `element` - L'élément du tableau
- `index` - La position dans le tableau
- `array` - Le tableau

```js
const list = [5, 6, 7, 8];
const result = list.filter(element => element > 6);

list; // -> [5, 6, 7, 8]
result; // -> [7, 8]
```

Cette fonction est souvent utilisée pour retournée des sous-objets:
```js
const list = [{ name: "Vince"}, { name: "Anna"}, { name:"John" }];
const result = list.filter(element => element.name !== "John");

result; // -> ["Vince", "Anna"]
```

---

# [].forEach()

Permet de parcourir un tableau afin d'effectuer des actions

Prend comme paramètre une fonction avec 3 paramètres:`

- `element` - L'élément du tableau
- `index` - La position dans le tableau
- `array` - Le tableau

```js
const list = [{ name: "Vince"}, { name: "Anna"}, { name:"John" }];

list.forEach(element => {
    console.log(element.name);
});
```

...

---

# [].find()

Permet de chercher et de retourner un élément du tableau.
Uniquement le premier élément trouvé sera retourné. Si aucun élément n'est trouvé, renverra `undefined`.

Prend comme paramètre une fonction avec 3 paramètres:`

- `element` - L'élément du tableau
- `index` - La position dans le tableau
- `array` - Le tableau

```js
const list = [{ name: "Vince"}, { name: "Anna"}, { name:"John" }];
const user = list.find(element => element.name === "Anna");

if (user) {
    console.log(user); // -> { name: "Anna"}
}
```

---

# [].findIndex()

Permet de chercher et de retourner la position d'un élément du tableau.
Uniquement la position du premier élément trouvé sera retournée. Si aucun élément n'est trouvé, renverra `-1`.

Prend comme paramètre une fonction avec 3 paramètres:`

- `element` - L'élément du tableau
- `index` - La position dans le tableau
- `array` - Le tableau

```js
const list = [{ name: "Vince"}, { name: "Anna"}, { name:"John" }];
const index = list.find(element => element.name === "Anna");

if (index !== -1) {
    console.log(index, list[index]); // -> 1 { name: "Anna"}
} else {
    console.error("Anna non trouvé");
}
```

---

# [].concat()

Permet de générer un nouveau tableau en en additionnant plusieurs.

Exemple:
```js
const list1 = ["chien", "chat"];
const list2 = ["poussin", "canard", "licorne"];

const list3 = list1.concat(list2);
list3 // <- ["chien", "chat", "poussin", "canard", "licorne"];
```


Il est également possible de l'écrire sous la forme suivante :
```js
const list1 = ["chien", "chat"];
const list2 = ["poussin", "canard", "licorne"];

const list3 = [...list1, ...list2];
list3 // <- ["chien", "chat", "poussin", "canard", "licorne"];
```

---

# [].reduce()

Permet d'accumuler une valeur à partir des résultats de notre function.

Prend comme paramètre une fonction avec 4 paramètres ainsi que la valeur par défaut de l'accumulateur:

- `accumulator` - Valeur de l'accumulator
- `element` - L'élément du tableau
- `index` - La position dans le tableau
- `array` - Le tableau

> **Note:** Il est important de ne pas oublier de retourner la nouvelle valeur de l'accumulateur !

Il peut être utilisé pour calculer des totaux:
```js
const list = [33, 22, 12];
const total = list.reduce((count, element) => count + element, 0);

total; //  <- 67
```

Pour merger des tableaux:
```js
const list = [
    ["chat", "chien"],
    ["cheval", "poussin"]
];

list.reduce((accumulator, element) => {
    return accumulator.concat(element);
}, []);

list; // <- ["chat", "chien", "cheval", "poussin"]
```

Ou bien pour construire des objets dynamiquements:
```js
const list = ["chat", "chien", "cheval"];

list.reduce((accumulator, element) => {
    accumulator[element] = true;
    return accumulator;
}, {});

list; // <- { chat: true, chien: true, cheval: true }
```
