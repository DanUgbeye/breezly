import Quotes from "../components/quotes";
import Weather from "../components/weather";
import Welcome from "../components/welcome";

const Home = () => {

  return (
    <section className=" w-full ">
      <Welcome name="Daniel" />
      <div className="  ">
        <Weather />
        <Quotes quote="This is a random quote" />
      </div>
    </section>
  )
}

export default Home;