import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./layout/Layout.tsx";

function App() {

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Layout>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<Home/>}/>
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
