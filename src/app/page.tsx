import FetchPokemones from "./components/FetchPokemones";
import FetchPerros from "./components/FetchPerros";

export default function HomePage() {
  
  return (
    <div>
      <h1 className="container">
        Bienvenido a nuestra web de semana Tec
      </h1>
      <div className="container">
        <h3>Equipo 8:</h3>
      <ul>
  <li className="container">Jorge Emiliano Pomar Mendoza A01709338  <ul> <li> @pomaremiliano</li></ul> </li>
  <li className="container">Ivan Ricardo Paredes Avilez A01705083  <ul> <li> @IvanParedesA</li></ul> </li>
  <li className="container">Diego Reséndiz Fernández A01708017 <ul> <li> @Diego-spes</li></ul> </li>
  <li className="container">Francisco Couttolenc Ortiz A01754959  <ul> <li>@Couttolenc01</li></ul> </li>
</ul> </div>
      
      <FetchPokemones />
      <FetchPerros />
    </div>
  );
}


