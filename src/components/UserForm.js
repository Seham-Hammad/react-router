import React from 'react';
import { tsPropertySignature } from '@babel/types';

const UserForm = (props) => {
  return (
    <form onSubmit={props.getUser}>
      <input style={{ margin:"20px auto", display:"block" }} type="text" name="username"/>
      <button>Submit</button>
    </form>
  );
}

export default UserForm;
