import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/theme/theme-toggle";
import { About } from "./TempHomeContent/About";
import { Sponsors } from "./TempHomeContent/Sponsors";
import { Join } from "./TempHomeContent/Join";
import { Contact } from "./TempHomeContent/Contact";
import { Positions } from "./TempHomeContent/Positions";
import { Footer } from "./TempHomeContent/Footer";
import { Header } from "./TempHomeContent/Header";

export function TempHome() {
	return (
		<div className="w-full mx-auto my-12">
			<div className="max-w-[70ch] px-6 box-content mx-auto gap-16 flex flex-col text-justify">
				<ModeToggle />

				<Header />

				<div className="flex flex-col gap-10">
					<About />
					<Separator />

					<Sponsors />
					<Separator />

					<Join />
					<Separator />

					<Contact />
					<Separator />

					<Positions />
					<Separator />

					<Footer />
				</div>
			</div>
		</div>
	);
}
