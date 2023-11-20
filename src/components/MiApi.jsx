import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function MiApi({ cartas, setCartas, setCartasFiltradas, setCartasOrdenadas }) {
  const [info, setInfo] = useState([]);
  const cartasPorPagina = 10;
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "https://api.hearthstonejson.com/v1/121569/esES/cards.collectible.json";
    const response = await fetch(url);
    const data = await response.json();
    setCartas(data);
    setCartasFiltradas(data);
    setCartasOrdenadas(data);
  };

  useEffect(() => {
    actualizarCartasPagina();
  }, [cartas, paginaActual, cartasPorPagina]);

  const actualizarCartasPagina = () => {
    const indiceInicial = (paginaActual - 1) * cartasPorPagina;
    const cartasPagina = cartas.slice(indiceInicial, indiceInicial + cartasPorPagina);

    const cartasInfo = cartasPagina.map((carta, index) => {
      const cardId = carta.id;
      const renderUrl = `https://art.hearthstonejson.com/v1/render/latest/esES/512x/${cardId}.png`;

      return (
        <Card border="info" bg="dark" text="light" key={index} className="mi-api-card">
          <Card.Img variant="top" src={renderUrl} />
          <Card.Body>
            <Card.Title>{carta.name}</Card.Title>
            <Card.Text>
              Clase: {carta.cardClass}
            </Card.Text>
            <Card.Text>
              Rareza: {carta.rarity}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });

    setInfo(cartasInfo);
  };

  const cambiarPagina = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  return (
    <>
      <div className="mi-api-container">{info.length > 0 ? info : <div>No hay cartas disponibles.</div>}</div>
      <div>
        <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
          Anterior
        </button>
        <span>Página {paginaActual}</span>
        <button
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === Math.ceil(cartas.length / cartasPorPagina)}
        >
          Siguiente
        </button>
      </div>
    </>
  );
}

export default MiApi;
