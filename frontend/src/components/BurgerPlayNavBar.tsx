
interface CenteredIconProps {
	isNavVisible: boolean; // État de visibilité
	toggleNav: () => void; // Fonction pour basculer la visibilité
  }

function BurgerPlayNavBar({isNavVisible, toggleNav}: CenteredIconProps) {
	return (
		<>
			{!isNavVisible && (
				<img
					src="BurgerPlay.png"
					alt="Menu"
					onClick={toggleNav}
				/>	
			)}
		</>
	);
}


export default BurgerPlayNavBar;