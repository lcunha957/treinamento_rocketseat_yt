import { Component } from 'react';
import './styles/global.css';
import './styles.css';
// NÃO ESTÁ IMPORTANDO A CLASSE UPLOAD!


class App extends Component {
 render(){
  return(
    <body>
    <div class="container">
      <div class="content">
          <p> Eu sou um teste </p>
          <Upload/>
      </div>
      </div>
    </body>
  
  ); 
   }
}

export default App;
