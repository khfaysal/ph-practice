import ToDo from "./ToDo";
import Actor from "./Actor";
import Player from "./Player";
export default function App() {
  const sss = {
    color: 'red',
    textAlign: "center"
  }
  const actors = ["kamrul", "hasan", "faysal"]
  const players = [
    { id: 1, name: "Kamrul", age: 24 },
    { id: 2, name: "hasan", age: 24 },
    { id: 3, name: "faysal", age: 24 },
    { id: 4, name: "farjana", age: 24 }
  ]
  return (
    <>
      {/* <h1 style={sss}>Props Passing</h1>
      <Myself></Myself>
      <ToDo
        task="Learn React"
        isDone={true}></ToDo >
      <ToDo
        task="get some rest"
        isDone={false}></ToDo >
      <ToDo
        task="have some talk"
        isDone={true}></ToDo > */}
      {
        actors.map(actor => <Actor key={actor} actor={actor}></Actor>)
      }
      {
        players.map(pl => <Player key={pl.id} player={pl}></Player>)
      }
    </>

  )
}
// function Myself() {
//   const ss = {
//     color: "green",
//     textAlign: 'center',
//   }
//   return (
//     <h1 style={ss}> hi, i am faysal...i'm a student, currently studied in DIU</h1>
//   )
// }
