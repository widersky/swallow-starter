import { Block } from 'payload/types';
import HeroSliderSingleType from "./HeroSlider_Single";

const HeroSliderBlockType: Block = {
		slug: "hero-slider",
		labels: {
			singular: "Prezentacja w formie slajdera",
			plural: "Prezentacja w formie slajdera",
		},
		fields: [
			{
				type: 'tabs',
				tabs: [
					{
						label: 'Treść',
						fields: [
							{
								name: "slides",
								type: "blocks",
								label: "Slajdy",
								labels: {
									singular: "Slajd",
									plural: "Slajdy",
								},
								blocks: [
									HeroSliderSingleType,
								]
							},
						]
					},
					{
						label: 'Ustawienia',
						fields: [
						]
					}
				]
			}
		],
}

export default HeroSliderBlockType;