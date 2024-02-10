import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Footer } from "./components/footer";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<>
		<div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-8xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Mehrshad
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-lg text-zinc-500 ">
					an IT solutions consultant, a monitoring enthusiast, and an instructor{" "}
					<Link
						target="_blank"
						href="https://coachcrew.tech"
						className="underline duration-500 hover:text-zinc-300"
					>
						@CoachCrewTech
					</Link>
					.
				</h2>
			</div>
			<div
				className="mb-20 flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none sm:justify-center sm:flex-row sm:inline-flex aos-init aos-animate animate-fade-in"
				data-aos="fade-down"
				data-aos-delay="400"
			>
				<a
					className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
					href="/contact"
				>
					{" "}
					Contact me
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
					>
						<line x1="5" x2="19" y1="12" y2="12"></line>
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</a>
				<a
					className="w-full transition duration-150 ease-in-out bg-opacity-25 text-zinc-200 hover:text-white bg-zinc-900 hover:bg-opacity-30 text-center md:text-left"
					target="_blank"
					href="https://github.com/mehr74"
					rel="noreferrer"
				>
					View GitHub
				</a>
			</div>
		</div>
		<Footer classNames="footer-margin-top animate-fade-in bg-transparent" />
		</>
	);
}
