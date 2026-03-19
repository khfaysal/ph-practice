import ToDo from "./ToDo";
export default function App() {
  const sss = {
    color: 'red',
    textAlign: "center"
  }
  return (
    <>
      <h1 style={sss}>Props Passing</h1>
      <Myself></Myself>
      <ToDo
        task="Learn React"
        isDone={true}></ToDo >
      <ToDo
        task="get some rest"
        isDone={false}></ToDo >
      <ToDo
        task="have some talk"
        isDone={true}></ToDo >
    </>

  )
}
function Myself() {
  const ss = {
    color: "green",
    textAlign: 'center',
  }
  return (
    <h1 style={ss}> hi, i am faysal...i'm a student, currently studied in DIU</h1>
  )
}
