import { ms } from 'react-native-size-matters';

export default {
	colors: {
		primary: '#2CC2EB',

		darker: '#211f1f',

		background: '#FFFFFF',
		background_light: '#F6F6Fc',
		background_gray: '#8A8A8A',

		text_dark: '#434344',
		text_light: '#FFFFFF',
		text_gray: '#9B9B9B',
		gray_disable: 'rgb(218,217,217)',

		danger: '#a40f0f',
	},

	fonts: {
		regular: 'BalooBhai2_400Regular',
		medium: 'BalooBhai2_500Medium',
		semi_bold: 'BalooBhai2_600SemiBold',
		bold: 'BalooBhai2_700Bold',
	},

	metrics: {
		tiny: ms(12),
		small: ms(14),
		normal: ms(16),
		big: ms(18),
		base_top: ms(15),
		base_padding: ms(15),
		base_margin: ms(10),
		base_border_radius: ms(7),
		ms,
	},
};
