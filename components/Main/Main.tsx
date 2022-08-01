import { useEffect, useState, useRef } from "react";
import BannerVideo from "./BannerVideo";
import Animation from "./BackgroundAnimation";
import Me from "./Me";

const Main = () => {
	const [loaded, setLoaded] = useState(false);
	const [videoCanPlay, setVideoCanPlay] = useState(false);

	const Main = useRef<HTMLElement>(null);

	useEffect(() => {
		setLoaded(true);
		setTimeout(() => {
			setVideoCanPlay(true);
		}, 1000);
	}, []);

	return (
		<section ref={Main} className="relative h-screen w-screen">
			<BannerVideo
				loaded={loaded}
				videoCanPlay={videoCanPlay}
				setVideoCanPlay={setVideoCanPlay}
			/>
			<Animation />
			<Me />
		</section>
	);
};

export default Main;
