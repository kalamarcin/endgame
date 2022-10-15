import Button from "./components/atoms/Button/Button";
import AppCss from './App.module.css'

const App = () => {
  return (
    <div className={AppCss.app_card}>

      <Button type='button' name='Button'/>

    </div>
  );
}

export default App;
