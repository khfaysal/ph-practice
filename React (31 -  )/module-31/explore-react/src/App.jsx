import './App.css'

function App() {

  return (
    <>
      <h1>hi</h1>
      <Myself></Myself>
      <Developer name="Faysal"></Developer>
      <Developer name="hasan"></Developer>
      <Developer name="jahan"></Developer>
      <Nothing></Nothing>

    </>

  )
}

function Developer(props) {
  return (
    <div style={{
      color: 'blue',
      border: '2px solid yellow',
      borderRadius: '25px',
      background: 'gray',
    }}>

      <h1> Developer</h1>
      <p>{props.name}</p>
    </div>
  )
}



function Myself() {
  const ss = {
    color: "red",
    textAlign: 'right',
  }
  return (
    <h1> hi, i am faysal</h1 >,
    <p>i'm a student</p>,
    <p>in DIU</p>,
    <p style={ss}>seasson 2023-27</p>
  )
}

function Nothing () {
  return(
    <h1>Nothing is happening here..</h1>
  )
}


export default App
