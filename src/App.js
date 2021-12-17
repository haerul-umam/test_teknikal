import Info from "./components/card/Info";
import {API} from "./config/api"
import {useState, useEffect} from "react"

function App() {
  const [data, setData] = useState([])

  const getAllData = async () => {
    try {
        const response = await API.get("/posts")
        setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllData()
  //eslint-disable-next-line
  },[])

  return (
    <div className="App">
      <div className="d-flex flex-wrap">
        {
          data.map((item) => {
            return <Info key={item.id} data={item}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
