import logo from './logo.svg';
import './PageHeader.css';
import {  useAppSelector } from '../../app/hooks';
export default function PageHeader() {
  const quantity = useAppSelector(state => 
    state.products.data.reduce((acum, d) =>  acum + d.quantity, 0));

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React!</p>
      <p> Cart {quantity}</p>
      <button>reset</button>
    </header>
  );
}