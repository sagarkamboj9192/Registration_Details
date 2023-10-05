import React from 'react';
import axios from 'axios';
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from 'react';
function Studentdetail() {
    const [ListofStudents, setListofStudents] = useState([]);

    

    useEffect(() => {
        axios.get("http://localhost:8002/data").then((response) => {
            // console.log(response.data);
            setListofStudents(response.data);
        });
    }, []);

    const deletebutt = (id) => {
        axios.delete(`http://localhost:8002/data/byid/${id}`).then(() => {
            // Update the list after deletion
            axios.get("http://localhost:8002/data").then((response) => {
                setListofStudents(response.data);
            });
        }).catch(error => {
            console.error("Error deleting student:", error);
        });
    };

    

    return (
        <div>
            {ListofStudents.map((value) => {
                return (
                        
                        <div className="post" key={value._id}>
                            <div className="title">Name:= {value.name} </div>
                            <div className="title">Roll No:={value.rollno}</div>
                            <div className="title">E-mail Id:={value.email}</div>
                            <div className="title">Phone No:={value.phone}</div>
                            <div className="title">Residential Address:={value.address}</div>
                            <button onClick={() => deletebutt(value._id)}>Delete</button>
                        </div>
                    
                );
            })}
        </div>
    );
}
export default Studentdetail;