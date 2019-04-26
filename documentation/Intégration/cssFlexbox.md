# CSSFLEXBOX

> Note concernant les balises css flexbox

---
## Properties for the Parent (**flex container**)

### Display

Ceci définit un conteneur flex ; en ligne ou en bloc selon la valeur donnée. Il permet un contexte flexible pour tous ses enfants directs.

```css
.container {
  display: flex; /* or inline-flex */
}
```

---

### Flex-direction

Ceci établit l'axe principal, définissant ainsi la direction dans laquelle les articles flex sont placés dans le conteneur flex. 

Flexbox est (à part l'emballage optionnel) un concept de mise en page à sens unique. Considérant que les articles flexibles comme étant principalement disposés en rangées horizontales ou en colonnes verticales.

```
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

**row** (par défaut) : de gauche à droite en *ltr* ; de droite à gauche en *rtl*.

**row-reverse** : de droite à gauche dans *ltr* ; de gauche à droite dans *rtl*.

**column** : comme la ligne mais de haut en bas.

**column-reverse** : identique à l'inversion de colonne, mais du bas vers le haut.

---

### Flex-wrap

Par défaut, les éléments de flex vont tous essayer de tenir sur une seule ligne. On peut changer cela et permettre aux éléments de s'envelopper comme nécessaire avec cette propriété.

```
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

**nowrap** (par défaut) : tous les éléments flex seront sur une ligne.

**wrap** : les articles flexibles s'envelopperont sur plusieurs lignes, de haut en bas.

**wrap-reverse** : les articles flexibles s'enroulent sur plusieurs lignes du bas vers le haut.

---

### Flex-flow

Il s'agit des propriétés de **flex-direction** et de **flex-wrap**, qui définissent ensemble l'axe principal et l'axe transversal du conteneur flex. La valeur par défaut est **row nowrap**.

```
flex-flow: <‘flex-direction’> || <‘flex-wrap’>
```

---

### Justify-content

Ceci définit l'alignement le long de l'axe principal. Il permet de répartir l'espace libre supplémentaire restant lorsque tous les articles flexibles d'une ligne sont inflexibles ou flexibles, mais ont atteint leur taille maximale. Il exerce également un certain contrôle sur l'alignement des éléments lorsqu'ils débordent de la ligne.

```
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

**flex-start** (par défaut) : les articles sont emballés vers la ligne de départ.

**flex-end** : les articles sont emballés vers la fin de la ligne.

**center** : les éléments sont centrés le long de la ligne.

**space-between** : les éléments sont répartis uniformément dans la ligne ; le premier élément est sur la ligne de départ, le dernier élément sur la ligne de fin.

**space-around** : les éléments sont répartis uniformément sur la ligne avec un espace égal autour d'eux. Il faut noter que visuellement les espaces ne sont pas égaux, puisque tous les éléments ont un espace égal des deux côtés. Le premier élément aura une unité d'espace contre le bord du contenant, mais deux unités d'espace entre l'élément suivant parce que l'élément suivant a son propre espacement qui s'applique.

**space-evenly** : les éléments sont répartis de façon à ce que l'espacement entre deux éléments (et l'espace aux bords) soit égal.

---

### Align-items

Définit le comportement par défaut de la disposition des éléments de flex le long de l'axe transversal sur la ligne courante. Penser à la version **justify-content** pour l'axe transversal (perpendiculaire à l'axe principal).

```
.container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

**stretch** (par défaut) : étirement pour remplir le conteneur (tout en respectant la largeur min/max).

**flex-start** : le bord de marge transversal des articles est placé sur la ligne de départ transversal.

**flex-end** : le bord de marge transversal des articles est placé sur la ligne transversale.

**center** : les éléments sont centrés dans l'axe transversal.

**baseline** : les éléments sont alignés tels que leurs lignes de base sont alignées.

---

### Align-content

Ceci aligne les lignes d'un conteneur flexible à l'intérieur lorsqu'il y a de l'espace supplémentaire dans l'axe transversal, de la même manière que le **justify-content** aligne les éléments individuels à l'intérieur de l'axe principal.

> **Note** : cette propriété n'a aucun effet lorsqu'il n'y a qu'une seule ligne d'éléments flex.

```
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    }
```

**flex-start** : lignes emballées jusqu'au début du conteneur.

**flex-end** : lignes emballées jusqu'au bout du conteneur.

**center** : lignes emballées au centre du conteneur.

**space-between** : lignes uniformément réparties ; la première ligne est au début du conteneur tandis que la dernière est à la fin.

**space-around** : lignes uniformément réparties avec un espace égal autour de chaque ligne.

**stretch** (par défaut) : les lignes s'étirent pour occuper l'espace restant.

---
## Properties for the Children (flex items)

### Order

Par défaut, les articles flexibles sont présentés dans l'ordre source. Toutefois, la propriété **order**, contrôle l'ordre dans lequel ils apparaissent dans le conteneur flex.

```
.item {
  order: <integer>; /* default is 0 */
}
```

---

### Flex-grow

Ceci définit la capacité d'un élément flexible à se développer si nécessaire. Il accepte une valeur sans unité qui sert de proportion. Il détermine la quantité d'espace disponible à l'intérieur du conteneur flexible que l'article doit occuper.

Si tous les articles ont une **flex-grow** réglée à 1, l'espace restant dans le contenant sera distribué également à tous les enfants. Si l'un des enfants a une valeur de 2, l'espace restant prendra deux fois plus de place que les autres (ou du moins essaiera de le faire).

```
.item {
  flex-grow: <number>; /* default 0 */
}
```

Les nombres négatifs sont invalides.

---

### Flex-shrink

Ceci définit la capacité d'un article flexible à se rétracter si nécessaire.

```
.item {
  flex-shrink: <number>; /* default 1 */
}
```

Les nombres négatifs sont invalides.

---

### Flex-basis

Définit la taille par défaut d'un élément avant que l'espace restant ne soit distribué. Il peut s'agir d'une longueur (par ex: 20 %, 5rem, ...) ou d'un mot-clé. Le mot-clé **auto** signifie "regarder ma propriété de largeur ou de hauteur" (ce qui a été fait temporairement par le mot-clé **main-size** jusqu'à ce qu'il soit déprécié). Le mot-clé **content** signifie "taille en fonction du contenu de l'élément", ce mot-clé n'est pas encore bien pris en charge, il est donc difficile de tester et plus difficile de savoir ce que ses frères **max-content**, **min-content**, et **fit-content** font.

```
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

S'il est réglé sur **0**, l'espace supplémentaire autour du contenu n'est pas pris en compte. S'il est réglé sur **auto**, l'espace supplémentaire est réparti en fonction de sa valeur **flex-grow**.

---

### Flex

C'est l'abréviation de **flex-grow**, **flex-shrink** et **flex-basis** combinés. Les deuxième et troisième paramètres (**flex-shrink** et **flex-basis**) sont optionnels. La valeur par défaut est **0 1 auto**.

```
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

**Il est recommandé d'utiliser cette propriété abrégée plutôt que de définir les propriétés individuelles.** La *short hand* règle intelligemment les autres valeurs.

---

### Align-self

Ceci permet de remplacer l'alignement par défaut (ou celui spécifié par **align-items**) pour les éléments flex individuels.

```
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

> Noter que le **float**, le **clear** et le **vertical-align** n'ont aucun effet sur un article flexible.

















