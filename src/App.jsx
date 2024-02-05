import Banner from "./home/Banner";
import Feature from "./home/Feature";
import Services from "./home/Services";
import HotDeals from "./home/HotDeals";
import InstaPost from "./home/InstaPost";
import LeatestDeals from "./home/LeatestDeals";
import Shop from "./home/Shop";
import Footer from "./home/Footer";

function App() {
  return (
    <>
      <Banner />
      <main>
        <Feature />
        <Services />
        <HotDeals />
        <InstaPost />
        <LeatestDeals />
        <Shop />
      </main>
      <Footer />
    </>
  );
}

export default App;
