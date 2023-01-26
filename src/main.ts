import "./style.css"
import DVD from "/dvd.svg"

const { body } = document

body.style.position = "relative"

const dvdEl = document.createElement("img")
dvdEl.style.cssText = `
  height: 20vmax; 
  position: absolute;
`
dvdEl.style.top = `${50}%`
// dvdEl.style.left = `${50}%`
dvdEl.style.right = `${0}`

dvdEl.src = DVD
console.log(dvdEl.style.cssText)

body.append(dvdEl)

function tick() {
	requestAnimationFrame(tick)
	/* Works */
	// if (dvdEl.y + dvdEl.height / 2 < window.innerHeight) {
	// 	dvdEl.style.top = `${parseInt(dvdEl.style.top) + 1}px`
	// }
	/* Doesnt work, overflows bottom of inner */
	if (detectEdge(dvdEl.y, dvdEl.height, window.innerHeight)) {
		dvdEl.style.top = `${parseInt(dvdEl.style.top) + 1}px`
	}
}

tick()
// dvdEl.style.right = `-${dvdEl.x + dvdEl.width / 2}%`
dvdEl.onload = () => {
	console.log(dvdEl.height)
	console.log(dvdEl.x + dvdEl.width, window.innerWidth)
	console.log(dvdEl.x - dvdEl.width - window.innerWidth)
}

function detectEdge(
	objectDimension: number,
	objectPosition: number,
	containerDimension: number
) {
	return objectPosition + objectDimension / 2 < containerDimension
}
