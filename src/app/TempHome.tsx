import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import Logo from "@/assets/logo.png";
import { ModeToggle } from "@/components/theme/theme-toggle";

export function TempHome() {
	return (
		<div className="w-full mx-auto my-12">
			<div className="max-w-[80ch] px-6 box-content mx-auto gap-16 flex flex-col">
				<ModeToggle />

				<header className="flex flex-col gap-8 ">
					<img
						src={Logo}
						alt="DUCS Logo"
						className="w-[160px] h-[175px]  mx-auto"
					/>

					<h1 className="text-3xl font-bold text-center">
						Deakin University Computer Society
					</h1>
				</header>

				<div className="flex flex-col gap-10">
					<About />
					<Separator />

					<Join />
					<Separator />

					<Contact />
					<Separator />

					<Sponsors />
					<Separator />

					<Positions />
					<Separator />

					<Footer />
				</div>
			</div>
		</div>
	);
}

function About() {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-2xl font-bold">About</h2>

			<p>
				Deakin University Computer Society is a student-run society for
				students interested in the areas of computer science, infomation
				technology, cyber security and more.
			</p>
		</div>
	);
}

function Join() {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-2xl font-bold">Join Us</h2>

			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">Become a Member</h2>
					<p>
						To join the Deakin University Computer Society, you must
						first register with DUSA (Deakin University Students
						Association). Once you have registered, you get
						discounts to events, access to resume projects and more
						thats coming soon.
					</p>

					<a
						href="https://www.dusa.org.au/clubs/computer-society"
						target="_blank"
						rel="noreferrer"
					>
						<Button variant="outline" className="flex gap-2">
							<span>Join with DUSA</span>
							<ExternalLink />
						</Button>
					</a>
				</div>

				<div className="flex flex-col gap-2">
					<h2 className="text-xl font-bold">
						Join our Discord Server (FREE)
					</h2>
					<p>
						Get to know like minded students, learn about what DUCS
						has to offer and learn about fun new events and
						projects.
					</p>

					<a
						href="https://discord.gg/rFjtaf3H4m"
						target="_blank"
						rel="noreferrer"
						className="mt-2"
					>
						<Button variant="outline" className="flex gap-2">
							<span>Discord Invite</span>
							<ExternalLink />
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
}

function Contact() {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-2xl font-bold">Contact Us</h2>
			<p>
				DUCS currently doesn't have direct contacts, for each position
				but you can email us at the email below and one of us will get
				back to you within 7 business days.
			</p>

			<div className="gap-2 flex flex-col">
				<h3 className="font-bold text-xl">Email: </h3>
				<EmailLink />
			</div>
		</div>
	);
}

function Sponsors() {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-2xl font-bold">Sponsors</h2>
			<p>
				DUCS currently looking for sponsors to help cover the costs of
				running the society. If you are interested in sponsoring or
				suporting DUCS, please contact us at the email above.
			</p>
		</div>
	);
}

function Positions() {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-2xl font-bold">Positions</h2>

			<div className="flex gap-14 flex-wrap">
				<div>
					<h3 className="font-bold text-xl">Presedent</h3>
					<p>Oliver Quail</p>
				</div>

				<div>
					<h3 className="font-bold text-xl">Treasurer</h3>
					<p>Sam Stajnko</p>
				</div>

				<div>
					<h3 className="font-bold text-xl">Secretary</h3>
					<p>Darcy O'Neill</p>
				</div>
			</div>
		</div>
	);
}

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="flex flex-col gap-4">
			<p>© {currentYear} Deakin University Computer Society</p>
		</footer>
	);
}

function EmailLink() {
	return (
		<a
			href="mailto:deakincomputersociety@gmail.com"
			className="hover:underline"
		>
			deakincomputersociety@gmail.com
		</a>
	);
}

// ! add later
// function PastMembers() {
// 	return (
// 		<div className="flex flex-col gap-4">
// 			<h2 className="text-2xl font-bold">Positions</h2>

// 			<div className="flex gap-14">
// 				<div>
// 					<h3 className="font-bold text-xl">Presedent</h3>
// 					<p></p>
// 				</div>

// 				<div>
// 					<h3 className="font-bold text-xl">Treasurer</h3>
// 					<p></p>
// 				</div>

// 				<div>
// 					<h3 className="font-bold text-xl">Secretary</h3>
// 					<p></p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
