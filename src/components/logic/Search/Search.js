import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { startSearch } from "./actions";
import { getKeyword } from './selectors';
import { TimeOutHandler } from './utils';

class Search extends React.Component {
    onSearch = (query) => {      
        const { startSearch } = this.props; 
        TimeOutHandler.clear();
        TimeOutHandler.start(startSearch,query,500);
    };
    render() {
        const {children} = this.props;
        const childProps = {
            onSearch: this.onSearch,
            getKeyword
        };
        return <Fragment>{children(childProps)}</Fragment>;
    }
}

const mapStateToProps = (state) => ({
    getKeyword: getKeyword(state)
});

const mapDispatchToProps = (dispatch) => ({
    startSearch: (query) => dispatch(startSearch(query))
});

export default connect(mapStateToProps,mapDispatchToProps)(Search);