import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

function useCategoriesData () {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch('https://petgram-server-salvarecuero.vercel.app/categories').then(res => res.json()).then(categories => {
      setCategories(categories);
      setLoading(false);
    });
  }, []);

  return { categories, loading };
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  });

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
      loading
        ? (
          <Item key='loading'>
            <Category />
          </Item>
          )
        : categories.map(category => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>)
        )
}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
