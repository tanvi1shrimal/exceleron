var viewportHeight = Math.max(document.documentElement.clientHeight),
	footerOffset = document.getElementById('dashboard-footer').offsetHeight,
	navHeight = viewportHeight - footerOffset;

document.getElementById("navigation-panel").style.minHeight = navHeight + "px";