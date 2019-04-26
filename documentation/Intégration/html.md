# HTML

> Notes concernant les balises html

---

### Ne pas utiliser de `<div>` pour insérer du texte

A chaque fois que l'on souhaite insérer du texte dans du html, il est conseillé d'utiliser les balises `<section>`, `<article>` ou `<p>`.

---

### Un seul `<h1>` par page

Il est recommandé d'utiliser un seul titre par page, pour améliorer le référencement (que la page soit mieux visible pour les moteurs de recherche : *Google*, *Bing*, ...).

---

### Lier les élements `<h2>` et `<h3>` à des paragraphes

```html
<h2>Salut les amis</h2>
<p>Comment allez-vous ?</p>
``` 

---

### Utiliser ul/li uniquement pour créer des listes

---

### Balise `<a/>` et attributs

Mettre constamment un attribut title pour donner des informations complémentaires aux non-voyants :

```html
<a href="http://google.com" title="lien vers google">Google</a>
```

Pour ouvrir le lien dans une nouvelle page, nous pouvons utiliser l'attribut `target` avec pour valeur `"_blank"`.

```html
<a href="http://google.com" target="_blank" title="lien vers google">Google</a>
```

> Plus d'infos sur [W3S](https://www.w3schools.com/tags/att_a_target.asp).

---


> Pour plus d'infos sur le html, aller sur le site [alsacréation](https://www.alsacreations.com/).