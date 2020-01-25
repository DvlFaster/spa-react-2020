import React from 'react';
import QuantityInput from '../components/QuantityInput'


class Home extends React.Component {
    
 

    render()  {
      return <div className= "w-25 p-3"> 
      
          <QuantityInput count={5}/>
          
          
      </div>
    }

  }
  
  export default Home;