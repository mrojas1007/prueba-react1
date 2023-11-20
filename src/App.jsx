import React, { useState, useEffect } from 'react';
<style>
</style>
import './App.css';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';
import Ordenador from './components/Ordenador';

function App() {
  const [cartas, setCartas] = useState([]);
  const [cartasFiltradas, setCartasFiltradas] = useState([]);
  const [cartasOrdenadas, setCartasOrdenadas] = useState([]);

  const actualizarCartasFiltradas = (cartasFiltradas) => {
    setCartasFiltradas(cartasFiltradas);
    setCartasOrdenadas(cartasFiltradas);
  };

  const actualizarCartasOrdenadas = (cartasOrdenadas) => {
    setCartasOrdenadas(cartasOrdenadas);
  };

  return (
    <>
      <img src="src/assets/Hearthstone-Logo.png" width={400}/>
      <h2>Buscador de cartas en español</h2>
      <main>
        <div>
          <Buscador cartas={cartas} actualizarCartas={actualizarCartasFiltradas} />
          <Ordenador cartas={cartasFiltradas} actualizarCartasOrdenadas={actualizarCartasOrdenadas} />
        </div>
        <div>
          <MiApi cartas={cartasOrdenadas} setCartas={setCartas} setCartasFiltradas={setCartasFiltradas} setCartasOrdenadas={setCartasOrdenadas}/>
        </div>
      </main>
      <footer>Copyright © Blizzard Entertainment - All Rights Reserved
      </footer>
    </>
  );
}

export default App;