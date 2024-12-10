import { DUSA } from "@/assets/dusa-icon";
import {
	Bluesky,
	Discord,
	Facebook,
	Instagram,
	LinkedIn,
	Threads,
} from "@/assets/svgl-icons";

export function SocaialMediaLinks() {
	return (
		<div className="flex flex-row gap-4 mx-auto flex-wrap">
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.instagram.com/deakincomputersociety/"
			>
				<Instagram className="w-6 h-6" />
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.facebook.com/deakincomputersociety/"
			>
				<Facebook className="w-6 h-6" />
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://discord.gg/rFjtaf3H4m"
			>
				<Discord className="w-6 h-6" />
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://au.linkedin.com/company/deakincomputersociety"
			>
				<LinkedIn className="w-6 h-6" />
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://bsky.app/profile/ducs.club"
			>
				<Bluesky className="w-6 h-6" />
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.threads.net/@deakincomputersociety"
			>
				<Threads className="w-6 h-6" />
			</a>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.dusa.org.au/clubs/computer-society"
			>
				<DUSA />
			</a>
		</div>
	);
}
