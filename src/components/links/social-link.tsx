interface SocialLinkProps {
	href: string,
	Icon: React.ElementType,
	label: string,
	ariaLabel: string,
}

const SocialLink = ({ href, Icon, label, ariaLabel }: SocialLinkProps): React.JSX.Element => {
	return (
		<a
			className="flex items-center hover:underline gap-1"
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={ariaLabel}
		>
			<Icon aria-hidden="true" />
			<span>{label}</span>
		</a>);
};

export default SocialLink;
