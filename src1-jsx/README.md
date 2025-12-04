# Premiers pas avec le JSX - variables

## 🔍 Partie théorique

Dans JSX, on peut **insérer du JavaScript** grâce aux **accolades `{}`**.
On peut y mettre des **variables** ou des **expressions simples**.

```jsx
const name = "Alice";
const element = <h1>Bonjour {name}</h1>;
```

### Règles importantes

#### 1. **Les accolades permettent d’insérer du JS**

Les accolades ne contiennent **pas du texte**, mais du **JavaScript**.

```jsx
<p>{username}</p>
```

#### 2. **On ne met que des _expressions_, pas des instructions**

❌ Interdit : une instruction comme `if (...) {}`  
✔️ Autorisé : une expression (ex : un ternaire)

```jsx
<p>{isLogged ? "Connecté" : "Déconnecté"}</p>
```

#### 3. **Les valeurs affichables**

On peut afficher dans JSX :

- des chaînes (`string`)
- des nombres (`number`)
- des booléens (souvent pour des conditions)
- des opérations simples (`1 + 2`, `price * 2`)
- des objets transformés en chaînes (ex. `JSON.stringify(obj)`)

Mais **pas** directement un objet brut :

```jsx
// ❌ Provoque une erreur
<p>{user}</p>

// ✔️ Correct
<p>{user.name}</p>
```

#### 4. **Variables dans les attributs**

Les accolades fonctionnent aussi pour les attributs JSX.

```jsx
const url = "/avatar.png";
<img src={url} alt="avatar" />;
```

## 🧠 Partie pratique

### Consignes

1. Créer une fonction `createMockPokemon` dans un fichier `src/utils.js` comme suit :

```js
/**
 * @typedef MockPokemon
 * @property {number} id
 * @property {string} name
 * @property {{ front_default: string }} sprites
 */

/**
 * @param {number} id numéro supérieur à zéro.
 * @returns {MockPokemon}
 */
export function createMockPokemon(id) {
  return {
    id: id,
    name: "mock-pokemon",
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    },
  };
}
```

2. Créer un `pokemon` avec la méthode `createMockPokemon` Remplacer les informations du bloc suivant par des variables :

```jsx
<div>
  <img
    alt="pokemon"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  />
  <div>#1 mock-pokemon</div>
  <button>Delete</button>
</div>
```

- `alt` doit prendre le `name`.
- `src` prends l'URL dans `sprites.front_default`.
- `#1 mock-pokemon` doit être sous la forme `#id name`.
