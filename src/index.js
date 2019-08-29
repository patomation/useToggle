import { useState } from 'react';

export default (initialBoolean = false) => {

  const [ boolean, setBoolean ] = useState(initialBoolean);

  const toggle = () => {
    setBoolean(!boolean);
  }

  return [
    boolean,
    toggle
  ]
}
