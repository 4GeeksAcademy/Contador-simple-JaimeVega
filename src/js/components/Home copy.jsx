import {Number} from './Number';
import {Clock} from './Clock';
import { useState, useEffect  } from 'react';

const Home = () => {
	let [seconds, setSeconds] = useState(0);
	let  [index, setIndex] = useState(0);
	let [cards, setCards] = useState([0,0,0,0,0,0]);
	useEffect(() => {
		let timer = setInterval(() => {
			let segundos = seconds;
			if (cards[index] < 9) {
				cards[index] = segundos
				setCards(cards);
				setSeconds(seconds + 1);
			}
			else {
				cards[index] = 0
				setIndex(index+1);
				cards[index+1] = 1
				setCards(cards);
				setSeconds(2);
			}
			
				}, 1000);
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