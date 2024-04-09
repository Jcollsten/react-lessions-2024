import React, { Component } from 'react';

export function TraditionalGreeting(props) {
  return (
    <>
      <h2>Welcome to {props.name} React-sandbox</h2>
    </>
  );
}

export const Greet = (props) => <h3>{`Welcome again ${props.name}, but with a Arrow-Fuction `}</h3>;

export function UserProfile2({ name, age, location }) {
  return (
    <>
      <h2>Welcome {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Location: {location}</h2>
    </>
  );
}
