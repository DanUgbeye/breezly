import quoteImg from "../assets/img/idea.svg";

const Quotes = ({quote}) => {
  return (
    <div className=" bg-green-300 rounded-sm px-8 py-4 relative text-center font-semibold font-sans max-w-md mx-auto ">
      <img src={quoteImg} alt="light" className={" absolute left-3 -top-3 w-10 h-10 "} />
      {quote}
    </div>
  );
};

export default Quotes;