import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const Animation = () => {
	const particlesInit = async (main: Engine) => {
		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};

	return (
		<div>
			<Particles
				className=""
				init={particlesInit}
				options={{
					fpsLimit: 120,
					particles: {
						number: {
							value: 120,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						color: {
							value: "#ffffff",
						},
						shape: {
							type: "circle",
							stroke: {
								width: 0,
								color: "#888",
							},
							polygon: {
								nb_sides: 5,
							},
							image: {
								src: "img/github.svg",
								width: 100,
								height: 100,
							},
						},
						opacity: {
							value: 1,
							random: false,
							anim: {
								enable: false,
								speed: 1,
								opacity_min: 0.5,
								sync: false,
							},
						},
						size: {
							value: 4,
							random: true,
							anim: {
								enable: false,
								speed: 40,
								size_min: 0.1,
								sync: false,
							},
						},
						line_linked: {
							enable: true,
							distance: 150,
							color: "#ffffff",
							opacity: 0.4,
							width: 1,
						},
						move: {
							enable: true,
							speed: 2,
							direction: "top-right",
							random: false,
							straight: false,
							out_mode: "out",
							attract: {
								enable: false,
								rotateX: 600,
								rotateY: 1800,
							},
						},
					},
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							grab: {
								distance: 400,
								line_linked: {
									opacity: 1,
								},
							},
							bubble: {
								distance: 400,
								size: 40,
								duration: 2,
								opacity: 8,
							},
							repulse: {
								distance: 200,
							},
							push: {
								particles_nb: 4,
							},
							remove: {
								particles_nb: 2,
							},
						},
					},
					retina_detect: true,
				}}
			/>
		</div>
	);
};

export default Animation;
