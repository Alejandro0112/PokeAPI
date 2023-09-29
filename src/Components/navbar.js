
import React from "react";

function NavbarPkm ({searchPokemon, setSearchPokemon, region, setregion, types, setTypes}){
        return(
            <nav className="z-0 bg-red-700 w-full md:h-11 ">
                <div className=" text-white font-mono md:flex justify-between py-2 mx-4">
                    <p className="text-xl hidden sm:block">Pokemon</p>
                    <div className="flex md:px-2">
                    <input className="rounded mr-4  bg-gray-200 text-black px-2" type="text" placeholder="Search" value={searchPokemon} onChange={
                        event => setSearchPokemon(event.target.value)}/>

                    <select value={region} onChange={event => setregion(parseInt(event.target.value))} className="bg-slate-200 border border-gray-300 border-2 text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1">
                        <option value={1}>All Regions</option>
                        <option value={2}>Kanto</option>
                        <option value={3}>Johto</option>e
                        <option value={4}>Hoenn</option>
                        <option value={5}>Sinnoh</option>
                        <option value={9}>Teselia</option>
                        <option value={12}>Kalos</option>
                        <option value={16}>Alola</option>
                        <option value={9}>Galar</option>
                        <option value={10}>Hisui</option>
                    </select>
                    </div>
                </div>
            </nav>
        )
}
export default NavbarPkm;