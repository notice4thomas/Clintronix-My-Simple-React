import React from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
    border:none;
    border-bottom: 1px solid white;
    width: 300px;
    background-color: #282A32;
    color: white;
`;

const Label = styled.label`
    color: white;
    padding-bottom: 60px;
    font-size: 1.2em;

    

`;
const Form = styled.form`
text-align:center;
margin-right: 80%;
`;
class Input extends React.Component {

    render () {

        return (
            <Form>
                <Label>UserName</Label><br/>
                <InputBox type="text"></InputBox><br/><br/>
                <Label>Password</Label><br/>
                <InputBox type="text"></InputBox><br/>
            </Form>
        );
    }
}

export default Input;