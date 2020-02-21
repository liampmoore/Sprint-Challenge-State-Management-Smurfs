import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/smurfActions'

class smurfList extends React.Component {

    componentDidMount() {
        console.log(this.props)
        this.props.getSmurfs()
    }
    render() {
        return (
            <div>
                {(this.props.smurfs.length === 0) && <p>No smurfs!</p>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurfs })(smurfList)