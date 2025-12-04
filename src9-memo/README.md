# Partage d'état via le Context

## 🔍 Partie théorique

Le Contexte permet de **partager des données** à travers toute l’arborescence de composants **sans avoir à passer des props de parent en enfant** (prop drilling).

Exemples de données adaptées au contexte :

- thème (clair/sombre)
- utilisateur connecté
- langue
- configuration globale

---

### Les trois étapes du Contexte

#### 1. **Créer un Contexte**

```jsx
const ThemeContext = createContext();
```

#### 2️. **Fournir une valeur (Provider)**

Entoure les composants qui doivent accéder au contexte.

```jsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```

#### 3. **Consommer le Contexte**

Dans un composant :

```jsx
const theme = useContext(ThemeContext);
```

## 🧠 Partie pratique

### Consignes

1. Créer un contexte `ViewContext` qui va prendre pour valeur `front`.
2. Utiliser ce contexte dans le composant `Card`.
   1. Si la valeur du contexte est égale à `front`, alors montrer le sprite `front_default`
   2. Si la valeur du contexte est égale à `back`, alors montrer le sprite `back_default`
