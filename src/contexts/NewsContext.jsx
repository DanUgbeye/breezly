import { useState, createContext } from 'react';

export const NewsContext = createContext();

const NewsContextProvider = (props) => {

  const [news, setNews] = useState([
    {
      id: 1, 
      title: 'This is the first very important news event', 
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, optio ad esse perferendis harum, consequuntur consectetur ullam, suscipit deleniti vero in facere iusto modi natus.',
      time: '12 hours ago',
      location: 'Abuja'
    },

    {
      id: 2, 
      title: 'This is the second very important news event', 
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, optio ad esse perferendis harum, consequuntur consectetur ullam, suscipit deleniti vero in facere iusto modi natus.',
      time: '1 hour ago',
      location: 'London'
    },

    {
      id: 3, 
      title: 'This is the third very important news event', 
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, optio ad esse perferendis harum, consequuntur consectetur ullam, suscipit deleniti vero in facere iusto modi natus.',
      time: '2 hours ago',
      location: 'New York'
    }
  ]);

  const addNews = (newNews) => {
    setNews([ ...news, newNews]);
  }


  return (
    <NewsContext.Provider value={{ news: news, addNews }}>
      {props.children}
    </NewsContext.Provider>
  );
}

export default NewsContextProvider