import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const HandleName = ({persons}) => (
    persons.map(name => <p>{name.name}</p>)
)


export default HandleName