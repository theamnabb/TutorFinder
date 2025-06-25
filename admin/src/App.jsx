import SideBar from "./compontents/SideBar";
import AppRoutes from "./routes/Routes";
function App() {
 

  return (
    <>
      <main>
        <div>
        <div>
          <SideBar/>
          {/* Routes */}
          <AppRoutes/>

        </div>
        </div>
      </main>
    </>
  )
}

export default App
