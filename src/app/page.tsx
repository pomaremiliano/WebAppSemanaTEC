import FetchPokemones from "./components/FetchPokemones";
import FetchPerros from "./components/FetchPerros";
import FetchWeather from "./components/FetchWeather";

export default function HomePage() {
  return (
    <div>
      <h1 className="container text-center my-8">
        ¡Bienvenido a nuestra aplicación web!
      </h1>
      <div className="text-slate-500 ml-10 mr-10">
        <h3 className="text-center mb-4 text-gray-50">Equipo 8:</h3>
        <ul className="grid grid-cols-4 gap-4">
          <li className="container p-4 border rounded shadow bg-white">
            Jorge Emiliano Pomar Mendoza A01709338
            <ul>
              <li>@pomaremiliano</li>
            </ul>
          </li>
          <li className="container p-4 border rounded shadow bg-white">
            Ivan Ricardo Paredes Avilez A01705083
            <ul>
              <li>@IvanParedesA</li>
            </ul>
          </li>
          <li className="container p-4 border rounded shadow bg-white">
            Diego Reséndiz Fernández A01708017
            <ul>
              <li>@Diego-spes</li>
            </ul>
          </li>
          <li className="container p-4 border rounded shadow bg-white">
            Francisco Couttolenc Ortiz A01754959
            <ul>
              <li>@Couttolenc01</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <FetchPokemones />
        <FetchPerros />
        <FetchWeather />
      </div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p> Semana Tec - Conectando al Mundo Web | Septiembre 2024</p>
      </footer>
    </div>
  );
}
