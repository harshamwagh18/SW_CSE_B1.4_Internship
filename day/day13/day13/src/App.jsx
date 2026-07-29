const name = "harsha";
const isLoggedIn = true;
function App() {
  
  return (
    <>
     {/* JSX 
     RUle 1: Return one parent element
     */}
     <h1>Hello</h1>

     {/* JSX 
     RUle : Every tag must be closed properly
     */}
     <p>error</p>

     {/* JSX 
     RUle 3: use camelCase for attributes
     */}
     <button onClick>Clik</button>

     {/* JSX 
     RUle 4: Embeding Jawa script with curly bracis
     */}
      <p>Hello {name}</p>

      {/* JSX 
     RUle 5: use expressions,not statements
     */}
     <p>{isLoggedIn ? "Welcome back" : "Please Login"}</p>
    </>
  )
}

export default App
