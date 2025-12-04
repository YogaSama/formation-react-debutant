# Premiers pas avec le JSX - syntaxe

## 🔍 Partie théorique

JSX (**JavaScript XML**) permet d’écrire des éléments React avec une syntaxe proche du HTML.
Il sera transformé en JavaScript standard.

```jsx
const element = <h1>Hello React</h1>;
```

### Règles de base de la syntaxe

#### 1. **Une seule racine**

Un composant doit retourner **un seul élément parent**.

```jsx
return (
  <>
    <h1>Titre</h1>
    <p>Texte</p>
  </>
);
```

#### 2. **Balises correctement fermées**

Toutes les balises doivent être fermées, y compris celles qui ne le sont pas en HTML.

```jsx
<img src="image.png" />
<input type="text" />
```

#### 3. **Attributs en camelCase**

Certains attributs changent de nom pour s’adapter à JavaScript.

| HTML    | JSX       |
| ------- | --------- |
| class   | className |
| for     | htmlFor   |
| onclick | onClick   |

```jsx
<button className="btn" onClick={handleClick}>
  Bouton
</button>
```

#### 4. **JSX n’est pas du HTML**

Même si la syntaxe lui ressemble, JSX suit les règles de JavaScript (par ex. pas d’attributs en minuscules séparés par des tirets).

## 🧠 Partie pratique

- JSX est du sucre syntaxique qui transforme des appels `React.createElement`, ce qui permet de mêler logique et balises.
- Les fragments `<> ... </>` servent à regrouper plusieurs éléments sans ajouter de nœud DOM.
- On peut interpoler toute expression JavaScript entre `{}` pour afficher des données ou appeler des fonctions.
- Les props HTML deviennent camelCase en JSX (`className`, `htmlFor`, etc.) et les attributs booléens acceptent directement des expressions.

### Consignes

1. Intégrer en JSX la maquette HTML dans le composant `App` :

```html
<h1>Pokemon Search</h1>
<form>
  <input name="pokemonId" />
</form>
<ul>
  <li>
    <div>
      <img
        alt="pokemon"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      />
      <div>#1 mock-pokemon</div>
      <button>Delete</button>
    </div>
  </li>
</ul>
```
