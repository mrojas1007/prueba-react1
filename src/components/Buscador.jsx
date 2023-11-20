import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Buscador = ({ cartas, actualizarCartas }) => {
  const [filtroTitulo, setFiltroTitulo] = useState('');
  const [filtroClase, setFiltroClase] = useState('');
  const [filtroRareza, setFiltroRareza] = useState('');

  const aplicarFiltros = () => {
    const cartasFiltradas = cartas.filter(carta => {
      const incluyeTitulo = carta.name.toLowerCase()
        .includes(filtroTitulo.toLowerCase());
      const incluyeClase = carta.cardClass.toLowerCase()
        .includes(filtroClase.toLowerCase());
      const incluyeRareza = carta.rarity.toLowerCase()
        .includes(filtroRareza.toLowerCase());

      return incluyeTitulo && incluyeClase && incluyeRareza 
    }
    );

    actualizarCartas(cartasFiltradas);
  };

  return (
    <div>
      <label>
        Título:
        <input type="text" value={filtroTitulo} onChange={(e) => setFiltroTitulo(e.target.value)} />
      </label>
      <label>
        Clase:
        <input type="text" value={filtroClase} onChange={(e) => setFiltroClase(e.target.value)} />
      </label>
      <label>
        Rareza:
        <input type="text" value={filtroRareza} onChange={(e) => setFiltroRareza(e.target.value)} />
      </label>
      <Button variant="primary" onClick={aplicarFiltros}>Buscar</Button>
    </div>
  );
};

export default Buscador;
