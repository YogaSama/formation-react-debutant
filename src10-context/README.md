# Gérer les effets secondaire

## 🔍 Partie théorique

`useEffect` est un Hook qui permet d’exécuter du **code avec effets secondaires**, c’est-à-dire du code qui ne doit pas être exécuté pendant le rendu.

Exemples d'effets :

- appels API
- timers (`setTimeout`, `setInterval`)
- accès localStorage
- manipulation de l’URL ou du document
- souscriptions (WebSocket, events…)

### Syntaxe

```jsx
useEffect(() => {
  // code de l’effet
}, [dépendances]);
```

- La **fonction** contient l’effet à exécuter.
- Le **tableau de dépendances** contrôle quand l’effet est déclenché.

---

### Les trois comportements possibles

#### 1️. **Sans tableau de dépendances -> effet à chaque rendu**

```jsx
useEffect(() => {
  console.log("Rendu");
});
```

> S’exécute après **chaque** mise à jour du composant.

## 2️. **Avec tableau vide `[]` -> effet à un seul moment**

```jsx
useEffect(() => {
  console.log("Montage seulement");
}, []);
```

> S’exécute **une seule fois**, au montage du composant.
> (Très utilisé pour les appels API.)

## 3️. **Avec dépendances -> effet lorsqu’une valeur change**

```jsx
useEffect(() => {
  console.log("age a changé !");
}, [age]);
```

> Se relance uniquement quand `age` change.

### Le nettoyage (cleanup)

`useEffect` peut retourner une fonction appelée à la **désinstallation** du composant ou avant la ré-exécution de l’effet.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

> Utilisé pour nettoyer les listeners, timers, souscriptions…

### Règles importantes

- `useEffect` est exécuté **après** le rendu, jamais pendant.
- Toujours déclarer les dépendances correctement (sinon effets inattendus).
- Un effet doit toujours être **pur** : tout ce qu’il crée doit pouvoir être nettoyé.

## 🔍 Partie pratique

### Consignes

1. Créer un composant `ViewProvider`.

2. Dans ce nouveau composant, actualiser un état `view` toute les secondes pour le passer de `front` à `back`
