# Rendu de listes et clés

## 🔍 Partie théorique

### Pourquoi afficher des listes ?

En React, on affiche souvent des listes d’éléments (articles, utilisateurs, messages…).
Pour cela, on utilise généralement la méthode **`.map()`** de JavaScript pour transformer un tableau en **éléments JSX**.

### Afficher une liste avec `.map()`

#### Exemple simple

```jsx
const items = ["Pomme", "Banane", "Poire"];

function Fruits() {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
```

Chaque élément du tableau devient un élément JSX.

### La règle du `key`

React exige un prop spécial appelé **`key`** lorsque vous affichez des listes.

#### Pourquoi ?

- Pour permettre à React d’identifier chaque élément
- Pour optimiser les mises à jour
- Pour éviter des comportements inattendus à l’affichage

#### Exemples corrects :

#### 1. Avec des valeurs uniques

```jsx
{
  items.map((item) => <li key={item}>{item}</li>);
}
```

#### 2. Avec un tableau d’objets

```jsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

{
  users.map((user) => <p key={user.id}>{user.name}</p>);
}
```

### À éviter

Utiliser l’index du tableau en `key` **sauf en dernier recours**, car cela casse les optimisations :

```jsx
<li key={index}>…</li> // ❌ à éviter
```

## 🧠 Partie pratique

### Consignes

1. Créer un tableau de `pokemons` avec au moins 5 pokemons.

2. Faire le rendu du tableau dans le JSX.
