import React, { Component } from "react";

class TempConverter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            celsius: ""
        }

        this.handleChangeCelsius = this.handleChangeCelsius.bind(this);
        this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this);
    }

    handleChangeCelsius(e) {
        let currentValue = e.currentTarget.value;

        this.setState({ celsius: currentValue })
    }

    handleChangeFahrenheit(e) {
        let currentValue = e.currentTarget.value;

        this.setState({ celsius: currentValue === "" ? "" : this.fahrenheihtToCelsius(currentValue) })
    }

    fahrenheihtToCelsius(num) {
        return (num - 32) * 5 / 9
    }

    celsiusToFarenheiht(num) {
        return (num * 9 / 5) + 32
    }

    render() {
        const { celsius } = this.state;

        return (
            <>
                <input value={celsius} type="number" onChange={this.handleChangeCelsius} className="form-control container" placeholder="Type celsius" />

                <input value={celsius === "" ? "" : this.celsiusToFarenheiht(celsius)} type="number" onChange={this.handleChangeFahrenheit} className="form-control container" placeholder="Type fahrenheiht" />
            </>
        )
    }
}

export default TempConverter;

// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.