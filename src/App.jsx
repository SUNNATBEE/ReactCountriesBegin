import Header from "./components/Header/Header"
import Search from "./components/Form/Seacrh"
import Card from "./components/Card/Card";

function App() {
  
const CardItems = Array(8).fill(1);   

  return (
    <>
      <Header />
      <Search />
      <div className="container">
        <ul className="card__list list-unstyled d-flex align-items-center flex-wrap justify-content-between">
          {CardItems.map((item, index) => (
            <Card key={index} />
          ))}
        </ul>
      </div>
    </>
  );
  }
  
  export default App
  