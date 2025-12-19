import {Number} from './Number';
import {Clock} from './Clock';
import { useState, useEffect  } from 'react';

const Home = () => {
	let [cards, setCards] = useState([0,0,0,0,0,0]);
	let [active, setActive] = useState(true);
	let [cuenta, setCuenta] = useState(1);
	useEffect (()=> {

	}, [cuenta]);
	useEffect(() => {
		if (active) {
		let timer = setInterval(() => {
			console.log(cuenta);
			
				/* let finRegresivo = (cuenta = 1)? 9 : 0;
				let inicioRegresivo = (cuenta = 1)? 0 : 9; */
				let arrayCards = [...cards];
				if (arrayCards[0] < 9 ) {
					arrayCards[0] = arrayCards[0]+cuenta;
					setCards(arrayCards);
				}
				else {
					for (let i = 1; i < 6; i++) {
						if (arrayCards[i] < 9) {
							arrayCards[i] = arrayCards[i] + cuenta;
							break
						}
						else {
							arrayCards[i] = 0
						}
					}
					arrayCards[0] = 0
					setCards(arrayCards);
				}			
				}, 500);
		return () => {
			clearInterval(timer)
		};

	}
	}, [cards,active,cuenta]);

	return (
		<div className='container-home'>
			<div className='clock'>
				<div className="buttons">
					<button onClick={()=> {
						setCards([0,0,0,0,0,0]);
						setActive(true);
					}}>Reiniciar</button>
					<button onClick={()=> {
						setActive(false);
					}}>Detener</button>
					<button onClick={()=> {
						setActive(true);
					}}>Reanudar</button>
				</div>
				<Clock/>
				<Number number={cards[5]}/>
				<Number number={cards[4]}/>
				<Number number={cards[3]}/>
				<Number number={cards[2]}/>
				<Number number={cards[1]}/>
				<Number number={cards[0]}/>
			</div>
			<div className='container-buttons'> 
				<div className="inputs">
					<form className='input' onSubmit={(e) => {
						e.preventDefault(); // evita recarga
						const value = e.target.buttonRegresivo.value;
						let array = [0,0,0,0,0,0];
						for (let i = 0 ; i < array.length; i++) {
							if (i < value.length) {
								array[array.length-1-i] = parseInt(value[value.length-1-i])
							}
						}
						setCards(array.reverse());
						console.log(array);
					}}>
						<input type="text" name="buttonRegresivo" maxLength={6} 
						onChange={(e)=>{
							const value = parseInt(e.target.value);
							console.log(value);
							if (isNaN(value)&& e.target.value != '') {
								alert('solo se permiten numeros')
								e.target.value = ''
							}
							
						}}/>
						<button type='submit' onClick={()=> {
							let cuentaRegresiva = cuenta;
							setCuenta(-cuentaRegresiva)
							console.log(-cuentaRegresiva);
							
						}}>Cuenta Regresiva</button>
					</form>
					<div className='input'>
						<input type="text" />
						<button>Establecer Alerta</button>
					</div>
					
				</div>
			</div>	
		</div>
	);
};

export default Home;