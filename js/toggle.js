var toggle = {};
(
    function () {
        this.themes = ["theme1", "theme2", "theme3"];
        this.BODY = document.querySelector("body").classList;
        this.localStorage = window.localStorage;
	this.localStorage.setItem("currentTheme",0);
        /** Change current theme
        * @param e Event
        * @return undefined
        */
        this.toggleHandler = (e) => {
	    let currentTheme=this.localStorage.getItem("currentTheme");
            this.BODY.remove(this.themes[currentTheme]);
            currentTheme = (currentTheme + 1) % this.themes.length;
            this.BODY.add(this.themes[currentTheme]);
	    this.localStorage.setItem("currentTheme",currentTheme);
        };
    }
).apply(toggle);

document.querySelector(".bar").addEventListener("click", toggle.toggleHandler);