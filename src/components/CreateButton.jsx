function CreateButton({ onClick, children }) {
	return <button onClick={onClick}>{children}</button>;
}

export { CreateButton };
