import React from 'react';
import QuantityInput from '../components/QuantityInput'



class Home extends React.Component {
    
    constructor(props){
      super(props);
      this.state = {
        counts: [1,2,3,4,5]
      }
    }
    getQuantityInputs = () => {
      const counts = this.state.counts;

      const inputs = counts.map(element => {
        return < getQuantityInput
          key={element}
          count={element}/>
      })

      return inputs;
    }
    changeCounts = () => {
      this.setState({
        counts: [7, 2]
      })
    }
    render ()  {
      return <div className= "w-25 p-3">  
      <button
            onClick={this.changeCounts}
            type="button"
            className="btn btn-primary"
            >Change Counts</button>
      <QuantityInput count={5}/>
         {this.getQuantityInputs()}    

  <a href="#" class="list-group-item list-group-item-action list-group-item-success">This color is for the positive numbers.</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-info">This color is between positive and negative numbers.</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-danger">This color is for negative numbers.</a>
  

         
      </div>
    }

  }
  
  export default Home;