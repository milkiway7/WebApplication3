import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';
import AddProject from './Components/AddProject';

const home = document.getElementById('home');
if (home) ReactDOM.render(<Home />, home);

const addProject = document.getElementById('add-project');
if (addProject) ReactDOM.render(<AddProject />, addProject);