class model {
    constructor() {
        let n = 0
        this.childrenday = new Date(`may 27 , ${2022 + n} 00:00:00 GMT+01:00`).getTime()
    }
}

class view {
    constructor() {

        this.root = this.getElement(`#root`)
        this.foot = this.getElement(`#foot`)
        this.title = this.createElement(`h2`)
        this.line = this.createElement(`div`)
        this.divdays = this.createElement('div')
        this.divhours = this.createElement('div')
        this.divminutes = this.createElement('div')
        this.divseconds = this.createElement('div')
        this.spandays = this.createElement(`span`)
        this.textdays = this.createElement(`span`)
        this.spanhours = this.createElement(`span`)
        this.texthours = this.createElement(`span`)
        this.spanminutes = this.createElement(`span`)
        this.textminutes = this.createElement(`span`)
        this.spanseconds = this.createElement(`span`)
        this.textseconds = this.createElement(`span`)
        this.names = this.createElement(`span`)
        this.root.append(this.title, this.line)
        this.divdays.append(this.textdays, this.spandays)
        this.divhours.append(this.texthours, this.spanhours)
        this.divminutes.append(this.textminutes, this.spanminutes)
        this.divseconds.append(this.textseconds, this.spanseconds)
        this.line.append(this.divdays, this.divhours, this.divminutes, this.divseconds)
        // this.line.append(this.spandays, this.textdays, this.spanhours, this.texthours, this.spanminutes, this.textminutes, this.spanseconds, this.textseconds)
        // this.line.insertBefore(this.spandays, this.textdays, this.spanhours, this.texthours, this.spanminutes, this.textminutes, this.spanseconds, this.textseconds)
        this.root.insertBefore(this.title, this.line)
        this.foot.appendChild(this.names)
    }
    getElement(selector) {
        return document.querySelector(selector)
    }
    createElement(tag) {
        return document.createElement(tag)
    }
}

class controller {
    constructor() {
        this.model = new model()
        this.view = new view()
        this.view.title.textContent = 'Countdown to Children`s day'
        this.view.title.setAttribute(`class`, `title`)

        this.TimerId = setInterval(() => {
            let date = new Date().getTime()
            this.diff = this.model.childrenday - date

            const appendzero = num => {
                if (String(num).length < 2) {
                    return `0${num}`
                } return num
            }

            this.days = appendzero(Math.floor(this.diff / (1000 * 60 * 60 * 24)))
            this.hours = appendzero(Math.floor((this.diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            this.minutes = appendzero(Math.floor((this.diff % (1000 * 60 * 60)) / (1000 * 60)))
            this.seconds = appendzero(Math.floor((this.diff % (1000 * 60)) / (1000)))

            this.view.spandays.textContent = this.days
            this.view.spandays.setAttribute(`class`, `box`)
            this.view.textdays.textContent = `days : `
            this.view.spanhours.textContent = this.hours
            this.view.spanhours.setAttribute(`class`, `box`)
            this.view.texthours.textContent = `hours : `
            this.view.spanminutes.textContent = this.minutes
            this.view.spanminutes.setAttribute(`class`, `box`)
            this.view.textminutes.textContent = `minutes : `
            this.view.spanseconds.textContent = this.seconds
            this.view.spanseconds.setAttribute(`class`, `box`)
            this.view.textseconds.textContent = `seconds`

            if (this.diff <= 0) {
                clearInterval(this.timerId)
                // this.view.span.textContent = 'Happy children`s days, Kids'
                // this.view.span.style.color = 'antiquewhite'
                let n = n + 1
            }
        }, 1000);
    }
}

new controller()

