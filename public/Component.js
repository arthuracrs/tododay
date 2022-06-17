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
        let style = {
            color: 'black',
            backgroundColor: 'lightgrey',
            display: 'flex',
            placeItems: 'center',
            textAlign: 'center',
            minHeight: '40pt',
            minWidth: '40pt',
            borderRadius: '3px'
        }

        if (this.props.num == 0) {
            style.backgroundColor = '#E74C3C'
        } else if (this.props.num == 1) {
            style.backgroundColor = '#A9CCE3'
        } else if (this.props.num == 2) {
            style.backgroundColor = '#5499C7'
        } else if (this.props.num == 3) {
            style.backgroundColor = '#154360'
        }

        return style
    }

    setInnerHtml() {
        return `
        <div class="tooltip">
            <span class="tooltiptext">${this.props.text}</span>
        </div>`
    }
}

class Day extends C {
    setStyle() {
        return {
            width: '100%'
        }
    }

    setInnerHtml() {
        return '<i>20/06/2002</i>'
    }
}