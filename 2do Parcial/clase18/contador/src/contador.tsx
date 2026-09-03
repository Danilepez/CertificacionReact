import { useState } from 'react';

export default function Contador() {
  const [contador, setContador] = useState<number>(0);

  const contar = (): void => {
    setContador((prevContador) => prevContador + 1);
  };

  return (
    <button onClick={contar}>
      {contador}
    </button>
  );
}
