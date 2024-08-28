import "../style/Home.css";
import { Button, Container } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Button className="Useless-btn">Completed</Button>
      <div className="Text">Simple Todo List</div>
      <div className="Text-1">My very own custom todo list</div>
    </Container>
  );
}
export default Home;
