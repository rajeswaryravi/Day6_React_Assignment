import logo from './logo.svg';
import './App.css';
import StyleExample from './components/StyleExample.js'
import LoginForm from './components/LoginForm.jsx'
import DisabledForms from './components/DisabledForms.jsx'
import FormControl from './components/FormControl.jsx'
import Layout from './components/Layout.jsx'
import FormValidation from './components/FormValidation.jsx'
import Grid from './components/Grid';
import Alerts from './components/Alerts'
import Carousel from './components/Carousel'
import Progress from './components/Progress'
import Tooltips from './components/Tooltips'
import Tables from './components/Tables'
import Popovers from './components/Popovers';
function App() {
  return (
    <div className="App">
      {/* <StyleExample /> */}
      <LoginForm />
      <DisabledForms />
      <FormControl />
      <Layout />
      <FormValidation />
      <Grid />
      <Alerts />
      <Carousel />
      <Progress />
      <Tooltips />
      <Tables />
      <Popovers />
    </div>
  );
}

export default App;
