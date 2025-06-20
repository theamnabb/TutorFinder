import Header from "./components/Header";

function App() {
  return (
    <>
      <h1 className="font-bold text-3xl text-center text-yellow-500">Helo</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
