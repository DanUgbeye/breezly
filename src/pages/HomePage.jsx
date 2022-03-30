import NewsList from "../components/NewsList";
// import Quotes from "../components/Quote";
import QuoteSlider from "../components/QuoteSlider";
import Weather from "../components/Weather";
import Welcome from "../components/Welcome";
import NewsContextProvider from "../contexts/NewsContext";
import QuotesContextProvider from "../contexts/QuotesContext";

const HomePage = () => {

  return (
    <section id="home" className=" w-full ">

      <Welcome name="Daniel" />

      <div className=" flex flex-col gap-6 mb-8 w-full   ">
        <Weather />
      </div>

      <QuotesContextProvider >
        <div className=" mb-8 ">
          {/* <Quotes quote="This is a random motivational quote and is a quote quote Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe natus odit repudiandae! Fuga, quas. Nisi." /> */}
          <QuoteSlider />
        </div>
      </QuotesContextProvider>

      <NewsContextProvider>
        <div id="news" className="  ">
          <h3 className=" font-semibold text-lg mb-4 ">Today's Major Headlines</h3>
          <NewsList />
        </div>
      </NewsContextProvider>
      
    </section>
  );
}
export default HomePage;