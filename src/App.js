import Layout from './components/Layout/Layout'
import Card from './components/Card/Card'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <Card questionId={1} question="What is the symbor for the EOS Blockchain?"/>
      </Layout>
    </div>
  );
}

export default App;
