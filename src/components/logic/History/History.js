import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getHistory } from './selectors';
import { historyItemClicked } from './actions';

class History extends React.Component {
    render() {
        const {children, history, onClick} = this.props;
        const childProps = {history, onClick};
        return <Fragment>{children(childProps)}</Fragment>;
    }
}

const mapStateToProps = state => ({
    history: getHistory(state)
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (keyword) => dispatch(historyItemClicked(keyword))
});


export default connect(mapStateToProps,mapDispatchToProps)(History);