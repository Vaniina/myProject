# Les classes

Semblable aux expressions de fonctions, les expressions de classes peuvent être nommées ou anonymes. Si l'expression est nommée, le nom de la classe ne sera local que pour le corps de la fonction. Cette syntaxe n'est qu'un « sucre syntaxique » pour faciliter l'écriture du code, elle ne modifie en aucun cas le modèle d'héritage utilisé par JavaScript.

> Note : Toutes les classes doivent commencer par une majuscule. Une fonction à l'intérieur d'une classe s'appelle une **méthode**. Il faut également coder les classes dans l'ordre décroissant des éléments (par exemple : Room, Hostel, City).

## Description

En réalité, les classes sont juste des fonctions spéciales. Ainsi, les classes sont définies de la même façon que les fonctions : par déclaration, ou par expression.

Pour utiliser une déclaration de classe simple, on utilisera le mot-clé `class`, suivi par le nom de la classe que l'on déclare (ici "User") :

```js
class User {
    constructor(gender, age, name, points) {
        this.gender = gender;
        this.age = age;
        this.name = name;
        this.points = points;
    }
}
const user1 = new User ('F', 25, Dupont, 12);
```
### Le corps d'une classe

Le corps d'une classe est la partie contenue entre les accolades. C'est dans cette partie que l'on définit les propriétés d'une classe son constructeur.

La méthode `constructor` est une méthode spéciale qui permet de créer et d'initialiser les objet créés avec une classe. Il ne peut y avoir qu'une seule méthode avec le nom "constructor" pour une classe donnée.

#### Paramètres du reste (Rest parameters)

Cette syntaxe permet de représenter un nombre indéfini d'arguments sous forme d'un tableau.

```js
constructor(gender, age, ...others)
```


---



 