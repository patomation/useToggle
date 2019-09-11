import { useState } from 'react';

export default (initialBoolean = false) => {

  const [ boolean, setBoolean ] = useState(initialBoolean);

  const toggle = (value) => {
    setBoolean(previousBoolean => {
      if(typeof value === 'boolean') return value; 
      return !previousBoolean;
    });
  }

  return [
    boolean,
    toggle
  ]
}
