# Requêtes asynchrones

## 🔍 Partie théorique

Les applications React doivent souvent récupérer des données depuis un serveur (backend, API REST, base distante…).
Ces opérations sont **asynchrones** : elles prennent du temps et ne bloquent pas l’interface.

Exemples d’outils : `fetch`, `axios`, `async/await`.

### Quand faire un appel API dans un composant ?

Les appels API ne doivent **pas** être déclenchés directement pendant le rendu du composant.
Car :

- Le rendu doit rester **pur** (sans effet secondaire)
- Un appel API dans le rendu provoquerait des boucles infinies

> On utilise un **Hook d’effet** : `useEffect`.

### Points importants

### 1. **Rendu pur**

Le composant ne doit jamais lancer un appel API directement dans son rendu.

### 2. **Effets contrôlés**

Mettre les appels dans `useEffect` évite les boucles de rendu.

### 3. **Asynchronicité**

Le code continue pendant que l’appel API s’exécute.

### 4. **États associés**

On gère souvent :

- un état de **données** (`users`)
- un état de **chargement** (`isLoading`)
- un état **d’erreur** (`error`)

## 🧠 Partie pratique

### Consignes

1. Installer la dépendance :

```bash
npm i axios axios-cache-interceptor pokenode-ts
```

2. Instancier un client Pokemon.

```js
const client = new PokemonClient({
  cacheOptions: { cachePredicate: () => false },
});
```

3. Dans le submit du formulaire, appeler `client.getPokemonById(pokemonId)` pour récupérer le pokemon en asynchrone. Mettre à jour la liste avec le résultat.

4. Ajouter un état `loading` pour désactiver l'input lors du chargement des données.

5. Ajouter un état `message` pour afficher les succès / erreurs.
