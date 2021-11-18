import react from "react";

class VisButton extends react.Component {

    render() {
        if (this.props.render === "1") {
            return (
                <input
                    type="button"
                    value={this.props.value}
                    className={this.props.className}
                    onClick={this.props.onClick}
                ></input>
            );
        } else {
            return <div></div>;
        }
    }
}

export default VisButton;
