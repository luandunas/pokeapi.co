import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';

function sortBy(pokemons, sortType, setPokemons) {
  let pokemonsArr = [...pokemons]
  pokemonsArr.sort(function (a, b) {
    if (a[sortType] < b[sortType]) { return -1; }
    if (a[sortType] > b[sortType]) { return 1; }
    return 0;
  });
  console.log(pokemonsArr)
  setPokemons(pokemonsArr);
}

function App() {
  const [responseApi, setResponseApi] = useState({});
  const [pokemons, setPokemons] = useState([]);
  const [sortByType, setSortByType] = useState("id");

  return (
    <div className="App">
      <header className="App-header">
        <Navbar pokemons={pokemons} setPokemons={setPokemons} sortBy={sortBy} sortByType={sortByType} setSortByType={setSortByType} setResponseApi={setResponseApi}></Navbar>
      </header>

      <main>
        <Home responseApi={responseApi} setResponseApi={setResponseApi} pokemons={pokemons} setPokemons={setPokemons} sortBy={sortBy} sortByType={sortByType}></Home>
      </main>
    </div>
  );
}

export default App;
