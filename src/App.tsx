import { useState } from "react";
import "./App.css";
import { PokemonCard } from "./components/PokemonCard";

function App() {
    const [searchValue, setSearchValue] = useState("");
    console.log(searchValue);

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className="App">
            <h1>POKEMON APP</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Pokemon name or #"
                    className="search-box"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value.toLocaleLowerCase())}
                />
                <input
                    className="search-button"
                    placeholder="Enter your pokemon (name or number)"
                    type="submit"
                    value="Search"
                />
            </form>
            <PokemonCard searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
    );
}

export default App;
