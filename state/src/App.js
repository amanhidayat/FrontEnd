import { Counter } from "./component/counter";


function App() {
  const onStorage = () => {
    localStorage.setItem("id", 10)
  }

  const data = localStorage.getItem("id")
  console.log(data)

  return ( 
    <div> 
      <h1> INI HOME </h1>
      <button onClick={onStorage}> Storage </button>
      <Counter />
    </div>
   

    
  );
}

export default App;

