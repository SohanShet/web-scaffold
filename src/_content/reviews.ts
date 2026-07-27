import { ReviewContent } from './types';

export const reviewContent: ReviewContent = {
	title: 'What people are saying',
	subtitle: 'Feedback from teams who shipped with Web Scaffold.',
	items: [
		{
			name: 'Ava Thompson',
			role: 'Frontend Engineer',
			rating: 5,
			quote:
				'Cut our project setup time from days to hours. The content layer alone saved us a ton of boilerplate.',
		},
		{
			name: 'Marcus Lee',
			role: 'Indie Hacker',
			rating: 5,
			quote:
				'Clean architecture, sane defaults, and it actually gets out of the way. Exactly what a scaffold should be.',
		},
		{
			name: 'Priya Nair',
			role: 'Product Designer',
			rating: 4,
			quote:
				'Loved how easy it was to restyle without fighting the components. The theming setup is a nice touch.',
		},
	],
};
