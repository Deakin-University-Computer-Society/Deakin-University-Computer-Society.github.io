export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="flex flex-col gap-4">
			<p>© {currentYear} Darcy O'Neill</p>
			<p>Logo © {currentYear} Deakin University Computer Society</p>
		</footer>
	);
}
