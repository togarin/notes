import { Button, Title } from "../styles/StyleHomePage";
import { Link } from "react-router-dom";

const section = [
  { title: "home", href: "/" },
  { title: "signup", href: "/signup" },
  { title: "login", href: "/login" },
  { title: "notes", href: "/notes" },
];

const Home = () => {
  return (
    <>
      <Title> Выполните вход или зарегестрируйтесь</Title>
      {section.map(({ title, href }, index) => (
          <Link component={Button} key={index} to={href}>{title}</Link> 
      ))}
    </>
  );
};

export default Home;
