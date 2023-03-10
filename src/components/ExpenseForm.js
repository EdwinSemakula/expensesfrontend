import { Form, Row, Col, Button } from "react-bootstrap";
import { React, useState, useEffect } from 'react';
import { DeleteExpense, EditExpense, NewExpense } from "../services/expenses";
import { useDispatch } from "react-redux";

export default ({ expense, setIsEditing}) => {
    const descriptions = ['Groceries', 'Rent', 'Bills', 'Clothes Shopping', 'Restaurants'];
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState(descriptions[0]);
    const [isNewExpense, setIsNewExpense] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if(expense !== undefined){
            setIsNewExpense(false);
            setAmount(expense.amount);
        }
        else {
            setIsNewExpense(true);
        }
    }, [expense]);

    return <Form
        onSubmit={event => {
            event.preventDefault();
            if(isNewExpense) {
                NewExpense(dispatch, {description: description, amount: amount});
            }
            else{
                EditExpense(dispatch, {id: expense.id, description: description, amount: amount});
                setIsEditing(false);
            }
        }}
    >
        <Row>
            <Col>
                <Form.Label></Form.Label>
                <Form.Control as='select'
                onChange={event => setDescription(event.target.value)}>
                    {descriptions.map(b => <option>{b}</option>)}
                </Form.Control>
            </Col>
            <Col>
                <Form.Label></Form.Label>
                <Form.Control type='number' step='0.01'
                placeholder={amount}
                onChange={event => setAmount(event.target.value)}/>
            </Col>
            <Col>
            <div style={{ marginTop: 23 }}>
            
                {isNewExpense
                ? <Button variant='primary' type='submit'>Add</Button>
                : <div>
                    <Button style={{ marginRight: '2px'}} variant='danger' 
                     onClick={() => DeleteExpense(dispatch, expense)}>Delete</Button>
                    <Button style={{ marginRight: '2px'}} variant='success'>Save</Button>
                    <Button style={{ marginRight: '2px'}} variant='default' 
                    onClick={() => setIsEditing(false)}>Cancel</Button>
                    </div>}   
            </div>
            </Col>
            
        </Row>
    </Form>
}