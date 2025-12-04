# Composition de composants

## 🔍 Partie théorique

### 1. **Les composants**

### Qu’est-ce qu’un composant ?

Un composant est **une fonction** (ou une classe, mais on verra plus tard) qui **retourne du JSX**.
Il permet de découper l’interface en éléments réutilisables.

```jsx
function Welcome() {
  return <h1>Bienvenue !</h1>;
}
```

Pour l’utiliser :

```jsx
<Welcome />
```

---

### 2. **Les props**

### À quoi servent les props ?

Les **props** (propriétés) permettent de **passer des données** d’un parent vers un composant enfant.

#### 1. Passer une prop

```jsx
<Welcome name="Alice" />
```

#### 2. Recevoir une prop

```jsx
function Welcome(props) {
  return <h1>Bienvenue, {props.name} !</h1>;
}
```

Ou en destructurant :

```jsx
function Welcome({ name }) {
  return <h1>Bienvenue, {name} !</h1>;
}
```

---

### 3. **Les children**

## 🧠 Qu’est-ce que `children` ?

`children` représente **le contenu interne** entre les balises d’un composant.

### 1. Utilisation

```jsx
<Card>
  <p>Contenu du card</p>
</Card>
```

### 2. Récupération

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

## 🧠 Partie pratique

### Consignes

1. Créer un dossier `components`.

2. Reprendre les éléments du `h1` dans un composant `Title` qui doit s'intégrer dans le composant `App` comme ceci :

```jsx
<Title>Pokemon Search</Title>
```

3. Créer un composant `Card` qui doit reprendre la `div` de la carte pokemon. Elle devra être rendu comme ça :

```jsx
<Card pokemon={pokemon} onDelete={(id) => {}} />
```
