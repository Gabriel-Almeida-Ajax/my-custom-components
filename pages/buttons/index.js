import Card from '../../components/MenuAnimatedButton/AnimatedButton';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  justify-content: space-around;
  align-items: center;
`

export default function Buttons() {

    return (
        <Container>
            <Card onClick={() => console.log("OMAIOA")} />
            <Card onClick={() => console.log("OMAIOA")} />
        </Container>
    )
}
