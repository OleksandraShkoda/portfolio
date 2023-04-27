import './App.scss';
import { Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {
  console.log('this is app');
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path ="contacts" element={<Contact/>}/>
        </Route>
    </Routes>
    </>
      );
}

export default App;
