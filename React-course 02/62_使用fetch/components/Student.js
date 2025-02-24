import React from 'react';

const Student = ({stu:{name, age, gender, address}}) => {
    // {stu:{name, age, gender, address}} = props 相当于在解构赋值

    return (
            <tr>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{age}</td>
                <td>{address}</td>
            </tr>
    );
};

export default Student;
