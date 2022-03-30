
const NewsEvent = ({ news }) => {
  const { title, body, time, location } = news;

  return (
    <div className=" shadow-md hover:shadow-lg bg-[white] mb-8 px-4 py-2 text-gray-700 flex flex-col transition-all duration-500  ">

      <div className=" flex ">
        <div id="location" className=" flex gap-2 text-[0.7rem] font-semibold text-gray-600 min-w-fit self-end ">
          <i className=" fas fa-location-dot  "></i>
          {location || 'News location'}
        </div>
      
        <div id="time" className=" flex w-full justify-end font-semibold text-[0.7rem] text-gray-600 self-start ">
          {time || 'News time'}
        </div>
      </div>

      <div id="title" className=" text-lg font-bold ">
        {title || 'News Title'}
      </div>

      <div id="body" className=" mb-2 ">
        { body || 'News body: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis neque quos officiis delectus nesciunt nisi natus ipsa dolor quod laudantium beatae, voluptatem tempora aut facilis?' }
      </div>

    </div>
  );
};

export default NewsEvent;