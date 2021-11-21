import logo from './logo.svg';
import './PageHeader.css';
import {  useAppSelector } from '../../../../app/hooks';

export default function PageHeader() {
  const quantity = useAppSelector(state => 
    state.products.data.reduce((acum, d) =>  acum + d.quantity, 0));

  return (
    <header className="App-header Header">
      <div className="App-header-logo">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="no-margin">StoreFront</h1>
      </div>
      <div className="App-header-toolbar">
        <p> Cart {quantity}</p>
      </div>
    </header>
  );
}