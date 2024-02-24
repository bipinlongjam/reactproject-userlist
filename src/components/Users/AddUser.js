import React, { useRef, useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const nameInputref = useRef();
    const ageInputref = useRef();
    const collegeInputref = useRef();
    // const[enteredUsername, setEnteredUsername] = useState('')
    // const[enteredAge, setEnteredAge] = useState('')
    const[error, setError] = useState()

    const AddUserHandler =(event)=>{
        event.preventDefault();
       const enteredName = nameInputref.current.value;
       const entererUserAge = ageInputref.current.value;
       const enterCollege = collegeInputref.current.value;
        if(enteredName.trim().length === 0 || entererUserAge.trim().length === 0 || enterCollege.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message:'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if(+entererUserAge < 1){
            setError({
                title: 'Invalid Age',
                message:'Please enter a valid age (>0).'
            })
            return;
        }
        // console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredName, entererUserAge, enterCollege);
        // setEnteredUsername('');
        // setEnteredAge('');
        nameInputref.current.value ='';
        collegeInputref.current.value = '';
        ageInputref.current.value = '';
    }
    // const usernameChangeHandler = (event) =>{
    //     setEnteredUsername(event.target.value)
    // }
    // const ageChangeHandler = (event) =>{
    //     setEnteredAge(event.target.value)
    // }
    const errorhandler =()=>{
        setError(null)
    }
  return (
        
            <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorhandler}/>}
        <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" 
            type="text" 
            // value={enteredUsername} 
            // onChange={usernameChangeHandler}
            ref={nameInputref}
            />
            <label htmlFor="college">College</label>
            <input id="college" 
                type="text" 
                ref={collegeInputref}
            />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" 
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputref}
            />
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </Wrapper>

  )
}

export default AddUser