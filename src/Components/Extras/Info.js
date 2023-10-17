import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist, faLeaf, faFire, faSkullCrossbones, faFeather, faHourglassHalf, faHillRockslide,
        faBug, faGhost, faWrench, faDroplet, faBolt, faBrain, faSnowflake, faDragon, faCircle, 
        faWandMagicSparkles, faCircleHalfStroke, faChartSimple, faBars} from '@fortawesome/free-solid-svg-icons';
import Evolution from '../evolutions';

export default function Info({pokemonDetails, onClose, onMovesClick, onStatsClick}){

    const handlerMoves = () => {
      onMovesClick(pokemonDetails);
    }
  
    const handleStats = () => {
      onStatsClick(pokemonDetails);
    }
  
    if (!pokemonDetails) {
      return <div>
            <svg aria-hidden="true" className="w-8 h-8 mx-28 my-28 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
      </div>;
    }
  
    const typesPokemon = pokemonDetails.types.map(type => type.type.name);
  
    const iconType = ((type) => {
      switch (type){
        case 'grass':
          return (
            <div className=' bg-green-500 text-white rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faLeaf} />
            </div>
          )  
        case 'fire':
          return (
            <div className=' bg-orange-400 text-white rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faFire} />
            </div>
          )
        case 'poison':
          return (
            <div className='bg-purple-500 text-white rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faSkullCrossbones} />
            </div>
          )
        case 'fighting':
          return (
            <div className=' bg-red-700 text-white rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faHandFist}/>
            </div>
          )
        case 'flying':
          return (
            <div className=' bg-cyan-400 text-white rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faFeather}/>
            </div>
            )
        case 'ground':
          return (
            <div className=' bg-yellow-500 text-white rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faHourglassHalf} />
            </div>
            )
        case 'rock':
          return (
            <div className=' bg-amber-600 text-white rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faHillRockslide} />
            </div>
            )
        case 'bug':
          return (
            <div className=' bg-lime-400 text-white rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faBug}/>
            </div>
            )
        case 'ghost':
          return (
            <div className=' bg-gray-600 text-white rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faGhost} />
            </div>
            )
        case 'steel':
          return (
            <div className=' bg-slate-400 text-white rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faWrench}/>
            </div>
            )
        case 'water':
          return (
            <div className=' bg-blue-700 text-white rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faDroplet} />
            </div>
            )
        case 'electric':
          return (
            <div className=' bg-yellow-300 text-white rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faBolt} />
            </div>
            )
        case 'psychic':
          return (
            <div className=' bg-pink-600 text-white rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faBrain} />
            </div>
            )
        case 'ice':
          return (
            <div className=' bg-blue-300 text-white rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faSnowflake} />
            </div>
            )
        case 'dragon':
          return (
            <div className=' bg-gradient-to-t from-blue-500 via-purple-300 to-red-400 rounded px-2 py-1 text-white text-center'>
              <FontAwesomeIcon icon={faDragon} />
            </div>
            )
        case 'dark':
          return (
            <div className=' bg-gray-300 rounded px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faCircleHalfStroke} />
            </div>
            )
        case 'fairy':
          return (
            <div className=' bg-pink-300 text-white px-2 py-1 text-center rounded'>
              <FontAwesomeIcon icon={faWandMagicSparkles} />
            </div>
            )
        case 'normal':
          return (
            <div className=' bg-gray-300 text-white px-2 py-1 text-center'>
              <FontAwesomeIcon icon={faCircle} />
            </div>
            )
        default:
          return null;
      }
    })
  
    const typesIcons = typesPokemon.map(type => (
      <div key={type}>
        {iconType(type)}
      </div>
    ));
  
      return(
        <div className="fixed inset-0 z-10 first-letter overflow-y-auto items-center">
          <div className='flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <div className={` bg-yellow-100 relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`}>
            <div className='flex flex-row-reverse justify-between px-20 py-2 md:px-4 md:py-3'>
              <button onClick={handleStats}
                className=" mt-3 inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-400 sm:mt-0 sm:w-auto"
              ><FontAwesomeIcon icon={faChartSimple} className='p-1 text-lg text-white'/>
              </button>
              <button onClick={handlerMoves}
                className=" mt-3 inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-400 sm:mt-0 sm:w-auto"
                ><FontAwesomeIcon icon={faHandFist} className='p-1 text-lg text-white'/></button>
              </div>
              <div className='flex justify-center '>
                  <div className='mt-7 rounded-full bg-gray-300'>
                      <img className='h-36' src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
                  </div>
              </div>
  
              <div className='text-center mt-4'>
                  <h2 className='uppercase font-bold'>{pokemonDetails.name}</h2>
              </div> 
              <div className='flex justify-center mt-4 rounded-lg bg-gray-50 mx-6 shadow-lg'>
                <div className='md:mx-4 text-center'>
                    <p className='uppercase'>Height: {pokemonDetails.height}</p>
                    <p className='uppercase'>Weight: {pokemonDetails.weight}</p>
                    <p className='uppercase'>Type:</p>
                    <p className='uppercase flex justify-center space-x-2 mb-2'>{typesIcons}</p>
                </div>
              </div>
              <div className='flex justify-center mt-4 rounded-lg bg-gray-50 mx-6 shadow-lg'>
                <div className='mx-4'>
                    <p className='uppercase font-semibold text-center'>ability</p>
                    <p className='uppercase text-center mb-1 bg-gray-100 border border-solid border-purple-700 border-2 rounded-md px-4'>{pokemonDetails.abilities.map(ability => ability.ability.name.split('-').join(' ')).join(' , ')}</p>
                    <p className='uppercase font-semibold text-center'>hidden ability</p>
                    <p className='uppercase text-center bg-gray-100 rounded-md border border-solid border-purple-700 border-2 mb-3'>{pokemonDetails.abilities.find(hiddenAbility => hiddenAbility.is_hidden)?.ability.name.split('-').join(' ')}</p>
                </div>
              </div>
                <Evolution speciesName={pokemonDetails.name}/>
              <div className='flex flex-row-reverse px-4 py-3 '>
              <button onClick={onClose} 
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >Close</button>
              </div>
            </div>
          </div>
        </div>
  
      );
  }