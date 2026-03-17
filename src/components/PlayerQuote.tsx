export function PlayerQuote({uuid, name, title, quote}: {uuid: string; name: string; title: string; quote: string}) {
	return (
		<div className="quote-box">
			
			<div className="player">
				<img className="player-head"
				     src={`https://visage.surgeplay.com/bust/256/${uuid}.png`}
				     alt={`${name}'s Head`}/>
				
				<a className="player-name" href={`https://wiki.crafters.one/wiki/UUID:${uuid}`}>{name}</a>
				
				<div className="player-title">{title}</div>
			</div>
			
			<div className="quote">
				{quote}
			</div>
		
		</div>
	)
}