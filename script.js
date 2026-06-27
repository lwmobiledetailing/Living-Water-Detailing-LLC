const details = {

maintenance: `
<h2>🔄 Maintenance Wash — $55</h2>

<p><b>Time:</b> 30–45 Minutes</p>

<ul>
<li>✔ Exterior Hand Wash</li>
<li>✔ Wheel & Tire Cleaning</li>
<li>✔ Tire Dressing</li>
<li>✔ Exterior Window Cleaning</li>
<li>✔ Quick Interior Vacuum</li>
<li>✔ Light Interior Wipe Down</li>
</ul>

<h3>Vehicle Pricing</h3>

<p>
Sedan — $55<br>
SUV — $70<br>
Truck — $75
</p>
`,

basic: `
<h2>💧 Basic Clean — $65</h2>

<p><b>Time:</b> 45–60 Minutes</p>

<ul>
<li>✔ Exterior Hand Wash</li>
<li>✔ Wheel & Tire Cleaning</li>
<li>✔ Tire Dressing</li>
<li>✔ Exterior Window Cleaning</li>
<li>✔ Full Interior Vacuum</li>
<li>✔ Dashboard Cleaning</li>
<li>✔ Console Cleaning</li>
<li>✔ Trash Removal</li>
</ul>

<h3>Vehicle Pricing</h3>

<p>
Sedan — $65<br>
SUV — $80<br>
Truck — $85
</p>
`,

foam: `
<h2>⭐ Foam & Shine Detail — $115</h2>

<p><b>Time:</b> 1.5–2 Hours</p>

<ul>
<li>✔ Pre-Foam Soak</li>
<li>✔ Hand Wash</li>
<li>✔ Deep Wheel Cleaning</li>
<li>✔ Tire Dressing</li>
<li>✔ Spray Wax Protection</li>
<li>✔ Door Jamb Cleaning</li>
<li>✔ Exterior Windows</li>
<li>✔ Full Interior Vacuum</li>
<li>✔ Interior Scrub</li>
<li>✔ UV Protectant</li>
<li>✔ Dashboard Detail</li>
<li>✔ Floor Mat Cleaning</li>
<li>✔ Interior Scent Refresh</li>
</ul>

<h3>Vehicle Pricing</h3>

<p>
Sedan — $115<br>
SUV — $130<br>
Truck — $140
</p>
`,

full: `
<h2>💎 Full Service Detail — $175</h2>

<p><b>Time:</b> 2.5–3.5 Hours</p>

<ul>
<li>✔ Everything Included in Foam & Shine</li>
<li>✔ Deep Interior Vacuum</li>
<li>✔ Carpet Cleaning</li>
<li>✔ Seat Cleaning</li>
<li>✔ Interior Window Cleaning</li>
<li>✔ Seam & Crack Detailing</li>
<li>✔ Interior Trim Restoration</li>
<li>✔ Heavy Soil Treatment</li>
</ul>

<h3>Vehicle Pricing</h3>

<p>
Sedan — $175<br>
SUV — $195<br>
Truck — $210
</p>
`

};

function openModal(service){

document.getElementById("modalBody").innerHTML=details[service];

document.getElementById("modal").style.display="flex";

}

function closeModal(){

document.getElementById("modal").style.display="none";

}

window.onclick=function(e){

if(e.target==document.getElementById("modal")){

closeModal();

}

}
