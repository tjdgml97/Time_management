import React from 'react'
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import CreateList from '../components/CreateList';
import UpdateList from '../components/UpdateList';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigate(props){

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const close = () => setModalIsOpen(false);
  const open = () => setModalIsOpen(true);


  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(
    <ol key={t.id}>
      
      <div>
      <Card border="success" style={{ width: '20rem' }}>
        <Card.Header>      
           <Button  style={{position: 'absolute', right: 0, marginRight: "30px"}}  variant="outline-danger" onClick={()=>{
        const newlis = [];

        for(let j = 0;j<props.topics.length; j++) {
          if(props.topics[j].id !== t.id) {
            newlis.push(props.topics[j]);
          }
        }
        props.setTopics(newlis);

      }}>완료</Button>

{/* <Button  variant="outline-warning" onClick={
        ()=>
        {
          setModalIsOpen(true);
          let title,detail = null;
        for (let j = 0; j < props.topics.length; j++) {
          if (props.topics[j].id === t.id) {
            title = props.topics[j].title;
            detail = props.topics[j].detail;
          }
        }
        }
      }>update</Button>{' '} */}
            <Modal show={modalIsOpen} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>목표 생성하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <UpdateList 
        setModalIsOpen={setModalIsOpen}
        title={t.title} 
        detail={t.detail}
         onUpdate={(title,detail)=>{
      const newTopics = [...props.topics]
      const updateTopic = {id:t.id, title:title, detail:detail};
      for(let i=0; i<newTopics.length; i++) {
        if(newTopics[i].id ===t.id) {
          newTopics[i] = updateTopic;
          break;
        }
      }
      props.setTopics(newTopics);
    }}></UpdateList>
        </Modal.Body>
      </Modal>
      <Card.Title>{t.title}</Card.Title>
     </Card.Header>
        <Card.Body>
          <Card.Title> </Card.Title>
          <Card.Text>
          {t.detail}
          {/* <Button variant="outline-warning" onClick={
        ()=>
        {
          setModalIsOpen(true);
          let title,detail = null;
        for (let j = 0; j < props.topics.length; j++) {
          if (props.topics[j].id === t.id) {
            title = props.topics[j].title;
            detail = props.topics[j].detail;
          }
        }
        }
      }>update</Button>{' '}
            <Modal show={modalIsOpen} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>목표 생성하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <UpdateList 
        setModalIsOpen={setModalIsOpen}
        title={t.title} 
        detail={t.detail}
         onUpdate={(title,detail)=>{
      const newTopics = [...props.topics]
      const updateTopic = {id:t.id, title:title, detail:detail};
      for(let i=0; i<newTopics.length; i++) {
        if(newTopics[i].id ===t.id) {
          newTopics[i] = updateTopic;
          break;
        }
      }
      props.setTopics(newTopics);
    }}></UpdateList>
        </Modal.Body>
      </Modal> */}

      {/* <Button variant="outline-danger" onClick={()=>{
        const newlis = [];

        for(let j = 0;j<props.topics.length; j++) {
          if(props.topics[j].id !== t.id) {
            newlis.push(props.topics[j]);
          }
        }
        props.setTopics(newlis);

      }}>delete</Button> */}

          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      </div>
       <div>
       
       </div>


    </ol>)
  }
  return <div>
    <ol>
      {lis}
    </ol>
  </div>
}


export const Todo= () => {

  // const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(0);
  const [nextId, setNextId] = useState(3);

  const [topics, setTopics] = useState([
    {id:1, title:'ds 복습하기', detail:'ch1-10'},
    {id:2, title:'리팩토링', detail:'모앱개 프로젝트 참고'},
    // {id:3, title:'javascript', detail:'javascript is ...'}
  ]);
  let content = null;

     let title, detail = null;
    for(let i=0; i<topics.length; i++){
      console.log(topics[i].id, id);
      if(topics[i].id === id){
        title = topics[i].title;
        detail = topics[i].detail;
      }
    }



  const [modalIsOpen, setModalIsOpen] = useState(false);


  const close = () => setModalIsOpen(false);
  const open = () => setModalIsOpen(true);

  return (
    <div >
       <Navbar bg="light" variant="light">
         <Container>
           <Navbar.Brand href="#home">Home</Navbar.Brand>
           <Nav className="me-auto">
             <Nav.Link href="#home">Timetable</Nav.Link>
             <Nav.Link href="#features">Todolist</Nav.Link>
             <Nav.Link href="#pricing">Project_manage</Nav.Link>
           </Nav>
         </Container>
       </Navbar> 
          <Container style={{width:"60rem"}}>
          <p></p>
          <h2>Todolist</h2>
          <p></p>

          <Button  style={{position: 'absolute', right: 0, marginRight: "30px"}} variant="light" onClick={()=>setModalIsOpen(true)}>일정추가</Button>{' '}

    <div>
    
    
      <Navigate topics={topics} setTopics={setTopics} onChangeMode={(_id)=>{
       // setMode('READ');
        setId(_id);
      }}></Navigate>
{/* 
      <Link to ="/about">go to about</Link>
      <button onClick={goCreate}> gotoHome</button> */}
  
      <Modal show={modalIsOpen} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>목표 생성하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <CreateList setModalIsOpen={setModalIsOpen}
         onCreate={(_title, _detail)=>{
      const newTopic = {id:nextId, title:_title, detail:_detail}
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setId(nextId);
      setNextId(nextId+1);
    }}></CreateList>

          {/* < CreateList setModalIsOpen={setModalIsOpen} /> */}
        </Modal.Body>
      </Modal>
    </div>
    </Container>
    </div>
  )
}

export default Todo;



// import {useState} from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Header(props){
//   return<header>
//     <h1><a href="/" onClick={(event)=>{
//       event.preventDefault();
//       props.onChangeMode();
//     }}>{props.title}</a></h1>
//   </header>
// }

// function Navi(props) {
//   const lis = []
//   for(let i=0; i<props.topics.length; i++) {
//     let t = props.topics[i];
//     lis.push( <li key={t.id}>
//       <a id ={t.id} href={'/read/'+t.id} onClick={event=>{
//         event.preventDefault();
//         props.onChangeMode(Number(event.target.id));
//       }}>{t.title}</a>
//     </li>)
//   }
//   return<nav>
//     <ol>
//       {lis}
//     </ol>
//   </nav>

// }
// function Create(props) {
//   return <article>
//     <h2>Create</h2>
//     <form onSubmit = { event => {
//       event.preventDefault();
//       const title = event.target.title.value;
//       const body = event.target.body.value;
//       props.onCreate(title, body);
//     }}>
//       <p><input type="text" name="title" placeholder="title"/></p>
//       <p><textarea name="body" placeholder="body"></textarea></p>
//       <p><input type="submit" value="Create"></input></p>
//     </form>
//   </article>
// }

// function Article(props) {
//   return <article>
//     <h2>{props.title}</h2>
//     {props.body}
//   </article>
// }

// function Todo() {
//   const [mode, setMode] = useState("welcome");
//   const [id, setId]  = useState(null);
//   const [nextId, setNextId] = useState(4);
//   const [topics, setTopics] = useState([
//     {
//     id:1,
//     title: 'html',
//     body: 'html is ...',
//     },
//     {
//       id:2,
//       title:'s',
//       body: 'css is...',
//     },
//     {
//       id:3,
//       title: 'js',
//       body: 'js is...',
//     }
//   ]);
//   let content = null;
//   if(mode === 'welcome') {
//     content = <Article title = 'welcome' body ='hello,web'></Article>
//   } else if(mode ==='read'){
//     let title , body = null;
//     for(let i=0 ; i<topics.length; i++){
//       if(topics[i].id === id) {
//         title = topics[i].title;
//         body = topics[i].body;
//       }
//     }

//     content = <Article title ={title} body={body}></Article>
//   } else if(mode==="create") {
//     content = <Create 
//     onCreate={(_title, _body)=>{
//       const newTopic = {id:nextId, title:_title, body:_body}
//       const newTopics = [...topics]
//       newTopics.push(newTopic);
//       setTopics(newTopic);
//       setMode('read');
//       setId(nextId);
//       setNextId(nextId+1);
//     }}
//     ></Create>
//   }

//   return (
//     <div>
//       <Navbar bg="light" variant="light">
//         <Container>
//           <Navbar.Brand href="#home">Home</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Timetable</Nav.Link>
//             <Nav.Link href="#features">Todolist</Nav.Link>
//             <Nav.Link href="#pricing">Project_manage</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <Header title="WEB" onChangeMode = {()=>{
//         setMode('welcome');
//       }}></Header>
//       <Navi topics={topics} onChangeMode = {(_id)=> {
//         setMode('read');
//         setId(_id);
//       }}></Navi>
//       {content}
//       <a href="/Create" onClick={event=> {
//         event.preventDefault();
//         setMode('create');
//       }}>Create</a>
//     </div>
//   );
// }

// export default Todo;
