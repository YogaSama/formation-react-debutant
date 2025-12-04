# Gestion des événements et formulaires

## 🔍 Partie théorique

Les événements en React fonctionnent comme en JavaScript, mais avec une syntaxe adaptée au JSX :

- Les noms d’événements sont en **camelCase** (`onClick`, `onChange`, `onSubmit`…)
- On passe **une fonction**, pas une chaîne de caractères

### Exemple

```jsx
function Button() {
  function handleClick() {
    console.log("Bouton cliqué !");
  }

  return <button onClick={handleClick}>Clique</button>;
}
```

> Important :
> **Ne jamais appeler** la fonction directement dans le JSX :

```jsx
<button onClick={handleClick()} /> // ❌
```

### Callbacks dans les props

#### Pourquoi utiliser des callbacks de propriété ?

Cela permet de faire remonter une action ou un événement **du composant enfant vers le parent**.
C’est un des mécanismes principaux pour communiquer dans React.

#### 1. Le parent définit une fonction

```jsx
function Parent() {
  function handleMessage(msg) {
    console.log("Message reçu :", msg);
  }

  return <Child onSend={handleMessage} />;
}
```

#### 2. L’enfant l’appelle via ses props

```jsx
function Child({ onSend }) {
  return (
    <button onClick={() => onSend("Bonjour !")}>Envoyer un message</button>
  );
}
```

#### Pourquoi c’est important ?

- Le parent contrôle les données
- L’enfant déclenche des actions via des callbacks
- Le flux de données **reste unidirectionnel** (parent → enfant)

C’est le cœur du fonctionnement de React.

## 🧠 Partie pratique

### Consignes

1. Ajouter dans le `form` la propriété `onSubmit` et mettre à jour la liste de `pokemons`.

   1. si le pokemon n'existe pas, l'ajouter en tête de liste.
   2. si le pokemon existe déjà, le déplacer en tête de liste.
   3. logger avec `console.log` la nouvelle liste.

2. Ajouter dans la `Card` la propriété `onDelete` et mettre à jour la liste de `pokemons`.

   1. si le pokemon existe, le supprimer.
   2. logger avec `console.log` la nouvelle liste.

3. Constater que la liste est bien mis à jour dans les logs mais pas dans l'UI.
