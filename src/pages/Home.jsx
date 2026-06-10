
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dragonball-api.com/api/characters");
        if (!response.ok) {
          throw new Error("failed to fetch");
        }

        const data = await response.json();
        console.log(data)
        const characterDetails = data.items
        setCharacters(characterDetails);
        toast.success("Data fetched successfully");
      } catch (err) {
           if (err instanceof Error) {
            toast.error(err.message);
            throw new Error(err.message, err.stack);
           }
      }
    };

    fetchData();
  }, []);
  return (
    <div>
        <h1>
            This is the home page
        </h1>
        
        <Link to="/about">
          Go to About page.
        </Link>
        
        <section className="grid w-full items-center justify-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {characters.map((character) => (
            <div key={character.id} className="w-100 p-4 rounded-2xl border border-gray-600 shadow-2xl flex flex-col items-center justify-center">
              <div className="w-full">
                <img src={character.image} className="w-full h-auto rounded-xl" alt={character.name} />
              </div>

              <div>
                <h2>{character.name}</h2>
                <p>{character.description}</p>
                <p>{character.ki}</p>
              </div>
            </div>
          ))}
        </section>

        <ToastContainer />

    </div>
  );
}