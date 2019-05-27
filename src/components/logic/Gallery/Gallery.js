import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { itemClicked } from './actions';
import { getGalleryData } from './selectors';
import { getKeyword } from '../Search/selectors';

class Gallery extends React.Component {
    render() {
        const {children, galleryData, searchKeyword, onGalleryItemClicked} = this.props;
        const childProps = {
            galleryData, searchKeyword, onGalleryItemClicked
        };
        return <Fragment>{children(childProps)}</Fragment>;
    }
}

const mapStateToProps = (state) => ({
    galleryData: getGalleryData(state),
    searchKeyword: getKeyword(state),
});

const mapDispatchToProps = (dispatch) => ({
    onGalleryItemClicked:(searchKeyword, itemData) => dispatch(itemClicked(searchKeyword, itemData))
});

export default connect(mapStateToProps,mapDispatchToProps)(Gallery);