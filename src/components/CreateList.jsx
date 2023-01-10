import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const CreateList = (props) => {



  const onSubmit = (event) => {
    event.preventDefault();

  }

  // const onCreate = (title,detail) => {
  //   const newTopic = {}

  //  }

  return (
     <Form onSubmit={(event) => {
      event.preventDefault();
      const t = event.currentTarget.title;
      //event.target instanceof Element
      const title = event.currentTarget.title.value;
     // const title = event.target.title.value;
      const detail = event.currentTarget.detail.value;
      console.log(title);
      props.onCreate(title,detail);
     }}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>할일 제목</Form.Label>
        <Form.Control type="text" placeholder="할일을 입력해주세요" name="title"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" >
        <Form.Label>세부사항</Form.Label>
        <Form.Control type="text" placeholder="세부사항을 입력해주세요" name="detail" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="outline-success" type='submit'>Create</Button>{' '}

    </Form>
  );
}

export default CreateList;