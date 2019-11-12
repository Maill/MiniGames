const PropsProfilButton = (menuId, handleProfileMenuOpen) => {
	return {
		edge:false,
		"aria-label":"Profil",
		"aria-controls":menuId,
		"aria-haspopup":"true",
		onClick:handleProfileMenuOpen,
		color:"inherit",
		size:"small",
	}
}

const PropsNavBarMenu = (anchorEl, menuId, isMenuOpen, handleMenuClose) => {
	return {
		anchorEl:anchorEl,
		anchorOrigin:{ vertical: 'bottom', horizontal: 'right' },
		id:menuId,
		keepMounted: true,
		transformOrigin:{ vertical: 'top', horizontal: 'right' },
		open:isMenuOpen,
		onClose:handleMenuClose,
		getContentAnchorEl:null,
	}
}

export { PropsProfilButton, PropsNavBarMenu };