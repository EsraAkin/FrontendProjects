
import 'bulma/css/bulma.css'
import './App.css'
import { Course } from './Course'
import Angular from './assets/angular.jpg' ;
import BootStrap from './assets/bootstrap5.png' ;
import Csharp from './assets/ccsharp.png' ;
import KompleWeb from './assets/kompleweb.jpg' ;

function App() {
  

  return (
    <>
    
<div className='container'>
<div class="columns">
  <div class="column"> <Course 
      image={Angular}
      title="Angular"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem natus quasi necessitatibus fuga minus assumenda sunt quia aspernatur quisquam tempora enim a architecto fugit excepturi, nihil sed harum atque explicabo!"/></div>
  <div class="column"><Course 
      image={BootStrap}
      title="Bootstrap 5"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem natus quasi necessitatibus fuga minus assumenda sunt quia aspernatur quisquam tempora enim a architecto fugit excepturi, nihil sed harum atque explicabo!"/></div>
  <div class="column"> <Course 
      image={Csharp}
      title="Komple Web"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem natus quasi necessitatibus fuga minus assumenda sunt quia aspernatur quisquam tempora enim a architecto fugit excepturi, nihil sed harum atque explicabo!"/></div>
  <div class="column"> <Course 
      image={KompleWeb}
      title="Forntend"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem natus quasi necessitatibus fuga minus assumenda sunt quia aspernatur quisquam tempora enim a architecto fugit excepturi, nihil sed harum atque explicabo!"/></div>
</div>


</div>


    </>
  )
}

export default App
