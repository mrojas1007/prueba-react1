import React from 'react';

function Ordenador({ cartas, actualizarCartasOrdenadas }) {
  const ordenarAlfabeticamente = () => {
    const cartasOrdenadas = [...cartas].sort((a, b) => a.name.localeCompare(b.name));
    
    actualizarCartasOrdenadas(cartasOrdenadas);
  };

  const ordenarInversamente = () => {
    const cartasOrdenadasInversamente = [...cartas].sort((a, b) => b.name.localeCompare(a.name));
    actualizarCartasOrdenadas(cartasOrdenadasInversamente);
  };

  return (
    <div>
      <button onClick={ordenarAlfabeticamente}>Ordenar Título: A-Z</button>
      <button onClick={ordenarInversamente}>Ordenar Título: Z-A</button>
    </div>
  );
}

export default Ordenador;
