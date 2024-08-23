// Dada la siguiente watchlist, crear una función que tome el array original
// y devuelva un arreglo de objetos que solo contenga las películas:
// 1. Dirigidas por Cristopher Nolan.
// 2. Con un imdbRating > 8.0
// El arreglo que se devuelve SOLO DEBE CONTENER el nombre de la película, ningún otra información
// Es obligatorio para este CC resolverlo con la función map()

import './App.css'
import WatchList from './components/watchList/WatchList';

function App() {
  const returnMovieTitle = (watchlist) => {
    return watchlist.map((movie) => {
      if (movie.Director === 'Christopher Nolan' && parseFloat(movie.imdbRating) > 8.0) {
        return movie.Title;
      } else {
        return null;
      }
    }).filter((title) => title !== null);
  };

  const titlesArray = returnMovieTitle(WatchList());
  console.log(titlesArray);

  return (
    <div>
      <h1>Películas Filtradas</h1>
      <ul>
        {titlesArray.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
