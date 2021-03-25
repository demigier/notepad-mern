import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import { NoteList } from './components/Notes/NoteList';
import { NoteForm } from './components/Notes/NoteForm';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { ErrorPage } from './components/ErrorPage/ErrorPage';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import 'typeface-roboto';

library.add(fas)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Navbar/>

      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={NoteList} />
          <Route exact path="/error" component={ErrorPage} />
          <Route path="/new-note" component={NoteForm} />
          <Route path="/update/:id" component={NoteForm} />
          <Route component={ErrorPage} />
        </Switch>
        <ToastContainer />
      </div>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
