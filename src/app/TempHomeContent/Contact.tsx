import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { EmailLink } from "./EmailLink";

export function Contact() {
	const [isOpen, setIsOpen] = useState(false);

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
				<p>
					<EmailLink />
				</p>
				<Collapsible open={isOpen} onOpenChange={setIsOpen}>
					<CollapsibleTrigger className="flex gap-2 items-center font-bold">
						More
						<motion.div
							animate={{ rotate: isOpen ? 90 : 0 }}
							transition={{ duration: 0.2 }}
						>
							<ChevronRight size="1rem" className="my-auto" />
						</motion.div>
					</CollapsibleTrigger>

					<AnimatePresence>
						{isOpen && (
							<motion.div
								key="collapsible-content"
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{
									duration: 0.3,
									ease: "easeInOut",
								}}
								className="overflow-hidden"
							>
								<CollapsibleContent>
									<ul className="list-disc list-inside flex flex-col gap-2 my-1">
										<motion.li
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -20 }}
											transition={{ delay: 0.1 }}
										>
											<EmailLink type="president" />
										</motion.li>
										<motion.li
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -20 }}
											transition={{ delay: 0.2 }}
										>
											<EmailLink type="treasurer" />
										</motion.li>
										<motion.li
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -20 }}
											transition={{ delay: 0.3 }}
										>
											<EmailLink type="secretary" />
										</motion.li>
									</ul>
								</CollapsibleContent>
							</motion.div>
						)}
					</AnimatePresence>
				</Collapsible>
			</div>
		</div>
	);
}