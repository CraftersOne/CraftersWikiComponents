import MiniMessage from "minimessage-js";

export function ItemTooltip({lines}: {lines: string[]}) {
	const component = MiniMessage
		.miniMessage()
		.deserialize(lines.join("<br>"));
	
	return (
		<div className={'item-tooltip'}>
			<div className={"item-tooltip-text"}
			     dangerouslySetInnerHTML={{__html: MiniMessage.miniMessage().toHTML(component)}}
			/>
		</div>
	);
}