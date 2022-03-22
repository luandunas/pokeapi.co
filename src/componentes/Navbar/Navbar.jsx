import React from "react";
import { getPokemons } from "../../api";
import "./Navbar.css";
import process from "../../env.json";

function searchPokemon(query, setResponseApi){
    //Removendo caracteres especiais e acentos.
    query = query.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    query = query.toLowerCase();
    console.log(process.env.API_URL + "/pokemon/" + query)
    getPokemons(process.env.API_URL + "/pokemon/" + query + "?&limit=15", setResponseApi);
}

const Navbar = (props) => {

    let pokemons = props.pokemons;
    let setPokemons = props.setPokemons;
    let setSortByFunc = props.sortBy; 
    let sortByType = props.sortByType;
    let setSortByType = props.setSortByType;
    let setResponseApi = props.setResponseApi;

    return (
        <div className="navBar">
            <div className="rightSide">
                <div className="sortBy">
                    <p>Organizar por: <strong>{sortByType == "id" ? "ID": "Nome"}</strong></p>
                    <div className="dropdownContent">
                        <p htmlFor="byId" className="dropdownOption" onClick={() => {setSortByFunc(pokemons, "id", setPokemons); setSortByType("id")}}><strong>ID</strong></p>
                        <p htmlFor="byName" className="dropdownOption" onClick={() => {setSortByFunc(pokemons, "name", setPokemons); setSortByType("name")}}><strong>Nome</strong></p>
                    </div>
                </div>
            </div>
            <div className="search">
                <input type="text" name="searchInput" id="searchInput" className="searchInput" placeholder="Pikachu" onKeyDown={(e) => {if (e.key != "Enter") return; searchPokemon(document.getElementById("searchInput").value, setResponseApi)}}/><div className="searchIcon" onClick={(e) => {searchPokemon(document.getElementById("searchInput").value, setResponseApi)}}>&#x1F50E;&#xFE0E;</div>
            </div>
        </div>
    )
};

export default Navbar;