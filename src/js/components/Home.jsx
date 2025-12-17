import {Number} from './Number';
import {Clock} from './Clock';
import { useState, useEffect  } from 'react';

const Home = () => {
	let [cards, setCards] = useState([0,0,0,0,0,0]);
	let [active, setActive] = useState(true);
	useEffect(() => {
		if (active) {
		let timer = setInterval(() => {
				let arrayCards = [...cards];
				if (arrayCards[0] < 9 ) {
					arrayCards[0] = arrayCards[0]+1;
					setCards(arrayCards);
				}
				else {
					for (let i = 1; i < 6; i++) {
						if (arrayCards[i] < 9) {
							arrayCards[i] = arrayCards[i] + 1;
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
	}, [cards,active]);

	return (
		<div className='container'>
			<div className="buttons2">
				<button>Cuenta Regresiva</button>
				<button>Establecer Alerta</button>
				
        	</div>
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
	);
};

export default Home;