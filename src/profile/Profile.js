import React from 'react';
import PropTypes from 'prop-types';


const Profile = props => {
  return (
  <>
  <h1>Name: {props.FullName}</h1>
  <h2>Bio: {props.Bio} </h2>
  <h2>Job: {props.Job} </h2>
  <img src={props.children} alt="sung" />
  <button onClick={() =>props.HandleName(props.FullName)}>
      Alert
    </button>
  </>
  );

}
Profile.propTypes ={
  FullName:PropTypes.string,
  Bio:PropTypes.string,
  Job:PropTypes.string,
}
Profile.defaultProps ={ 
  FullName:"Youssef Hammi",
  Job:"Web and Game Dev ",
  Bio:"17 Yo highschool student who plays a lot of games",
}
export default Profile
