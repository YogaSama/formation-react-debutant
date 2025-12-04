# Optimisation

## 🔍 Partie théorique

### 1. useCallback

- Mémorise **une fonction** entre les rendus.
- Utile pour éviter de recréer une fonction passée en prop.

```jsx
const handleClick = useCallback(() => { ... }, []);
```

### 2. useMemo

- Mémorise **le résultat d’un calcul**.
- Utile pour éviter un calcul lourd à chaque rendu.

```jsx
const value = useMemo(() => compute(), []);
```

### 3. memo

- Empêche un composant de **re-render** si ses **props n'ont pas changé**.

```jsx
export default memo(MyComponent);
```

### En résumé

- **useCallback** -> optimise les **fonctions**
- **useMemo** -> optimise les **valeurs**
- **memo** -> optimise les **composants**
- Ensemble, ils réduisent les re-renders inutiles et améliorent les performances.

## 🧠 Partie pratique

### Consignes

1. Proposer d'optimiser des bouts du projet.
