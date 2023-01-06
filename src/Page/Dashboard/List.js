import React from 'react'
import { studentData } from '../../data';
import Add from './Add';
 import result from '../result';
 import { Scrollbars } from 'react-custom-scrollbars';
function List({ students, handleEdit, handleDelete, }) {

    

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table'>  
          <Scrollbars style={{width:"100%" , height:"390px"}}>
            <table className='striped-table'>
                
       
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Roll no.</th>
                        <th>Check-In</th>
                        <th>Check-Out</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student, i) => (
                            <tr key={student.id}>
                                <td>{i + 1}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td> 
                                <td>{student.Rollno}</td>
                                <td>{student.Checkin}</td>
                                <td>{student.Checkout}</td>
                               
                                <td className="text-right">
                                    
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(student.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>                                                               
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Students</td>
                        </tr>
                    )}
                </tbody>
            </table> </Scrollbars>
            <button className='btn-tn'>
                Total Students = {students.length}
            </button>
        </div>
    )
}

export default List