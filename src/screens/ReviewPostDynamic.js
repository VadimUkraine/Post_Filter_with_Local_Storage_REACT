import React from 'react';
import DynamicImport from '../components/DynamicImport';

const ReviewPostDynamic= (props) => (
  <DynamicImport load={() => import('../components/ReviewPost/ReviewPost')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

export default ReviewPostDynamic;