import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import pizzas from '../assets/pizzas.json';

 const Home = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch('https://629995ce6f8c03a978453425.mockapi.io/pizzas')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setLoading(false);
      });
  }, []);
  console.log(items);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;