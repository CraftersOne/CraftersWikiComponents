export function PlayerQuote({uuid, name, title, quote, side = "left"}: {uuid: string; name: string; title: string; quote: string, side?: "left" | "right"; }) {
	return (
		<div className={`quote-box ${side}`}>
			<div className="player">
				<a href={`https://wiki.crafters.one/wiki/UUID:${uuid}`}>
					<img className="player-head"
					     src={`https://visage.surgeplay.com/bust/256/${uuid}.png`}
					     alt={`${name}'s Head`}/>
					
					<div className="player-name">
						{name}
					</div>
				</a>
				<div className="player-title">{title}</div>
			</div>
			
			<div className="quote">
				{quote.split("\\n").map((line, i) => (
					<span key={i}>
                        {line}
						<br/>
                    </span>
				))}
			</div>
		
		</div>
	)
}