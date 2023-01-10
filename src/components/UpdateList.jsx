import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";

export const UpdateList = (props:any) => {

  const [title, setTitle] = useState(props.title);
  const [detail, setDetail] = useState(props.detail);



  const onSubmit = (event:any) => {
    event.preventDefault();

  }

  const onCreate = (title:any,detail:any) => {
    const newTopic = {}

   }

   
  return (
    <div>
      <h2>Update</h2>
     <Form onSubmit={(event) => {
      event.preventDefault();
      const title = event.currentTarget.title.valueOf;
      const detail = event.currentTarget.detail.value;
      console.log(title);
      props.onUpdate(title,detail);
     }}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>할일 제목</Form.Label>
        <Form.Control type="text" placeholder="title" name="title" value={title} onChange={(event)=>{
          setTitle(event.target.value); }}
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" >
        <Form.Label>세부사항</Form.Label>
        <Form.Control type="text" placeholder="세부사항을 입력해주세요" name="detail" 
         value = {detail}
         onChange = {(event) => {
           setDetail(event.target.value);
         }}
          />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
   
      <Button variant="outline-success" type='submit' value="Update">Update</Button>{' '}

    </Form>
    </div>
  );
}

export default UpdateList;