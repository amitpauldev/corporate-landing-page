import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="border-t border-white/10 bg-bg-primary text-white">
			<div className="mx-auto max-w-7xl px-6 py-14">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
					{/* Brand */}
					<div>
						<h2 className="text-2xl font-bold tracking-wide text-white">
							NextFuture
						</h2>

						<p className="mt-4 text-sm leading-7 text-gray-400">
							We build modern digital experiences for startups, businesses, and
							growing brands worldwide.
						</p>

						<div className="mt-6 flex items-center gap-3">
							<a
								href="#"
								className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-primary-light hover:bg-primary-light hover:text-black"
							>
								<FaFacebookF size={14} />
							</a>

							<a
								href="#"
								className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-primary-light hover:bg-primary-light hover:text-black"
							>
								<FaLinkedinIn size={14} />
							</a>

							<a
								href="#"
								className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-primary-light hover:bg-primary-light hover:text-black"
							>
								<FaTwitter size={14} />
							</a>

							<a
								href="#"
								className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-primary-light hover:bg-primary-light hover:text-black"
							>
								<FaGithub size={14} />
							</a>
						</div>
					</div>

					{/* Company */}
					<div>
						<h3 className="mb-5 text-lg font-semibold">Company</h3>

						<ul className="space-y-3 text-sm text-gray-400">
							<li>
								<a href="#" className="transition hover:text-primary-light">
									About Us
								</a>
							</li>

							<li>
								<a href="#" className="transition hover:text-primary-light">
									Our Services
								</a>
							</li>

							<li>
								<a href="#" className="transition hover:text-primary-light">
									Careers
								</a>
							</li>

							<li>
								<a href="#" className="transition hover:text-primary-light">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className="mb-5 text-lg font-semibold">Resources</h3>

						<ul className="space-y-3 text-sm text-gray-400">
							<li>
								<a href="#" className="transition hover:text-primary-light">
									Blog
								</a>
							</li>

							<li>
								<a href="#" className="transition hover:text-primary-light">
									Case Studies
								</a>
							</li>

							<li>
								<a href="#" className="transition hover:text-primary-light">
									Help Center
								</a>
							</li>

							<li>
								<a href="#" className="transition hover:text-primary-light">
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="mb-5 text-lg font-semibold">Newsletter</h3>

						<p className="mb-4 text-sm leading-6 text-gray-400">
							Get the latest updates and news directly in your inbox.
						</p>

						<form className="space-y-3">
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-cyan-400"
							/>

							<button
								type="submit"
								className="w-full rounded-xl bg-primary-light px-4 py-3 text-sm font-semibold text-black transition hover:bg-tertiary cursor-pointer"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>

				{/* Bottom */}
				<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
					<p>© 2026 NextFuture. All rights reserved.</p>

					<div className="flex items-center gap-6">
						<a href="#" className="transition hover:text-primary-light">
							Terms
						</a>

						<a href="#" className="transition hover:text-primary-light">
							Privacy
						</a>

						<a href="#" className="transition hover:text-primary-light">
							Cookies
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
