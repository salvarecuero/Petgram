import React from 'react';
import { PhotoCardWithquery } from '../container/PhotocardWithQuery';
import { Layout } from '../components/Layout';

export const Detail = ({ detailId }) => {
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithquery id={detailId} />
    </Layout>
  );
};
