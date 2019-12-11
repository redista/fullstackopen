import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const HandleName = ({persons}) => (
    persons.map(person => <p>{person.name} {person.number}</p>)
)


export default HandleName