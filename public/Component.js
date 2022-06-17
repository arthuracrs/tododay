class C {
    component = document.createElement(this.constructor.name)
    props = {}

    constructor(props, ...children) {
        this.props = props
        this.children = children
        this.setClass()

        return this.render()
    }

    render() {
        this.style = this.setStyle()
        this.innerHtml = this.setInnerHtml()
        this.component.innerHTML = this.innerHtml

        for (const prop in this.style)
            this.component.style[prop] = this.style[prop]

        for (const child in this.children)
            this.component.append(this.children[child])

        return this.component
    }

    setClass() {
        this.component.classList.add(this.props.cssClass)
    }

    setStyle() {
        return {}
    }

    setInnerHtml() {
        return ''
    }
}

class Box extends C {
    setStyle() {
        let style = {}

        const color = {
            0: '#E74C3C',
            1: '#A9CCE3',
            2: '#5499C7',
            3: '#154360',
        }

        style.backgroundColor = color[this.props.num]

        return style
    }

    setInnerHtml() {
        return `
        <div class="tooltip"> 
            <span class="tooltiptext">${this.props.text}</span>
        </div>`
    }
}