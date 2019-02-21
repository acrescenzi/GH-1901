import React from 'react';

const CampusList = (props) => {
  return (
    <ul>
    {
      props.campuses.map(campus =>
        <li key={campus.id}>{ campus.name }</li>
      )
    }
    </ul>
  );
};

export default CampusList;
