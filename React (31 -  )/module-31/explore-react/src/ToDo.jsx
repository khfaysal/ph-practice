export default function ToDo({ task, isDone }) {
    const ss = {
        color: "gray",
        textAlign: 'center',
    }

    if (isDone) {
        return (

            <p style={ss}>Done {task}</p>
        )
    }
    else {
        return (

            <p style={ss}> Pending {task}</p>
        )
    }

}
