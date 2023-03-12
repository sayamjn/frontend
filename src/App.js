import styled from "styled-components";
import bg from "../src/img/bg.png"
function App() {

  const AppStyled = styled.div`
height:100vh;
background-image: url(${props => props.bg}) ;
position: relative;
`;


  return (
    <AppStyled bg={bg} className="App">
    <main>
      
    </main>
    </AppStyled>
  );
}



export default App;
