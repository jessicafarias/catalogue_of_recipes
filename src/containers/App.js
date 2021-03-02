import getCategories from '../requests/getCategories';
import '../styles/App.css';

function App() {

  getCategories().then (res => {
    console.log(res);
  })
  return (
    <div className="">
      <hi>Myapp</hi>
    </div>
  );
}

export default App;
