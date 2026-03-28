export default function Player({ player }) {
    return (
        <div>
            <h1>Player: {player.name}</h1>
            <p>Age: {player.age}</p>
        </div>
    )
}