import './_global.css';
import PageLayout from './components/PageLayout';
import Products from './features/products';
function App() {
  return (
    <div className="App-container">
      <PageLayout>
        <Products />
      </PageLayout>
    </div>
  )
}

export default App
