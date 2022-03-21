import React, { useEffect, useState } from "react";
import "./Home.css";
import process from "../../env.json";
import { getPokemons } from "../../api";

const Home = (props) => {

    let pokemons = props.pokemons;
    let setPokemons = props.setPokemons;
    let setSortByFunc = props.sortBy;
    let sortByType = props.sortByType;
    let responseApi = props.responseApi;
    let setResponseApi = props.setResponseApi;

    const [currentPage, setCurrentPage] = useState(1);

    //primeiro fetch para pegar pokemons sem filtro
    useEffect(() => {
        getPokemons(process.env.API_URL + "/pokemon?&limit=15", setResponseApi);
    }, [])

    //Requisitando todos pokemons retornado e colocando em uma promise;
    useEffect(() => {
        if (responseApi.results) {
            const jsonPromises = responseApi.results.map(el => {
                return fetch(el.url).then(response => response.json());
            });
            Promise.all(jsonPromises).then(res => {
                setSortByFunc(res, sortByType, setPokemons)
            });
        }

        if (responseApi.name) {
            setPokemons([responseApi])
        }

    }, [responseApi]);

    return (
        <div>
            <div className="homeMain">
                {
                    pokemons.map(function (pokemon, i) {
                        return <div key={i} className="pokemonCard">
                            <img src={pokemon.sprites.front_default} loading="eager" />
                            {pokemon.name}
                        </div>
                    })
                }
            </div>

            <div className="pagination">
                <div className="pageButtons">
                    <div onClick={async () => {
                        if (responseApi.previous) {
                            await getPokemons(responseApi.previous, setResponseApi); setCurrentPage(currentPage - 1)
                        }
                    }} className="previousPage">&lt; Anterior</div>
                    <div className="currentPage">{currentPage}</div>
                    <div onClick={async () => {
                        if (responseApi.next) {
                            await getPokemons(responseApi.next, setResponseApi); setCurrentPage(currentPage + 1);
                        }
                    }} className="nextPage">Seguinte &gt;</div>
                </div>
            </div>
        </div>
    )
};

export default Home;