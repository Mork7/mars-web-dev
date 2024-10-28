import MyHeader from "./components/MyHeader";
import Contact from "./sections/ContactSection";
import Services from "./sections/ServicesSection";
import TemplatesGallery from "./sections/TemplatesSection";
import MySection from "./components/MySection";

function App() {
  // STYLES
  const h2Styles = "text-3xl font-bold tracking-tight text-gray-500 mb-2";
  const mainStyles =
    "p-2 flex flex-col text-center items-center bg-zinc-900 text-white pt-[4.5rem] overflow-y-scroll w-full mx-auto";
  const h1Styles = "text-4xl text-primary font-bold my-6";

  return (
    <>
      <MyHeader />
      {/* MAIN */}
      <main className={mainStyles} style={{ height: "calc(100vh - 4.5rem)" }}>
        <h1 id="top" className={h1Styles}>
          Welcome to MARS Web Development
        </h1>
        {/* SERVICES */}
        <MySection title={"Services"} h2Styles={h2Styles}>
          <Services />
        </MySection>
        {/* TEMPLATES */}
        <MySection title={"Templates"} h2Styles={h2Styles}>
          <TemplatesGallery />
        </MySection>
        {/* CONTACT */}
        <MySection title={"Contact"} h2Styles={h2Styles}>
          <Contact />
        </MySection>
      </main>
      <p className="scr"></p>
    </>
  );
}

export default App;
