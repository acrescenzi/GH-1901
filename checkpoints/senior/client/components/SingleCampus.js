import React from 'react';
import SingleStudent from './SingleStudent';

const SingleCampus = ({ campus, students }) => {
  return (
    <div>
      <h2>{ campus.name }</h2>
      { students.map(student => <SingleStudent student={student} />)}
    </div>
  );
};

export default SingleCampus;
