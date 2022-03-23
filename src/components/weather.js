

const Weather = () => {

  return (
    <div className=" border-solid  border-red-500 flex gap-4 bg-green-300 w-fit max-w-sm rounded-md p-4 ">
      <div className=" w-[60%] ">
        <div className="full" id="temperature">Sunny 31 - 36</div>
        <div className="full" id="city">Sydney</div>
        <div id="date" className=" text-sm ">26/03/2022</div>
      </div>

      <div id="advice" className="  ">Remember to Carry an umbrella, for the sun not the rain</div>
    </div>
  );

}

export default Weather;