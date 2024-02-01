import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";

import BookingForm from "./components/BookingForm";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/book/:id" element={<BookingForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
