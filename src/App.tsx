import logo from './logo.svg'
import './App.css'
import PageHeader from './components/PageHeader';
import Products from './features/products';
function App() {
  return (
    <div className="App">
      <PageHeader />
      <Products />
    </div>
  )
}

export default App
