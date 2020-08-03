import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

function Collection(props) {
  const { title, items } = props;
  const previewNum = 4;

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, previewNum).map((item) => {
          return <CollectionItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Collection;
