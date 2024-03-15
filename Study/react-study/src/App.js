import "./App.css";

function App() {
  const list = ["milk", "banana", "apple"];
  return (
    <>
      <h1 className="orange">hi</h1>
      <ul>
        {list.map(function(x){
          return <>
          <li>{x}</li>
        </>;
        })}
        <br></br>
        {list.map((x) => (
          <>
            <li>hi_{x}</li>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
