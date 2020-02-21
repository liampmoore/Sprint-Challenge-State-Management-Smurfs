import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/smurfActions'

class smurfList extends React.Component {

    componentDidMount() {
        this.props.getSmurfs()
    }
    render() {
        return (
            <div>
                {
                    (this.error && <p>{this.error}</p>)
                    || ((this.props.smurfs.length === 0) && <p>No smurfs!</p>)
                    || this.props.smurfs.map(smurf => <p key={smurf.id}>{smurf.name}</p>)
                }
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