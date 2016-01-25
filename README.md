mettre infos pour paramétrage

# Thème Alpaga

## Fonctionnalités

* Page d'accueil
* menutop
* indexedsearch
* msfootermenu
* simpleweather
* Mega menu

Page d'accueil
### Agenda et actualités
Arborescence du site :
```
ROOT
    Agenda Actualites............[HM]
        Toutes les actualités....[M]
        Détail actualité.........[HM]
        Agenda...................[M]
            Aujourd'hui..........[M]
            Cette semaine........[M]
            Ce mois-ci...........[M]
            Cette année..........[M]
            Évènement............[HM]
```

.htaccess
```
#############################################
####   REDIRECTION AGENDA ET ACTUALITÉS   ###
#############################################
RewriteCond %{HTTP_HOST} ^((www|prod|preprod)\.(.*)\.fr)$
RewriteCond %{REQUEST_URI} ^/agenda-actualites/agenda/cal/event/tx_cal_phpicalendar/
RewriteRule ^(agenda-actualites/agenda/)(.*)$ %1/agenda-actualites/agenda/evenement/$2 [R,L]
RewriteCond %{HTTP_HOST} ^((www|prod|preprod)\.(.*)\.fr)$
RewriteCond %{REQUEST_URI} ^/cal/event/tx_cal_phpicalendar/
RewriteRule ^(.*)$ %1/agenda-actualites/agenda/evenement/$1 [R,L]
```

## Paramétrages
### Spécifiques

#### menutop

### Extensions

#### indexedsearch
version :
lien typo3.org (documentation)
#### msfootermenu
#### cal
#### news


