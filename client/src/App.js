import AppNavbar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider} from 'react-redux';
import store from './store';  
import { Component } from 'react';
import { Container} from 'reactstrap';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
          <Container>
            <ItemModal/>
            <ShoppingList/>
          </Container>
        </div>
      </Provider>
    )
  }
}

export default App;
