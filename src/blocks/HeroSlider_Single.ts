import { Block } from 'payload/types';

const HeroSliderSingleType: Block = {
	slug: "hero-slider-single",
	labels: {
		singular: "Slajd",
		plural: "Slajdy",
	},
	fields: [
		{
			name: "heading",
			type: "text",
			label: "Nagłówek",
		},
		{
			name: "text",
			type: "richText",
			label: "Tekst",
		},
		{
			name: "image",
			type: "upload",
			relationTo: "media",
			label: "Obrazek w tle",
		}
	],
}

export default HeroSliderSingleType;