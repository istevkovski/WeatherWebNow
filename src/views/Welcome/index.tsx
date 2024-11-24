import Button from '@components/Button';
import { Typography } from '@components/Typography';

const Welcome = () => {
	return (
		<div>
			<Typography tag="h1">Welcome to WeatherWebNow!</Typography>
			<Typography tag="h4">
				Please share your current location to get the weather in your area
			</Typography>
			<Button>Share Current Location</Button>
		</div>
	);
};

export default Welcome;
