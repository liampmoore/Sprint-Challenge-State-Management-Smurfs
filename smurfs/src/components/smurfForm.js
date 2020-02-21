import React, {useState} from 'react';
import { connect } from 'react-redux';
import {addSmurf} from '../actions/smurfActions';

import {Button, TextInput, Text} from 'grommet';


const SmurfForm = (props) => {
    const [value, setValue] = useState({
        name: '',
        age: '',
        height:''
    })

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addSmurf({
            name: value.name,
            age: value.age,
            height: value.height
        })
    }

    return (
        <form noValidate onSubmit={(e) => {handleSubmit(e)}}>
            <TextInput name='name' placeholder='name' value={value.name} onChange={(e) => {handleChange(e)}}/>
            <br/>
            <TextInput name='age' placeholder='age' type='number' value={value.age} onChange={(e) => {handleChange(e)}}/>
            <br/>
            <TextInput name='height' placeholder='height' value={value.height} onChange={(e) => {handleChange(e)}}/>
            <br/>
           <Button color='focus' fill label='Add Smurf'/>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        isPosting: state.isPosting,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);