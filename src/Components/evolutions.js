import React, {useState, useEffect} from "react";

function Evolution({speciesName}){
    const [evolution, setEvolution] = useState(null);
    const [pokemonImg, setPokemonImg] = useState({});
    const [isCircleLayout, setIsCircleLayout] = useState(false);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${speciesName}`)
            .then(response => response.json())
            .then(data => {
                const evolutionChain = data.evolution_chain.url;

                fetch(evolutionChain)
                .then(responseEvol => responseEvol.json())
                .then(dataEvolution => {
                    setEvolution(dataEvolution);
                })
                .catch(error => {console.error('No se puede obtner la evolucion', error)});
                
                const loadPokemonImages = async () => {
                    if (evolution && evolution.chain) {
                      const imagePromises = [];
                  
                      // Función recursiva para obtener imágenes de la cadena de evolución
                      const getImages = (chain) => {
                        if (chain && chain.species) {
                          const specie = chain.species.name;
                          const url = `https://pokeapi.co/api/v2/pokemon/${specie}`;
                          imagePromises.push(
                            fetch(url)
                              .then((response) => response.json())
                              .then((data) => {
                                return {
                                  name: specie,
                                  image: data.sprites.front_default,
                                };
                              })
                          );
                        }
                  
                        if (chain && chain.evolves_to && chain.evolves_to.length > 0) {
                          chain.evolves_to.forEach((evolution) => {
                            getImages(evolution);
                          });
                        }
                      };
                  
                      getImages(evolution.chain);
                  
                      // Espera a que todas las solicitudes de imágenes se completen
                      const images = await Promise.all(imagePromises);
                  
                      // Almacena las imágenes en el estado
                      const imageMap = {};
                      images.forEach((pokemon) => {
                        imageMap[pokemon.name] = pokemon.image;
                      });
                      setPokemonImg(imageMap);

                      setIsCircleLayout(images.length > 3);
                    }
                  };
                loadPokemonImages();
            })
        .catch(error => {console.error('No se puede obtener la especie', error)});

    },[speciesName, evolution]);

    if (!evolution || !pokemonImg) {
        return <div>
            <svg aria-hidden="true" className="w-8 h-8 mx-28 my-28 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
        </div>;
      }

      const Chains = evolution.chain;
      const evolutionInfo = [];

      const getEvolutionInfo = (chain) => {
        const specie = chain.species.name;
        const evolutionDetails = chain.evolution_details.map((detail) => {
          return detail.trigger.name;
        });
    
        evolutionInfo.push({ specie, evolutionDetails });
    
        if (chain.evolves_to.length > 0) {
          chain.evolves_to.forEach((evolution) => {
            if (evolution.species.name.includes("-mega")) {
              evolutionInfo.push({ specie: evolution.species.name, evolutionDetails: ["megaevolution"] });
            } else {
              getEvolutionInfo(evolution);
            }
          });
        }
      };

      getEvolutionInfo(Chains);

    return(
    <div>

      <div className="bg-gray-50 rounded-lg mx-6 mt-4 shadow-lg">
        <p className=" uppercase font-semibold text-center mb-2">evolution chain</p>
        <div className={isCircleLayout ? "flex flex-wrap justify-center" : "flex justify-center"}>
            {Object.keys(pokemonImg).map((name, index) => (
                <img key={index} src={pokemonImg[name]} alt={name} className={isCircleLayout ? "circle-image" : "h-40"}/>
            ))}
        </div>
       {/*} <div className="flex justify-center space-x-10">
            {evolutionInfo.map((info, index) => (
                <div key={index}>
                <p>
                {info.specie}
                </p>
            </div>
            ))}
        </div>*/}        
        </div>
      </div>
    )
}

export default Evolution