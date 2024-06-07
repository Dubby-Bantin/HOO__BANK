import styles from "../../style";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Banner,
} from "../../Components/imports";

const Home = () => (
  <div className=" bg-primary">
    <Navbar />
    <div className=" bg-primary overflow-hidden">
      <Banner />
      <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />{" "}
      <Clients /> <CTA /> <Footer />
    </div>
  </div>
);

export default Home;
