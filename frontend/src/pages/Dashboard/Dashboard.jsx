import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Members from "../../components/Members/Members";
import Heading from "../../components/Heading/Heading";
import Projects from "../../components/Projects/Projects";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Heading text={"Our Team"} />
      <Members />
      <Heading text={"Projects"} />
      <Projects />
    </>
  );
};

export default Dashboard;