import React from 'react';
import { Button } from './styles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon /> {likes} likes!
    </Button>
  );
};
