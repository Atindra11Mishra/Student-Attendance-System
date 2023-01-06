import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ students, setStudents, setIsAdding, Total }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Rollno, setRollno] = useState('');
    const [Checkin, setCheckin] = useState('');
    const [Checkout, setCheckout] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        

        const id = students.length + 1;
        const newStudent = {
            id,
            firstName,
            lastName,
            Rollno,
            Checkin,
            Checkout
        }
        students.push(newStudent);
        setStudents(students);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Student</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
               
                <label htmlFor="Roll no.">Roll no.</label>
                <input
                    id="Roll no."
                    type="number"
                    name="Roll no."
                    value={Rollno}
                    onChange={e => setRollno(e.target.value)}
                />
                 <label htmlFor="Check-in">Check-in</label>
                <input
                    id="Check-in"
                    type="time"
                    name="Check-in"
                    value={Checkin}
                    onChange={e => setCheckin(e.target.value)}
                />
                <label htmlFor="Check-out">Check-out</label>
                <input
                    id="Check-out"
                    type="time"
                    name="Check-out"
                    value={Checkout}
                    onChange={e => setCheckout(e.target.value)}
                />
                
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
            
        </div>
        
    );
}

export default Add