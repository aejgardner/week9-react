import React, { Component } from "react";
class TempConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            farenheit: "",
            centigrade: ""
        }
        this.centConverter = this.centConverter.bind(this);
        this.farConverter = this.farConverter.bind(this);
    }

    centConverter(e) {
        // e.currentTarget: DOM element we attached the event handler to
        // use the value property to read its current value
        this.setState({ centigrade: e.currentTarget.value, farenheit: e.currentTarget.value * 1.8 + 32 })
    }
    farConverter(e) {
        // e.currentTarget: DOM element we attached the event handler to
        // use the value property to read its current value
        this.setState({ farenheit: e.currentTarget.value, centigrade: e.currentTarget.value / 1.8 - 32 })
    }
    render() {
        let { centigrade, farenheit } = this.state;

        return (
            <form className="form mb-4" >
                <input
                    type="number"
                    className="form-control"
                    value={centigrade}
                    onChange={(e) => this.centConverter(e)}
                    placeholder="Centigrade"
                />
                <input
                    type="number"
                    className="form-control"
                    value={farenheit}
                    onChange={(e) => this.farConverter(e)}
                    placeholder="Farenheit"
                />
            </form>
        );
    }
}
export default TempConverter;

// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.