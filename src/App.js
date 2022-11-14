import styled from "styled-components";
import image from "./download.jpg"

function App() {

  const Card = styled.div`
    background-color:gray;
    width:500px;
  `
  const Top = styled.div`
    display: flex;
    text-align: center;
    background-color: lightgray;
    justify-content:space-between;
    div{
      width:100%;
    }
  `
  const Bottom = styled.div`
  padding: 20px 0;
    margin-left:5%;
  `

  const Title1 = styled.h1`
  width:100%;
  font-size:2rem;
  `

  const Title2 = styled.h2`
  width:100%;
  font-size: 1rem;
  font-weight:normal;
  `
  return (
    <div className="App">
      <Card>
        <Top>
          <img src={image} alt="image triangles" />
          <div>
            <Title1>Titre</Title1>
            <Title2>Sous titre</Title2>
          </div>
        </Top>
        <Bottom>
          Rate this image
        </Bottom>
      </Card>
    </div>
  );
}

export default App;
