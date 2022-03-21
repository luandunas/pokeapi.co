const getPokemons = async (link, setResponseApi) => {
    await fetch(link).then(res => {
        if(res.ok){
            return res.json();
        }else{
            return {
                name: "Não encontrado",
                sprites:{
                    front_default: "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",
                }
            }
        }
    }).then(data => {
        if(!data) return;
        console.log(data)
        setResponseApi(data);
    });
}

export {getPokemons};