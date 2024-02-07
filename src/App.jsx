import { useState } from 'react'
import './App.css'
import { Home } from '../components/Home';
import { History } from '../components/History';
import 'bootstrap/scss/bootstrap.scss';
import { Form } from '../components/Form'
import { Bemutato } from '../components/Bemutato';
import { Raktar } from '../components/Raktar';



function App() {
  return (
    <div>
    <Bemutato/>
     <Home/>
     <History />
    <Form/>
    <Raktar/>
    </div>
  );
}

export default App;
