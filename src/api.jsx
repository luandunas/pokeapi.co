const getPokemons = async (link, setResponseApi) => {
    await fetch(link).then(res => {
        return res.json();
    }).then(data => {
        if(!data) return;
        setResponseApi(data);
    });
}

export {getPokemons};