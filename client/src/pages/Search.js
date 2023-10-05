import React from 'react'
import axios from 'axios'
import { useState } from 'react';
function Search() {
    const [ListofStudents, setListofStudents] = useState([]);

    const [searchRoll, setSearchRoll] = useState("");
    const onSearchSubmit = (e) => {
        // useEffect(() => {
        e.preventDefault();
        axios.get(`http://localhost:8002/data/roll/${searchRoll}`).then((response) => {
            setListofStudents(response.data);
        }).catch(error => {
            console.error("Error searching student:", error);
        });
        // }, [])

    };
    return (
        <>
        <div className="searchform">
            <form onSubmit={onSearchSubmit}>
                <h2>Search by Roll No -</h2>
                <input
                    autoComplete="off"
                    type="number"
                    value={searchRoll}
                    onChange={(e) => setSearchRoll(e.target.value)}
                />
                <button type="submit"> Search</button>
            </form>
        </div>
        <div>
        {ListofStudents.map((value) => {
            return (
                    
                    <div className="post" key={value._id}>
                        <div className="title">Name:= {value.name} </div>
                        <div className="title">Roll No:={value.rollno}</div>
                        <div className="title">E-mail Id:={value.email}</div>
                        <div className="title">Phone No:={value.phone}</div>
                        <div className="title">Residential Address:={value.address}</div>
                    </div>
                
            );
        })}
    </div>
    </>
    )
}

export default Search;
