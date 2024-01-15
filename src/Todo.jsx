
// export default function Todo({task}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }

// export default function Todo({task, isDone}){
//     return(
//     <li>{isDone ? "Finished" : "Work on"}: {task}</li>
//     )
// }


// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && ": done"}</li>
//     )
// }


// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone || ": do it"}</li>
//     )
// }


export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        return listItem = <li>Finished: {task}</li>
    }
    else{
        return listItem = <li>Work on: {task}</li>
    }
}