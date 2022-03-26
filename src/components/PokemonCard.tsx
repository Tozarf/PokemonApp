import { useEffect, useState } from "react";
import { getPoke } from "../helpers/getPoke";
import { PokeResponse } from "../interfaces/interface";
import "./styles/PokemonCard.css";

interface PokemonCardProps {
    searchValue?: string;
}

export const PokemonCard = ({ searchValue }: PokemonCardProps) => {
    const [pokemon, setPokemon] = useState<PokeResponse>();
    // console.log(searchValue);

    useEffect(() => {
        const getData = async () => {
            const fetchedPoke = await getPoke("ditto");
            setPokemon(fetchedPoke);
        };
        getData();
    }, [pokemon]);

    return (
        <div className="card">
            <h1>{pokemon?.name}</h1>
            <img className="card-image" src={`${pokemon?.sprites.front_default}`} alt="NOT FOUND" />
            <span className="card-description">
                {pokemon?.abilities?.map(({ ability }, index) => (
                    <h2 key={index}>
                        Ability {index + 1}: {ability.name}
                    </h2>
                ))}
            </span>
        </div>
    );
};
