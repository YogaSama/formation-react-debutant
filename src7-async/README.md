# Accès direct au DOM

## 🔍 Partie théorique

`useRef` est un Hook qui permet de **stocker une valeur mutable** qui **ne provoque pas de re-render** quand elle change.

Il sert principalement à :

- **référencer un élément du DOM**
- **conserver une valeur entre les rendus** (compteur interne, état intermédiaire…)
- accéder à des API impératives (focus, lecture/écriture directes)

### Syntaxe

```jsx
const ref = useRef(valeurInitiale);
```

- `ref.current` contient la valeur
- vous pouvez lire/écrire `ref.current` librement
- modifier `ref.current` **ne re-render pas** le composant

### Exemple : accéder à un élément DOM

```jsx
function InputFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
```

> `ref.current` pointe vers l’élément `<input>`.

### Exemple : stocker une valeur sans re-render

```jsx
const renderCount = useRef(0);
renderCount.current++;
```

> Pratique pour suivre un compteur interne ou stocker une valeur qui ne doit pas déclencher de rendu.

## 🧠 Partie pratique

### Consignes

1. Référencer `input` du formulaire avec un `ref`.
2. Réinitialiser le champs `input` à vide quand on `submit`.
