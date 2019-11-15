# Qu'est-ce que Angular ?

Angular est une plateforme de développement qui permet de créer des applications web dynamiques et immersives.
C'est est un framework **MVC / MVVM** (Modèle-Vue-Contrôleur / Modèle-Vue-Vue-Modèle) côté client, développé en JavaScript, ce qui est obligatoire pour créer une application moderne à page unique (*single page application* ou même un site internet).

## Les fondamentaux

Les applications Angular sont modulaires, et Angular possède son propre système de modularité appelé `NgModules`. 

Les `NgModules` sont des conteneurs pour un bloc de code cohésif dédié, à un domaine d'applications, un flux de travail ou un ensemble de capacités étroitement liées. Ils peuvent contenir, des `components`, des `services providers` et d'autres fichiers de code dont la portée est définie par le module `NgModule`. 

Ils peuvent importer des fonctionnalités qui sont exportées à partir d'autres `NgModules`, et exporter des fonctionnalités sélectionées pour être utilisées par d'autres `NgModules`. 

Chaque application Angular possède au moins une classe `NgModule`, le `root module`, qui est conventionnelement appelé `AppModule` et réside dans un fichier nommé **app.module.ts**.

La plupart des applications ont beaucoup plus de modules de fonctioinnalités. Le `root NgModule` d'une application est ainsi nommé, parce qu'il peut inclure des `NgModules` enfants dans une hiérarchie en profondeur.

---

### Les métadonnées de NgModule

Un `NgModule` est défini par une classe décorée avec `@NgModule()`. Le décorateur `@NgModule()` est une fonction qui prend un seul objet de métadonnées, dont les propriétés décrivent le module. Les propriétés les plus importantes sont les suivantes :

- `declarations` : les `components`, `directives`, et les `pipes` (tuyaux) appartiennent à ce NgModule.

- `exports` : Le sous-ensemble de déclarations qui doivent être visibles et utilisables dans les modèles de composants des autres `NgModules`.

- `imports` : Autres modules dont les classes exportées sont nécessaires aux modèles de composants déclarés dans ce `NgModule`.

- `providers` : Créateurs de services, ce `NgModule` contribue à la collection globale de services ; ils deviennent accessibles dans toutes les parties de l'application.

- `bootstrap` : La vue principale de l'application, appelé le `root component`, qui héberge toutes les autres vues de l'application. Seul le `root NgModule` doit définir la propriété `bootstrap`.

Quelques exemples :
```
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```
---

### Angular Routing

- Le *routeur* permet de naviguer d'une vue à l'autre, au fur et à mesure que les utilisateurs éxécutent des tâches (entrer une URL et le navigateur navigue vers une page, cliquer sur les liens de la page et le navigateur navigue vers une nouvelle page, cliquer sur les boutons Précédent et Suivant...).

- Une route associe un ou plusieurs chemins URL (paths) à un component.

- Définir un lien en utilisant la directive `RouterLink`. Le routerlink définit comment l'utilisateur navigue de manière déclarative vers la route (ou l'URL) dans le template (modèle) du component.

- Le component *Détails* du produit gère l'affichage de chaque produits. Le routeur Angular affiche les components en fonction de l'URL du navigateur et des routes définies. Il faut utiliser le router Angular pour combiner les données des produits et les informations de route pour afficher les détails spécifiques à chaque produit.

- L'`ActivatedRoute` est spécifique à chaque component routé chargé par le routeur Angular. Il contient des informations sur l'itinéraire (route), ses paramètres et des données supplémentaires associées à la route.

- Dans la méthode `ngOnInit()`, il faut s'abonner à route params et récupérer le produit en fonction du `productId` (`this.route.params`).

- Le `productId` affiche les détails de chaque produit unique.

---

### Angular Router

- `Router.events` fournit des événements sous forme d'observables. On peut utiliser l'opérateur `filter()` de RxJS pour rechercher de événements intéressants et s'y abonner.

---

### Angular Gestion des données

- Les **services** font partie intégrante des applications Angular. Dans Angular, un service est une instance d'une classe qui peut-être mise à disposition de n'importe quelle partie de l'app en utilisant le système d'injection de dépendance d'Angular.

- Les **services** sont l'endroit où l'on partage des données entre les parties de l'app. Pour la boutique en ligne par ex, le service de panier est l'endroit où l'on stocke les données et les méthodes du panier.

- Les données renvoyées par les serveurs prennent souvent la forme d'un flux. Les flux sont utiles parce qu'ils facilitent la transformation des données retournées et la modification de la façon dont les données sont demandées. Le client HTTP Angular (`HttpClient`) est un moyen intégré de récupérer des données à partir d'API externes et de les fournir à l'app sous forme de flux.

- Avant de pouvoir utiliser le client HTTP d'Angular, il faut configurer l'app pour utiliser `HttpClientModule`. Le module `HttpClientModule` d'Angular, enregistre les fournisseurs nécéssaires pour utiliser une seule instance du service `HttpClient` dans l'app. Le service `HttpClient` est ce que l'on injecte dans les services pour récupérer les données et intéragir avec les API et ressources externes.

- Il faut ajouter HttpClientModule au tableau d'importation du module applicatif `@NgModule`. Ceci permet d'enregistrer les fournisseurs `HttpClient` d'Angular dans le monde entier. 

---

### Angular HTTP

- `HttpClient` renvoie les éléments observables à partir d'appels de méthode HTTP. Par exemple, `httpClient.get('/api')`, renvoie un observable.

---

### Angular formulaires

- Les formulaires dans Angular prennent les capacités standard des formulaires HTML et ajoutent une couche d'orchestration pour aider à créer des contrôles de formulaires personnalisés, et à fournir des expériences de validation exceptionnelles. Angular Reactive Form se compose de deux parties, les objets qui vivent dans le composant pour stocker et gérer le formulaire, et la visualisation du formulaire qui vit dans le modèle.

- Le service `FormBuilder` d'Angular fournit des méthodes pratiques pour générer des contrôles. Comme pour les services qu'on a utilisés, on doit importer et injecter le service avant de pouvoir l'utiliser.

- Le service `FormBuilder` est fourni par le module `ReactiveFormsModule`, qui est déjà défini dans l'`AppModule`.

- Dans le `component.ts`, il faut définir une méthode `onSubmit()` pour traiter le formulaire.

- Utiliser un lien de propriété `formGroup` pour lier le checkoutForm (formulaire de paiement) à la balise `<form>` du modèle.

- Sur la balise `form`, utiliser une liaison d'événement `ngSubmit` pour écouter la soumission du formulaire et appeler la méthode `onSubmit` avec la valeur checkoutForm.

- Utiliser l'attribut `formControlName` pour lier les champs de  nom et d'adresse du formulaire checkoutForm à leurs champs de saisie (input fields).

---

### Angular Formulaires Réactifs

- Les Reactive Forms ont des propriétés qui utilisent des variables observables pour surveiller les valeurs de contrôle de formulaire. Les propriétés de `FormControl`, `valueChanges`, et `statusChanges` contiennent des événements observables qui provoquent des changements. La souscription à une propriété de contrôle de formulaire observable, est un moyen de déclencher la logique de l'app au sein de la classe de composants.

---

### Angular Observables

- Les Observables fournissent un support pour la transmission de messages entre les éditeurs et les abonnés dans l'app.

- Les Observables sont déclaratifs. En d'autres termes, on définie une fonction pour la publication de valeurs, mais celle-ci n'est exécutée que lorsque le consommateur y a souscrit. Le consommateur abonné reçoit ensuite des notifications, jusqu'à ce que la fonction soit terminée ou jusqu'à ce qu'il se désabonne.

- L'API de réception des valeurs est identique, que les valeurs soient fournies de manière synchrone ou asynchrone.

- Pour exécuter l'observable que l'on a crée et commencer à recevoir des notifications, il faut appeler son `subscribe()`, en passant par un observeur.

---

### Angular Modules

- Les `NgModules` Angular diffèrent des modules JS et les complètent. Un `NgModule` peut associer ses composants à du code associé, tel que des services, pour former des unités fonctionnelles.

---

### Angular Pipes

- Un tube prend des données en entrée et les transforme en une sortie souhaitée.

- Angular est livré avec un stock de tubes tels que `DatePipe`, `UpperCasePipe`, `LowerCasePipe`, `CurrencyPipe` et `PercentPipe`.

- Un tube peut accepter un nombre quelconque de paramètres facultatifs pour ajuster sa sortie. Pour ajouter des paramètres à une conduite, il faut suivre le nom de la conduite avec un signe ':', puis la valeur du paramètre (telle que currency : 'EUR'). Si le tube accepte plusieurs paramètres, il faut séparer les valeurs par des deux points (tels que slice : 1:5).

---

### Angular AsyncPipe

- L'AsyncPipe s'abonne à un observable ou à une promesse et renvoie la dernière valeur q'il a émise.

---

### Angular déploiement

- Pour déployer l'app, il faut la compiler (traduire un programme en langage machine), puis héberger le Javascript, le CSS et le HTML sur un serveur Web (logiciel utilisé sur le serveur pour éxécuter les requêtes HTTP).

- L'un des moyens les plus simples d'obtenir un site en direct est de l'héberger en utilisant Firebase.

- Creér un nouveau projet en lui donnant le nom que l'on veut.

- Installer la CLI firebase-tools qui gérera le déploiement en utilisant `npm install-g firebase-tools`.

- Connecter la CLI au compte Firebase et initialiser la connexion au projet en utilisant le login firebase et l'init firebase.

- Suivre les invites pour séléctionner le projet Firebase que l'on crée pour l'hébergement (hosting).

- Déployer l'app avec firebase deploy.

---

### Angular architecture (vue d'ensemble)

- Tout d'abord Angular est écrit en Typescript.

- Les `NgModules` collectent le code associé dans des ensembles fonctionnels. Angular est définie par un ensemble de `NgModules`.

- Une app a toujours au moins un module racine :
> Les composants définissent des vues, qui sont des ensembles d'éléments d'écran parmi lesquels Angular peut choisir et modifier en fonction de la logique et des données du programme.
>
> Les composants utilisent des services, qui fournissent des fonctionnalités spécifiques non directement liées aux vues. Les fournisseurs de services peuvent être injéctés dans des composants comme les dépendances, ce qui rend le code réutilisable et efficace.

- Les composants et les services sont simplement des classes, avec des décorateurs qui marquent leur type et fournissent des métadonnées qui indiquent à Angular comment les utiliser :
> Les métadonnées d'une classe de composant l'associent à un modèle qui définit une vue. Un modèle combine du HTML avec des directives Angular et un balisage de liaison qui permet à Angular de modifier le code HTML avant de le restituer pour affichage.
>
>Les métadonnées d'une classe de service fournissent les infos dont Angular a besoin pour les rendre disponibles aux composants via l'injection de dépendance.

---

### Angular première application (explication)

- Pour afficher les noms des produits, il faut utiliser l'interpolation `{{...}}`. L'interpolation rend la valeur d'une propriété sous forme de texte.

- La propriété `binding [...]`, permet d'utiliser la valeur de la propriété dans une "template" expression.

- `*ngFor` comme son nom l'indique, fait une boucle sur chaque produits de la liste. Elle est généralement à l'intérieur d'une `<div>`.

- `*ngIf` comme son nom l'indique, est une condition définie sur chaque produits de la liste (on choisit où l'on souhaite mettre cette dernière, car chaque produit n'est pas forcément compris). Elle est généralement à l'intérieur d'un `<p>`.

- Lier un bouton par exemple à un événement `share()` qui est défini dans le `component.ts`, cela se fait en utilisant les '()' autour de l'événement.

- Un component est composé de trois choses : 
> Une classe de component, qui gère les données et les fonctionnalités.
>
> Un modèle HTML, qui détermine ce qui est présenté à l'utilisateur.
>
> Des styles spécifiques aux components qui définissent l'apparence (CSS).

- `app-root` est le premier component à charger et le parent de tous les autres components. C'est comme la page de base.

- Le décorateur `@Component`, indique que la classe suivante est un component. Il fournit des métadonnées sur le component, y compris ses templates, ses styles et un sélécteur. Le sélécteur sert à identifier le component. Par convention, les sélécteurs de components Angular commencent par le préfixe `app-`, suivi du nom du component.

- A l'intérieur d'un `import` ou `export` il y a des classes.

- A l'intérieur d'un `Input` ou `Output` il y a des décorateurs.


 



























