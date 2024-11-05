import MyNavbar from "./components/MyNavbar";
import Contact from "./sections/ContactSection";
import Services from "./sections/ServicesSection";
import Templates from "./sections/TemplatesSection";
import MySection from "./components/MySection";
import MyBanner from "./components/MyBanner";
import MyFooter from "./components/MyFooter";

function App() {

  return (
    <>
      <MyNavbar />
      {/* MAIN */}
      <main className="flex flex-col text-center items-center text-white w-full mx-auto px-2">
        <MyBanner />
        {/* SERVICES */}
        <MySection title={"Services"} >
          <Services />
        </MySection>
        {/* TEMPLATES */}
        <MySection title={"Templates"} >
          <Templates />
        </MySection>
        {/* CONTACT */}
        <MySection title={"Contact"}>
          <Contact />
        </MySection>
      </main>
      <MyFooter />
    </>
  );
}

export default App;
