import React, { Component } from "react";

class KieransFields extends Component {
    constructor(props) {
        super(props);

        this.state = {

            fields: props.fieldArray.map(() => ""),

            formPosted: false,
        };

        this.handleFormSubmission = this.handleFormSubmission.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, i) {
        let fields = this.state.fields.slice();
        fields[i] = e.currentTarget.value;
        this.setState({ fields });
    }

    handleFormSubmission(e) {
        e.preventDefault();
        this.setState({ formPosted: true });
    }

    render() {

        const { fieldArray } = this.props;
        const { fields, formPosted } = this.state;

        console.log(fieldArray);

        return (
            <form onSubmit={this.handleFormSubmission}>
                {fieldArray.map((name, i) => (
                    <div className="form-group" key={i}>
                        <label>{name}</label>
                        {/* adds a form control class. if form has not been posted, or the field is not empty, the "form-control" class is added.
                            if these conditions are not met, the "form-control-is-invalid" class is added.
                        */}
                        <input className={"form-control" + (!formPosted || fields[i] !== "" ? "" : " is-invalid")} value={fields[i]} onChange={e => this.handleChange(e, i)} />
                        {/* based on the same conditions as above, if the conditions are not met, return a <p> element notifying user of
                        invalid input. Assign the "invalid feedback" bootstrap class
                        */}
                        {!formPosted || fields[i] !== "" ? null : <p className="invalid-feedback">{name} cannot be empty.</p>}
                    </div>
                ))}

                <button>Submit</button>

            </form>
        );
    }
}

export default KieransFields;