import react from "react";
import VisButton from "./VisButton";

class EditText extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            edit: 0,
        };

        this.toggleEdit = this.toggleEdit.bind(this);
    }

    comp = () => {
        if (this.state.edit === 1) {

            if (this.props.buttons === "0") {
                this.state.edit=0;
                return (
                    <div className="Text">
                        <div>
                            <label>{this.state.value}</label>
                        </div>
                        <VisButton
                            value="Edit"
                            render={this.props.buttons}
                            className="button"
                            onClick={this.toggleEdit}
                        />
                    </div>
                );
            } else {
                return (
                    <div className="Text">
                        <input
                            type={(this.props.specialType)? "email" : "text"}
                            value={this.state.value}
                            onChange={this.updateValue}
                        ></input>
                        <input
                            type="button"
                            value="Save"
                            onClick={this.toggleEdit}
                            className="button"
                        ></input>
                    </div>
                );
            }

        }

        return (
            <div className="Text">
                <div>
                    <label>{this.state.value}</label>
                </div>
                <VisButton
                    value="Edit"
                    render={this.props.buttons}
                    className="button"
                    onClick={this.toggleEdit}
                />
            </div>
        );
    };

    updateValue = (e) => {
        this.setState({ value: e.target.value });
    };

    toggleEdit = () => {
        //console.log("setEdit");
        this.setState(() => {
            if (this.state.edit === 0) {
                return { edit: 1 };
            }

            return { edit: 0 };
        });
    };

    render() {
        return this.comp();
    }
}

export default EditText;
