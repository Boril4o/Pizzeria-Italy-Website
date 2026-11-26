import './App.css'
import Navbar from "./components/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import { APIProvider } from '@vis.gl/react-google-maps';


export default function App() {
    const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
      <APIProvider apiKey={API_KEY}>
          <main className="bg-(--black)">
              <Navbar/>

              <Routes>
                  <Route path="/" element={<Home />} />
                  {/* Catch-all 404 page if someone types a random URL */}
                  <Route path="*" element={<h1>404 - Page Not Found</h1>} />
              </Routes>
          </main>
      </APIProvider>
  )
}