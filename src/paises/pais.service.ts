import axios from "axios";
import { Pais } from "./pais.interface";

export async function getPaises() {
	const response = await axios.get(`https://restcountries.com/v3.1/all`);
	const paises: Pais[] = response.data;
	return paises;
}

export async function getPaisByName(name: string) {
	const response = await axios.get(
		`https://restcountries.com/v3.1/name/${name}`
	);
	const pais: Pais[] = response.data;
	return pais;
}
