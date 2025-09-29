import { useState } from "react";

function App(){
  const [count,setCount]= useState<number>(10);
  const [nombre,setNombre]= useState<string>("");
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column"}}>
      <input value={nombre} placeholder = "Esbribe tu nombre" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)} />

      <h1>Hola {nombre||"Anonime"}</h1>

      {count>15 &&<h2> Llevas {count} clicks </h2>}
      <div>
        <button onClick={()=>setCount(count+2)}>Incrementar</button>
        <button onClick={()=>setCount(count-2)}>Decrementar</button>
        <button onClick={()=>setCount(0)}>Resetear</button>
      </div>
    </div>
  );
}
function App2(){
  const [tareas,setTareas ]= useState<string[]>(["Estudiar React","Estudiar TypeScript","Estudiar NodeJS"]);
  const [tarea,setTarea ]= useState<string>("");

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column"}}>
      <h1>Lista de Tareas</h1>
      <ul>
        {tareas.map((t, index) => (
          <li key={index}>{t}
            <button onClick={() => setTareas (
              tareas.filter(
                (element,i) => element!== t 
              )
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

export default App2;