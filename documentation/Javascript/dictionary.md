# Dictionnaires Map / Set

## Map

L'objet **Map** représente un dictionnaire, autrement dit une carte de clés/valeurs. N'importe quelle valeur valable en JavaScript (que ce soit les objets ou les valeurs de types primitifs) peut être utilisée comme clé ou comme valeur.

L'ordre d'insertion des clés est mémorisé dans l'objet et les boucles sur les **Map** parcourent les clés dans cet ordre.

### Description 

Un objet **Map** permet de retrouver ses éléments dans leur ordre d'insertion. Par exemple, une boucle **for...of** renverra un tableau de **[clé, valeur]** pour chaque itération.

On notera qu'un objet **Map** contenant des objets ne sera parcouru que dans l'ordre d'insertion de ces objets.

#### Egalité des clés

L'égalité des clés est testée avec l'algorithme basé sur **l'égalité de valeurs** :

- **NaN** est considéré égal à NaN (bien que, pour l'égalité stricte **NaN !== NaN**)
- les autres valeurs sont considérées égales au sens de l'égalité stricte (l'opérateur  **===**).

```js
const maMap = new Map();
maMap.set(NaN, "not a number");
```


---

## Set

L'objet **Set** permet de stocker des valeurs *uniques*, de n'importe quel type, que ce soit des valeurs d'un type primitif ou des objets.

### Description

Les objets **Set** sont des ensembles de valeurs. Il est possible d'itérer sur les éléments contenus dans l'objet **Set** dans leur ordre d'insertion. **Une valeur donnée ne peut apparaître qu'une seule fois par Set.**

#### Egalité des clés 

Chaque valeur d'un **Set** doit être unique, il faut donc tester l'égalité des valeurs contenues. Cette égalité n'est pas la même que celle de l'opérateur ===. Notamment, pour les objets **Set**, **+0** (qui, selon l'égalité stricte, est égal à **-0**) et **-0** sont des valeurs différentes.

```js
var monSet = new Set();

monSet.add(1);         // { 1 }
monSet.add(5);         // { 1, 5 }
monSet.add("du texte");// { 1, 5, "du texte" }

monSet.has(1); // true
monSet.has(3); // false, 3 n'a pas été ajouté à l'ensemble
monSet.has(5);              // true
```

---

