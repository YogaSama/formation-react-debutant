# États réactifs

## 🔍 Partie théorique

Les **Hooks** sont des fonctions spéciales fournies par React qui permettent d’ajouter des fonctionnalités aux composants fonctionnels.
Ils permettent notamment de gérer l’état, d’exécuter du code à certains moments, etc.

Le plus utilisé : **`useState`**.

### À quoi sert `useState` ?

`useState` permet à un composant de **mémoriser une valeur dans le temps** et de **mettre à jour l’interface** quand cette valeur change.

### Syntaxe

```jsx
const [state, setState] = useState(valeurInitiale);
```

- **state** → la valeur actuelle (lecture)
- **setState** → une fonction pour la mettre à jour (écriture)
- **valeurInitiale** → la valeur utilisée au premier rendu

---

### Exemple simple

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

Quand on appelle `setCount`, React :

1. met à jour la valeur de `count`
2. **re-rend** le composant avec la nouvelle valeur

### Règles importantes

#### 1. **Toujours appeler un Hook en haut du composant**

❌ Pas dans une boucle
❌ Pas dans une condition
❌ Pas dans une fonction interne

✔️ Toujours au niveau supérieur du composant, pour que React garde l’ordre des Hooks.

#### 2. **Les mises à jour sont asynchrones**

Juste après un `setState`, la valeur n’est pas mise à jour immédiatement.

### 3. **Mettre à jour l’état basé sur l’état précédent**

On peut passer une fonction à `setState` :

```jsx
setCount((prev) => prev + 1);
```

Utile pour éviter les valeurs obsolètes.

## 🧠 Partie pratique

### Consignes

1. Remplacez la variable `pokemons` par un hook `useState`.
2. En réponses aux évènements, mettre à jour l'état des `pokemons`.
