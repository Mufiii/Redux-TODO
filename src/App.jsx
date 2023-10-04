import Todo from "./Components/Todo"
import store from "./utils/Store"
import { Provider } from "react-redux"


function App() {
  
  
  return (  

      <div> 
        <Provider store={store}>
          <Todo/>
        </Provider>
      </div>

  )
}

export default App
