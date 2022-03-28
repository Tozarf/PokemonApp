import { PokeResponse } from "../interfaces/interface";

export const getPoke = async (pokemon?: string | number): Promise<PokeResponse> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const result: PokeResponse = await response.json();
    return result;
};
