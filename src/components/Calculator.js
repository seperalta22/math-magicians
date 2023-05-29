import buttons from '../logic';

function Calculator() {
	return (
		<div className='calculator'>
			<input type='text' className='calculator-display' readOnly />
			<div className='calculator-buttons'>
				{buttons.map((button) => (
					<button
						type='button'
						key={button.name}
						className={`${button.className} ${button.color}`}
					>
						{button.name}
					</button>
				))}
			</div>
		</div>
	);
}

export default Calculator;
