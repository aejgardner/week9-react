import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {

            fieldvalues: props.fields.map(() => ""), // good example of using props in constructor, set up to track however many fields are passed into component. Don't need to use "this" keyword as prop is passed into constrcutor. Mapping over it, for each each item, an empty string is returned. So creates an array of equal length, with an empty string for each value. So this.state.fields = an array of the length of 3, each one an empty string. Essentially created 3 sets of inputs, a corresponding place to put each input from user.

            formPosted: false // tracks whether form has been submitted, makes sense to track as we want to know if any field is empty upon form submission. Always need client side validation, sanitising data ready to be sent to backend.
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
    }

    handleChange(e, i) {
        // slice is used here because we need to be able to insert the input for the relevant index. using the spread operator adds to an array, but would be very hard to add to a specific index. Slice creates new array, with access to specificty to passing data at a specific index.
        let fields = this.state.fieldvalues.slice();

        console.log(fields)

        // specifies which index of fieldvalues state array we want to update the value of
        fields[i] = e.currentTarget.value;


        this.setState({ fieldvalues: fields });
    }

    handleFormSubmission(e) {
        e.preventDefault();
        this.setState({ formPosted: true });
    }

    render() {
        const { fields } = this.props; // array of form field names
        const { formPosted, fieldvalues } = this.state;

        return (

            <form onSubmit={this.handleFormSubmission}>
                {fields.map((field, i) => (
                    <div className="form-group" key={i}>
                        <label>{field}</label>
                        {/* adds a form control class. if form has not been posted, or the field is not empty, the "form-control" class is added.
                            if these conditions are not met, the "form-control-is-invalid" class is added.
                        */}
                        <input className={"form-control" + (!formPosted || fieldvalues[i] !== "" ? "" : " is-invalid")} value={fieldvalues[i]} onChange={e => this.handleChange(e, i)} />
                        {/* based on the same conditions as above, if the conditions are not met, return a <p> element notifying user of
                        invalid input. Assign the "invalid feedback" bootstrap class
                        */}
                        {!formPosted || fieldvalues[i] !== "" ? null : <p className="invalid-feedback">{field} cannot be empty.</p>}
                    </div>
                ))}
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;

// Create a <Form fields={ fields } /> component. It should take an array of field names as a prop and for each one display an <input> with an appropriate <label>. When the form is submitted it should highlight any fields that are empty with a red outline and display a message saying that the field is required.