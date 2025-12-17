import {Number} from './Number';
import {Clock} from './Clock';
import { useState, useEffect  } from 'react';

const Home = () => {
	let [seconds, setSeconds] = useState(0);
	let [cards, setCards] = useState([0,0,0,0,0,0]);
	useEffect(() => {
		let timer = setInterval(() => {
				let segundos = seconds;
				let arrayCards = cards
				if (arrayCards[0] < 9 ) {
					arrayCards[0] = segundos;
					setCards(arrayCards);
					setSeconds(seconds + 1);
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
					setSeconds(1);
				}
							
				}, 200);
		return () => {
			clearInterval(timer)
		};
	}, [seconds,cards]);

	return (
		<div className='container'>
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