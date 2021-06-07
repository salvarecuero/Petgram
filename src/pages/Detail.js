import React from 'react';
import { PhotoCardWithquery } from '../container/PhotocardWithQuery';

export const Detail = ({ detailId }) => {
  return (<PhotoCardWithquery id={detailId} />);
};
