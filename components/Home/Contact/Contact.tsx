import React from "react";

const Contact = () => {
	return (
		<section className="bg-bg-primary py-20 text-white">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
				{/* Left Side - Contact Form */}
				<div className="rounded-2xl border border-white/10 bg-bg-secondary p-8 shadow-lg">
					<h2 className="mb-6 text-3xl font-bold">
						Contact <span className="text-cyan-400">Me</span>
					</h2>

					<form className="space-y-5">
						<div>
							<label className="mb-2 block text-sm font-medium">Name</label>
							<input
								type="text"
								placeholder="Enter your name"
								className="w-full rounded-lg border border-white/10 bg-[#1f242c] px-4 py-3 outline-none transition focus:border-cyan-400"
							/>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium">Email</label>
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full rounded-lg border border-white/10 bg-[#1f242c] px-4 py-3 outline-none transition focus:border-cyan-400"
							/>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium">Subject</label>
							<input
								type="text"
								placeholder="Enter subject"
								className="w-full rounded-lg border border-white/10 bg-[#1f242c] px-4 py-3 outline-none transition focus:border-cyan-400"
							/>
						</div>

						<div>
							<label className="mb-2 block text-sm font-medium">Comment</label>
							<textarea
								rows={5}
								placeholder="Write your message..."
								className="w-full rounded-lg border border-white/10 bg-[#1f242c] px-4 py-3 resize-none outline-none transition focus:border-cyan-400"
							></textarea>
						</div>

						<button
							type="submit"
							className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-300 cursor-pointer hover:bg-cyan-300"
						>
							Send Message
						</button>
					</form>
				</div>

				{/* Right Side - Address Info */}
				<div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-[#323946] p-8 shadow-lg">
					<h2 className="mb-6 text-3xl font-bold">
						Get In <span className="text-cyan-400">Touch</span>
					</h2>

					<div className="space-y-6 text-gray-300">
						<div>
							<h3 className="mb-1 text-xl font-semibold text-white">Address</h3>
							<p>Kafrul, Dhaka, Bangladesh</p>
						</div>

						<div>
							<h3 className="mb-1 text-xl font-semibold text-white">Email</h3>
							<p>example@email.com</p>
						</div>

						<div>
							<h3 className="mb-1 text-xl font-semibold text-white">Phone</h3>
							<p>+880 1234-567890</p>
						</div>

						<div>
							<h3 className="mb-1 text-xl font-semibold text-white">
								Working Hours
							</h3>
							<p>Sat - Thu : 9:00 AM - 6:00 PM</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
