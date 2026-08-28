import {useState} from 'react';
export default function contador (){
const [contador, setContador] = useState(0);
const contar = () : void => {
setContador(contador +1);
}

return (
<button onClick={()=> setContador(contador +1)}>
{contador}
</button>
)
}