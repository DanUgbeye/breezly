import React, { useContext } from 'react';
import NewsEvent from "../components/NewsEvent";
import { v1 as uuid } from 'uuid';
import { NewsContext } from '../contexts/NewsContext';

const NewsList = () => {

  const { news } = useContext(NewsContext);

  return (
    <div className="  ">
      { news.map((newsEvent) => (<NewsEvent key={uuid()} news={newsEvent} />)) }
    </div>
  );
}

export default NewsList;