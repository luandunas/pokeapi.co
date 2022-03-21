import React, { useState } from "react";
import "./Navbar.css";

const Navbar = (props) => {

    let pokemons = props.pokemons;
    let setPokemons = props.setPokemons;
    let setSortByFunc = props.sortBy; 
    let sortByType = props.sortByType;
    let setSortByType = props.setSortByType;
    
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
                <input type="text" name="searchInput" id="searchInput" className="searchInput" placeholder="Pikachu" /><div className="searchIcon">&#x1F50E;&#xFE0E;</div>
            </div>
        </div>
    )
};

export default Navbar;