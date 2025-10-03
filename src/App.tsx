import { useState } from "react";

function App() {
	const [tareas, setTareas] = useState<string[]>([
		"React",
		"Estudiar TypeScript",
		"NodeJS",
	]);
	const [tarea, setTarea] = useState<string>("");
	const matriz: number[][] = [
		[1, 2],
		[3, 4],
		[5, 6],
	];
	const nombres: string[][] = [
		["Ana", "Juan", "Pedro"],
		["Maria", "Luisa", "Carla"],
		["Luis", "Carlos", "Miguel"],
	];
	// Ejercicio 1
	const entre10 = matriz.map((fila) => fila.map((n) => n * 0.1));
	console.log(entre10);

	// Ejercicio 2
	const mayusculas = nombres.map((fila) =>
		fila.map((nombre) => nombre.toUpperCase())
	);
	console.log(mayusculas);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				flexDirection: "column",
			}}
		>
			<h1>Lista</h1>
			<ul>
				{tareas.map((t, index) => (
					<li key={index}>
						{t}
						<button
							onClick={() =>
								setTareas(tareas.filter((element, _) => element !== t))
							}
						>
							X
						</button>
					</li>
				))}
			</ul>
			<h2>Numero de elementos: {tareas.length}</h2>
			<input
				placeholder="Nombre del objeto"
				onChange={(e) => setTarea(e.target.value)}
			/>
			<hr />
			<button
				value={tarea}
				onClick={() => {
					if (tarea.trim() === "") return;
					setTareas([...tareas, tarea]);
					setTarea("");
				}}
			>
				{" "}
				Agregar Tarea
			</button>

			<button onClick={() => setTareas([])}>Eliminar elemento</button>
		</div>
	);
}
function ListaTS() {
	const frutas = ["Manzana", "Pera", "Uva"];
	return (
		<ul>
			{frutas.map((fruta, i) => (
				<li key={i}> {fruta}</li>
			))}
		</ul>
	);
}

function TablaTS() {
	const nombres = [
		["Ana", "Juan", "Pedro"],
		["Maria", "Luisa", "Carla"],
		["Luis", "Carlos", "Miguel"],
	];
	return (
		<table>
			<tbody>
				{nombres.map((fila, i) => (
					<tr key={i}>
						{fila.map((nombre, j) => (
							<td key={j}> {nombre} </td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

function imrpimirlista() {
	const lista = [1, 2, 3, 4];

	return (
		<ul>
			{lista.map((n, i) => (
				<li key={i}>{n}</li>
			))}
		</ul>
	);
}
{
	/*
	Ejercicio 2 (para ti)

Problema: Dada la matriz:

const matriz = [
  [10, 20],
  [30, 40],
  [50, 60],
];


👉 Muestra cada fila en un <div>, y cada número separado por un -.

Ejemplo esperado (en pantalla):

10 - 20
30 - 40
50 - 60

*/
}
function Ejercicio2() {
	const matriz = [
		[10, 20],
		[30, 40],
		[50, 60],
	];
	return (
		<div>
			{matriz.map((fila, i) => (
				<div key={i}>{fila.join(" - ")}</div>
			))}
		</div>
	);
}

function Ejercicio3() {
	{
		/*
	📝 Ejercicio 3 (para ti)

Problema: Dada la matriz:

const matriz = [
  ["React", "Vue", "Angular"],
  ["Python", "JavaScript", "TypeScript"],
  ["Node", "Express", "Nest"],
];


👉 Muestra esta matriz en una tabla <table>, con cada subarray como fila de la tabla.
	*/
	}
	const matriz = [
		["React", "Vue", "Angular"],
		["Python", "JavaScript", "TypeScript"],
		["Node", "Express", "Nest"],
	];

	return (
		<table>
			<tbody>
				{matriz.map((fila, i) => (
					<tr key={i}>
						{" "}
						{fila.map((lenguaje, j) => (
							<td key={j}> {lenguaje}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Ejercicio3;
