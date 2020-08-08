import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Collection from '../../components/collection/collection.component';
import { selectCollections } from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map((collection) => (
        <Collection
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
