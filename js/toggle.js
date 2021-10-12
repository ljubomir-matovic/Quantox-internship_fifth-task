var toggle = {};
(
    function () {
        this.themes = ["theme1", "theme2", "theme3"];
        this.BODY = document.querySelector("body").classList;
        this.localStorage = window.localStorage;
        /** Change current theme
        * @param e Event
        * @return undefined
        */
        this.toggleHandler = (e) => {
	    let currentTheme=Number(this.localStorage.getItem("currentTheme"));
            this.BODY.remove(this.themes[currentTheme]);
            currentTheme = (currentTheme + 1) % this.themes.length;
            this.BODY.add(this.themes[currentTheme]);
	    this.localStorage.setItem("currentTheme",currentTheme);
        };
    }
).apply(toggle);
document.querySelector(".bar").addEventListener("click", toggle.toggleHandler);
window.onload=function(){
	if(toggle.localStorage.getItem("currentTheme")===null)
		toggle.localStorage.setItem("currentTheme",0);
	toggle.BODY.add(toggle.themes[toggle.localStorage.getItem("currentTheme")]);
};