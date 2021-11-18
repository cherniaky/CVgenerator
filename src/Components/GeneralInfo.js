import react from "react";

import EditText from "./EditText";

class GeneralInfo extends react.Component {
    render() {
        return (
            <div className="GeneralInfo">
                <EditText value="First Name" buttons={this.props.buttons} />
                <EditText value="Last Name" buttons={this.props.buttons} />
                <EditText
                    value="Email"
                    ///specialType ="email"
                    buttons={this.props.buttons}
                />
                <EditText value="PhoneNumber" buttons={this.props.buttons} />
            </div>
        );
    }
}

export default GeneralInfo;
