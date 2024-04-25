export class Application {
    constructor(loggedIn) {
        this.loggedIn = loggedIn;
        document.addEventListener("DOMContentLoaded", () => {
            this.updateDom();
            console.log("app started");
        })
    }

    updateDom() {
        const logIn = document.querySelector(".login");
        const logOut = document.querySelector(".logout");
        const profile = document.querySelector(".profile");
        const register = document.querySelector(".register");

        if(this.loggedIn) {
            logIn.style.display = "none";
            register.style.display = "none";
        } else {
            logOut.style.display = "none";
            profile.style.display = "none";
        }
    }

    login() {
        
    }
}
