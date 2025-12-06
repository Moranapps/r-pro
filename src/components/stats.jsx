import './stats.css';

function Stats() {
	const stats = [
		{
			number: '70+',
			description: 'realizacji biur klasy A',
		},
		{
			number: '25',
			description: 'zaufanych partnerów i podwykonawców',
		},
		{
			number: '150 000+ m²',
			description: 'wykończonych powierzchni',
		},
		{
			number: '300+',
			description: 'zadowolonych klientów biznesowych',
		},
	];

	return (
		<section className="stats-section">
			<div className="stats-container">
				<div className="stats-grid">
					{stats.map((stat, index) => (
						<div key={index} className="stat-item">
							<div className="stat-number">{stat.number}</div>
							<div className="stat-description">{stat.description}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Stats;
