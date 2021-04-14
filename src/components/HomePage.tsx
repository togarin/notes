import React from "react";
import { Button, Title } from "../styles/StyleHomePage";
import { Link } from "react-router-dom";

const section = [
  { title: "home", href: "/" },
  { title: "login", href: "/login" },
  { title: "notes", href: "/notes" },
];

const Home = () => {
  return (
    <>
      <Title> Выполните вход или зарегестрируйтесь</Title>
      {section.map(({ title, href }, index) => (
          <Button key={index} >
          <Link to={href}>{title}</Link> 
          </Button>
      ))}
    </>
  );
};

export default Home;
