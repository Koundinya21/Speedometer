// // Write your code here
// import {Component} from 'react'

// import './index.css'

// class Speedometer extends Component {
//   state = {count: 0}

//   Accelerate = () => {
//     const {count} = this.state
//     if (count < 200) {
//       this.setState(previousState => ({
//         count: previousState.count + 10,
//       }))
//     }
//   }

//   Breaking = () => {
//     const {count} = this.state
//     if (count > 0) {
//       this.setState(previousState => ({
//         count: previousState.count - 10,
//       }))
//     }
//   }

//   render() {
//     const {count} = this.state
// return (
//   <div className="container">
//     <h1 className="Heading">SPEEDOMETER</h1>
//     <img
//       src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
//       alt="Speedometer"
//       className="img"
//     />

//     <h1 className="heading2">Speed is {count}mph</h1>
//     <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
//     <div className="ButtonsContainer">
//       <button
//         type="button"
//         onClick={this.Accelerate}
//         className="Accelerate-btn"
//       >
//         Accelerate
//       </button>
//       <button type="button" onClick={this.Breaking} className="Brake-btn">
//         Apply Brake
//       </button>
//     </div>
//   </div>
// )
//   }
// }

// export default Speedometer

import {useState} from 'react'
import './index.css'

const Speedometer = () => {
  const [count, setCount] = useState(0)
  const Accelerate = () => {
    if (count < 200) {
      setCount(prev => prev + 10)
    }
  }
  const Breaking = () => {
    if (count > 0) {
      setCount(prev => prev - 10)
    }
  }

  return (
    <div className="container">
      <h1 className="Heading">SPEEDOMETER</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        alt="Speedometer"
        className="img"
      />

      <h1 className="heading2">Speed is {count}mph</h1>
      <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
      <div className="ButtonsContainer">
        <button type="button" onClick={Accelerate} className="Accelerate-btn">
          Accelerate
        </button>
        <button type="button" onClick={Breaking} className="Brake-btn">
          Apply Brake
        </button>
      </div>
    </div>
  )
}

export default Speedometer
