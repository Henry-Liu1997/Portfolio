import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

import beach from './images/beach_resort.jpg';

import './App.scss';

export default function App() {
  return (
    <section className="content">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Projects} img={beach} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </section>
  );
}
