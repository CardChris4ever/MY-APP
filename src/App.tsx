import { useState } from "react";


function App(){
  const [tareas,setTareas ]= useState<string[]>(["Estudiar React","Estudiar TypeScript","Estudiar NodeJS"]);
  const [tarea,setTarea ]= useState<string>("");

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column"}}>
      <h1>Lista</h1>
      <ul>
        {tareas.map((t, index) => (
          <li key={index}>{t}
            <button onClick={() => setTareas (
              tareas.filter((_,i) => i !== index )
              )}>X</button>
          </li>
        ))}
      </ul>
      <h2>Numero de tareas: {tareas.length}</h2>
      <input placeholder="Nombre de tu tarea" onChange={(e) => setTarea(e.target.value)} />
        <hr />
      <button value={tarea} onClick={()=> {if(tarea.trim()==="") return; setTareas([...tareas,tarea]);setTarea("")}}> Agregar Tarea</button>
    
      <button onClick={()=>setTareas([])}>Eliminar Tareas</button>       
    </div>
  );
}

export default App;