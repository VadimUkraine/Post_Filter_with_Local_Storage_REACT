import React from 'react';
import DynamicImport from '../components/DynamicImport';

const PostsListDynamic = (props) => (
  <DynamicImport load={() => import('../components/PostsList/PostsList')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

export default PostsListDynamic;