# Git

## Qu'est-ce que Git ?

C'est un protocole (échange d'informations) qui permet de partager et de mettre à jour collaborativement ses fichiers (code), ainsi que tout l'historique de modifications du projet. C'est comme http; qui est le protocole le plus utilisé.

---

## Comment ça marche ?

J'envoie mon code (**push**) dans le repository sur le cloud (*Github, Gitlab, Bitbucket...*).
Je peux récupérer (**pull**) les modifications distantes et envoyer (**push**) par la suite des mises à jour.

Il est possible, d'annuler les modifications d'un commit en utilisant la commande **revert**.

On peut effectuer plusieurs **commit** avant de **pusher**, cela permet de faire des modifications en petites quantités localement.
Il faut commenter toujours son commit, afin d'expliquer les changements effectués.

--- 

## En cas de conflits

Lors de **merge**, il est possible que des conflits apparaissent entre différents commits, notamment quand plusieurs modifications touchent les mêmes lignes de code.
Afin de résoudre les problèmes, il est nécessaire de lancer des **réconciliations**, sous forme d'un nouveau **commit** et de renvoyer les modifications sur le cloud si nécessaire.