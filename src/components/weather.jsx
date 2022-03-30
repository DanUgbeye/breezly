
const Weather = ({ high, low, city, date, time  }) => {

  return (
    <div className=" flex gap-4 bg-green-300 w-full max-w-sm rounded-lg p-4 ">
      <div className=" min-w-[50%] ">

        <div className="  " id="temperature">
          <div className=" text-[12px] font-semibold ">{ high ? `High : ${high}` : `High: --`}</div>
          <div className=" text-[12px] font-semibold ">{ low ? `Low : ${low}` : `Low: --`}</div>
        </div>

        <div className=" text-[12px] font-semibold " id="city">{ city ? city : 'Select city' }</div>

        <div id="date" className=" text-[12px] font-semibold ">{ date ? date : '??-??-??' }</div>

        <div id="time" className=" text-[12px] font-semibold ">{ time ? time : '-- -- --' }</div>

      </div>

      <div id="advice" className=" w-full ">Remember to Carry an umbrella, for the sun not the rain</div>
    </div>
  );

}

export default Weather;