import fs from "fs";
import readline from "readline";
import { getPaises } from "./paises/pais.service";

console.log("api paises v.0.0.1");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const listadoPaises = await getPaises();

console.log(listadoPaises);
