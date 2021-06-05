import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { PhotoCardWithquery } from './container/PhotocardWithQuery';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithquery id={detailId} />
          : (
            <>
              <ListOfCategories />
              <ListOfPhotoCards categoryId={1} />
            </>
            )
      }
    </>
  );
};
