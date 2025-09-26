"use client";

import { SignUpForm } from "@/components/sign-up-form";
import { useState } from "react";

export default function Page() {
	const [showModel, setShowModel] = useState(false);
	const [showLoginModal, setShowLoginModal] = useState(false);

	const handleshowModel = () => {
		setShowModel(!showModel);
	};

	const switchtologIn = () => {
		setShowLoginModal(true);
	};

	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm">
				<SignUpForm
					handleShowModel={handleshowModel}
					showLoginModal={showLoginModal}
					switchtologIn={switchtologIn}
				/>
			</div>
		</div>
	);
}
