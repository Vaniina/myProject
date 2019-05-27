# Qu'est-ce que l'architecture Rest (au sein d'une API) ?

**REST** est l'abréviation de *REpresentational State Transfer*. **REST** est une architecture basée sur les standards du web et utilise le protocole **HTTP**. Il tourne autour de la ressource où chaque composant est une ressource, et une ressource est accessible par une interface commune utilisant les méthodes standard **HTTP**. **REST** a été introduit pour la première fois par Roy Fielding en 2000.

Un serveur **REST** fournit simplement l'accès aux ressources et le client **REST** accède et modifie les ressources en utilisant le protocole **HTTP**. **REST** utilise différentes représentations pour représenter une ressource comme le texte, **JSON**, **XML** mais **JSON** est le plus populaire.

##  Les méthodes HTTP

Les quatres méthodes **HTTP** suivantes sont couramment utilisées dans l'architecture basée sur **REST** :

`GET` - Ceci est utilisé pour fournir un accès en lecture seule à une ressource, signifie "donne-moi".

`POST` - Ceci est utilisé pour mettre à jour une ressource existante ou créer une nouvelle ressource.

`PUT`/`PATCH` - Ceci est utilisé pour créer une nouvelle ressource.

`DELETE` - Ceci est utilisé pour supprimer une ressource.

Voici quelques exemples :

```
app.get('/list', (req, res) => {
    res.send({
        status: "success",
        data: list
    });
});

app.post('/list', (req, res) => {
    const newHostel = req.body;

    newHostel.id = 'test';
    newHostel.roomNumbers = 0;
    newHostel.rooms = [];
    list.push(newHostel);

    res.send({
        status: "success",
        data: list
    });
});
```

### Les services Web RESTful

Un service Web est un ensemble de protocoles et de normes ouverts utilisés pour l'échange de données entre applications ou systèmes. Les applications logiciels écrites dans divers langages de programmation, et fonctionnant sur diverses plates-formes peuvent utiliser les services Web pour échanger des données sur des réseaux informatiques comme Internet d'une manière similaire à la communication entre processus sur un seul ordinateur.



---







