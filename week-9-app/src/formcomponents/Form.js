import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: props.fieldArray.map(() => ""),
            formPosted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
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
        const { fields } = this.props;
        const { formPosted } = this.state;

        return (

            <form onSubmit={this.handleFormSubmission}>
                {fields.map((field, i) => (
                    <div className="form-group" key={i}>
                        <label>{field}</label>
                        {/* adds a form control class. if form has not been posted, or the field is not empty, the "form-control" class is added.
                            if these conditions are not met, the "form-control-is-invalid" class is added.
                        */}
                        <input className={"form-control" + (!formPosted || fields[i] !== "" ? "" : " is-invalid")} value={fields[i]} onChange={e => this.handleChange(e, i)} />
                        {/* based on the same conditions as above, if the conditions are not met, return a <p> element notifying user of
                        invalid input. Assign the "invalid feedback" bootstrap class
                        */}
                        {!formPosted || fields[i] !== "" ? null : <p className="invalid-feedback">{field} cannot be empty.</p>}
                    </div>
                ))}
                <button>Submit</button>
            </form>
        )


    }
}

export default Form;

// Create a <Form fields={ fields } /> component. It should take an array of field names as a prop and for each one display an <input> with an appropriate <label>. When the form is submitted it should highlight any fields that are empty with a red outline and display a message saying that the field is required.