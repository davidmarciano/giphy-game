import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { itemClicked } from './actions';
import { getFavoritesData } from './selectors';
import { getKeyword } from '../Search/selectors';

class Favorites extends React.Component {
    render() {
        const {children, searchKeyword, data, onGalleryItemClicked } = this.props;
        const favoritesData = data[searchKeyword];
        const childProps = { favoritesData, searchKeyword, onGalleryItemClicked };
        return <Fragment>{children(childProps)}</Fragment>;
    }
}

const mapStateToProps = (state) => ({
    data: getFavoritesData(state),
    searchKeyword: getKeyword(state)
});

const mapDispatchToProps = (dispatch) => ({
    onGalleryItemClicked:(searchKeyword, itemData) => dispatch(itemClicked(searchKeyword, itemData))
});

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);