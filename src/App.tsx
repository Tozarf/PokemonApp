import { useState } from "react";
import "./App.css";
import { PokemonCard } from "./components/PokemonCard";

function App() {
    const [searchValue, setSearchValue] = useState("");
    console.log(searchValue);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("HandleSubmit", searchValue);
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
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <input
                    className="search-button"
                    placeholder="Enter your pokemon (name or number)"
                    type="submit"
                    value="Search"
                />
            </form>
            <PokemonCard searchValue={searchValue} />
        </div>
    );
}

export default App;
