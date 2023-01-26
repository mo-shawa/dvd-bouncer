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

	dvdEl.style.top = `${parseInt(dvdEl.style.top) + 1}`
}

tick()
// dvdEl.style.right = `-${dvdEl.x + dvdEl.width / 2}%`
dvdEl.onload = () => {
	console.log(dvdEl.x, dvdEl.width)
	console.log(dvdEl.x + dvdEl.width, window.innerWidth)
	console.log(dvdEl.x - dvdEl.width - window.innerWidth)
}

function detectEdge() {
	const x = dvdEl.x
}
