import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getPoke } from "../helpers/getPoke";
import { PokeResponse } from "../interfaces/interface";
import { NotFoundItem } from "./NotFoundItem";
import "./styles/PokemonCard.css";

interface PokemonCardProps {
    searchValue?: string;
    setSearchValue?: Dispatch<SetStateAction<string>>;
}

export const PokemonCard = ({ searchValue }: PokemonCardProps) => {
    const [pokemon, setPokemon] = useState<PokeResponse>();

    useEffect(() => {
        const getData = async () => {
            try {
                const fetchedPoke = await getPoke(searchValue);
                setPokemon(fetchedPoke);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [searchValue]);

    return (
        <>
            {pokemon?.sprites ? (
                <div className="card">
                    <h1>{pokemon?.name}</h1>
                    <img
                        className="card-image"
                        src={`${pokemon?.sprites.front_default}`}
                        alt="NOT FOUND"
                    />
                    <span className="card-description">
                        {pokemon?.abilities?.map(({ ability }, index) => (
                            <h2 key={index}>
                                Ability {index + 1}: {ability.name}
                            </h2>
                        ))}
                    </span>
                </div>
            ) : (
                <NotFoundItem />
            )}
        </>
    );
};
