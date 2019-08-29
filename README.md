React Hooks use Toggle


Installation:
```
npm install --save useToggle
```
or
```
yarn add useToggle
```

Usage:
```javascript
import useToggle from 'useToggle';

const MyComponent = () => {

  const [ value, toggleValue ] = useToggle(false)

  return (
    <button onClick={toggleValue}>
      {value}
    </button>
  )

}
```
