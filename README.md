# DECOUVERTE DISCORD.JS

![DJS](https://uneviededev.fr/wp-content/uploads/2019/11/Capture-d%E2%80%99%C3%A9cran-de-2019-11-04-11-53-20.png)

## Qu'est-ce que discord.js?

Discord.js est un module Node.js permettant à son utilisateur d'intéragir avec l'API Discord *(= l'interface discord)*. Pour l'anecdote, notez qu'il existe également une librairie Discord.py, compatible avec Python! 

En bref, cette librairie va nous permettre de cibler des éléments, d'en exploiter les valeurs, d'afficher des choses, etc... Un peu comme nous le ferions avec du front vanilla, en récupérant par exemple un ```event.target``` ou en faisant des ```querySelector```.

[Plus d'infos sur discord.py - point culture](https://pypi.org/project/discord.py/)

## Chouette! Comment je l'utilise?

... tout simplement en installant le package discord.js:

```bash
npm install discord.js
```

 [Plus d'infos sur Discord.js](https://discord.js.org/#/)

 [La doc de Discord.js](https://discordjs.guide/)

## Mais ce n'est pas tout!

Installer un package ne suffira pas à créer et mettre en production votre bot. Quelques étapes s'imposent:

- Enregistrer son application auprès de discord
- *Encapsuler* son application dans un utilisateur
- Inviter le bot sur le serveur discord de son choix

>*"Ok, cool. Mais pourquoi tu parles chinois?"*

Ne stressez pas, y'a rien de compliqué.

### Etape 1/3 - Enregistrer son application auprès de discord

Rendez-vous sur le [Discord developper portal](https://discord.com/developers/applications), identifiez-vous avec votre login/mdp habituel.

Vous tomberez sur une page similaire:

![devappscreen](https://i.ibb.co/QD2mz2m/dbot.png)

Cliquez sur le bouton **New Application** en haut à droite.

Renseignez ensuite un nom pour votre application!

<div align="center"> <img src="https://i.ibb.co/vzrY498/dbot2.png" alt="dbotname"></div>

### Etape 2/3 - *Encapsuler* son application dans un utilisateur

Bien joué, vous venez de créer votre application. Mais ce n'est pas suffisant... **pourquoi?**

Il est important ici de ne pas confondre serveur Discord **ET** serveur Discord! *(ok, ça parait tordu dit comme ça)*

En créant un serveur, via la plateforme Discord, vous, simple utilisateur, ne devenez propriétaire de __rien__. Discord met simplement à votre disposition un serveur, ou plutôt une plateforme, pour communiquer avec les personnes de votre choix.

Par analogie, imaginez que votre *serveur/plateforme* ne soit qu'une simple et misérable table parmis des millions d'autres dans une bdd postgresql... ouais, ça calme dit comme ça.

En aucun cas vous ne pourrez accèder aux __vrais__ serveurs de l'entreprise et éxecuter directement votre script/bot. Imaginez le bordel sinon! C'est d'ailleurs bien pour ça que discord met à notre disposition une formidable api, nous permettant d'importer sur un serveur notre propre script... mais tournant depuis un serveur tier *(= autre que celui de l'entreprise)*. Alors ok, ça paraitra évident pour beaucoup, mais une piqûre de rappel ne fait jamais de mal.

Voilà donc pourquoi il nous faut *encapsuler* notre application dans un user. 

Notre bot sera donc, à l'instar des autres utilisateurs, de vous, de moi, un utilisateur comme les autres. Mais pas n'importe quel utilisateur: un utilisateur en qui vous avez confiance *(bah après tout, vous l'avez conçu...)* et qui pourra donc faire ce qu'il veut, selon les permissions que vous lui accordez.

Pour ce, rendez-vous dans l'onglet bot et cliquez sur le bouton **Add Bot**.

![addABot](https://i.ibb.co/64Cxpjz/dbot3.png)

A partir de là, votre bot sera officiellement un utilisateur. Lui cependant n'aura pas de login/mdp comme vous mais un **token**. 
*Retenez bien cette histoire de token, ça aura son importance plus tard.*

![bottoken](https://i.ibb.co/DCnrGs9/dbot4.png)

## Etape 3/3 - Inviter le bot sur le serveur discord de son choix

Il nous faut désormais inviter notre bot. Pour ce, faites-vous un serveur discord, nommez-le comme il vous plaira *(de toute façon vous serez le seul à l'utiliser... qq)*.

Utilisez cette url:
```
https://discord.com/oauth2/authorize?client_id=[VOTRE CLIENT ID ICI]&scope=bot
```

exemple: https://discord.com/oauth2/authorize?client_id=123456789&scope=bot

> Pour rappel, vous trouverez votre client ID dans l'onglet **General Information** de votre app *(dans le developper portal discord)*

<p align="center">Une fois l'adresse correctement entrée, vous tomberez sur ceci:</p>

<div align="center"><img src="https://i.ibb.co/qgLQtg3/dbotco.png" alt="addbottoserver"></div>

<p align="center">Choisissez dans le menu déroulant le serveur que vous venez de créer et c'est parti! Si vous avez tout bien fait, vous devriez désormais voir votre bot apparaître!</p>

<div align="center"><img src="https://i.ibb.co/phRrxwN/dbotlist.png" alt="tadaaaa"></div>

<p align="center">Remarquez que celui-ci est hors-ligne, ce qui est parfaitement normal, puis nous n'avons pas encore créé notre bot. Ce n'est qu'une coquille vide, pour l'instant du moins.</p>

## Fiou, et maintenant?

C'est terminé! 

Créez-vous un répertoire et placez ceci dans un index:

```js
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('placez ici le token de votre bot!');
```

... et n'oubliez pas de mettre le token de votre! Oui, oui, celui dont nous parlions dans l'étape 2!

## Let the fun begin!

Placez ceci dans votre code et vous pourrez discuter avec votre bot. Bien pratique si vous n'avez pas d'amis.
```js
client.on('message', message => {
	if (message.content === '!bonjour') {
        message.channel.send('salut! tu vas bien?');
    }
});
```
<div align="center"><img src="https://i.ibb.co/5xLQqr0/dbotanswer.png" alt="tadaaaa"></div>
