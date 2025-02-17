Setup Web App React
===
## Consegna: 
### Milestone 1:
- Inizializzare un nuovo progetto react aiutandoci con Vite.
- Ripulire il progetto dai file e dal codice di esempio non necessari.
- Installare il necessario: React Router, Axios.

### Milestone 2:
- Creare un layout di base per la nostra applicazione ed impostare le rotte per le diverse pagine.
- Creare 2 pagine:
  - La Home, in cui mostreremo la lista dei film.
  - La pagina di dettaglio di un singolo film.

### Milestone 3:
- Configurare l'app di backend (repository: "webapp-express") a ricevere le chiamate dalla nostra applicazione React, installando e impostando il middleware 'cors'.
- Provare quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei film.

### Milestone 4:
- In ultimo, effettuare una chiamata Ajax dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, compreso di recensioni.

### Bonus:
- Stampare le stelline del voto utilizzando un componente dedicato.
- Gestire l'errore 404 in caso di film non presente reindirizzando alla pagina 404.

<hr>

## Consegna 2:
Continuare a lavorare sul progetto full-stack (repository: webapp-react | webapp-express).

- Aggiungere la chiamata all'API che gestisca l'aggiunta di una nuova recensione e, a lato front-end, nella pagina di dettaglio di un film, inserire un form che invia in POST la nuova recensione.

### Bonus:
- Gestire la validazione del form prima dell'invio con eventuale messaggio di errore.

<hr>

## Consegna 3:
A partire dal lavoro individuale di stamattina inserire un form per l'aggiunta di un nuovo film, facendo in modo che venga tutto salvato nel DataBase.

- Lato backend:
  - Installare multer ('npm i multer').
  - Aggiungere il middleware allegato, prestando attenzione al percorso assegnato.
  - Nel router importarlo 'iniettandolo' nella rotta store dei nuovi film.
  - Nel cotroller gestire i dati in ingresso delle req e il nome del file con 'req.file.filename'.

- Lato frontend:
  - Creare la nuova rotta per il form di creazione.
  - Creare il componente della nuova pagina che contiene il form.
  - Il campo input che si occupa dell'immagine deve essere di tipo 'file' e non necessita di un 'value'.
  - l'handler che gestisce il form data alla chiave 'image' dovrà associare il valore e.target.file[0].
  - Per l’invio del form creare un’istanza FormData (const dataToSend = new FormData();).
  - A questa istanza, ciclando con un for/in il nostro fromData faremo l’append delle chiavi/valore del nostro form.
  - L’headers della chiamata axios deve essere 'Content-Type': 'multipart/form-data'.
