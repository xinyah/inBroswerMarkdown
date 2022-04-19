import React, { useState } from "react";
import "./App.css";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [textVal, setTextVal] = useState(
		"Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque perferendis amet voluptatum porro totam sapiente?Eaque quos saepe earum sint sunt delectus? Dignissimos nobis facilis ipsam numquam aut magni. Placeat."
	);
	const openMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const logTextChange = function (event: any) {
		setTextVal(event.target.value);
		console.log(event.target.value);
	};

	return (
		<div className="container">
			<div className={`side-bar ${isMenuOpen ? "" : "hide"}`}>
				<p className="side-bar-title">MY DOCUMENTS</p>
				<button type="button" className="side-bar-button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 4v16m8-8H4"
						/>
					</svg>
					<p>New Document</p>
				</button>
			</div>
			<div className="main-content">
				<div className="nav">
					{isMenuOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={`h-6 w-6 menu ${
								isMenuOpen ? "fill" : ""
							}`}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
							onClick={openMenu}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 menu"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
							onClick={openMenu}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
					<p className="title">MARKDOWN</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 doc-icon"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
						/>
					</svg>
					<div className="document-info">
						<p className="info-header">Document Name</p>
						<p className="info-title">welcome.md</p>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 delete"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
						/>
					</svg>
					<button type="button" className="save-doc">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
							/>
						</svg>
						<p>Save changes</p>
					</button>
				</div>
				<div className="input">
					<p className="input-header-half">MARDOWN</p>
					<div className="input-main">
						<textarea
							className="fill-width"
							onChange={logTextChange}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.Atque perferendis amet voluptatum porro totam
							sapiente?Eaque quos saepe earum sint sunt delectus?
							Dignissimos nobis facilis ipsam numquam aut magni.
							Placeat.
						</textarea>
					</div>
				</div>
				<div className="input right">
					<p className="input-header-half">PREVIEW</p>
					<p className="input-main">{textVal}</p>
				</div>
			</div>
		</div>
	);
}

export default App;
