var toggle = {};
(
    function () {
        this.themes = ["theme1", "theme2", "theme3"];
        this.BODY = document.querySelector("body");
        this.localStorage = window.localStorage;
        /** Change current theme
        * @param e Event
        * @return undefined
        */
        this.toggleHandler = (e) => {
	    let currentTheme=Number(this.localStorage.getItem("currentTheme"));
            currentTheme = (currentTheme + 1) % this.themes.length;
            this.BODY.className=this.themes[currentTheme];
	    this.localStorage.setItem("currentTheme",currentTheme);
        };
	this.toggleButtonHandler=(e)=>{
	    e.stopPropagation();
	    let currentTheme=e.target.getAttribute("data-theme");
		console.log(currentTheme);
	    if(this.localStorage.getItem("currentTheme")!=currentTheme){
	    this.BODY.className=this.themes[currentTheme];
	    this.localStorage.setItem("currentTheme",currentTheme);
	    }
	};
    }
).apply(toggle);
//document.querySelector(".bar").addEventListener("click", toggle.toggleHandler);
[...document.querySelectorAll(".circle")].forEach(c=>c.addEventListener("click",toggle.toggleButtonHandler));
window.onload=function(){
	if(toggle.localStorage.getItem("currentTheme")===null)
		toggle.localStorage.setItem("currentTheme",0);
	toggle.BODY.className=toggle.themes[toggle.localStorage.getItem("currentTheme")];
};