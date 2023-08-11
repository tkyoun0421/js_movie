import { Component } from './core/heropy';
import App from './App';

const root = document.querySelector('#root');
root.append(new App().el);
