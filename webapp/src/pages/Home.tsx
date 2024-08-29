import "../style/Home.css";
import { Button, Container } from "react-bootstrap";
import { IoIosArrowDropright } from "react-icons/io";
function Home() {
  return (
    <Container>
      <Button className="Useless-btn">Get Started {">"}</Button>
      <div className="Text">Simple Todo List</div>
      <div className="Text-1">My very own custom todo list</div>
    </Container>
  );
}
export default Home;
