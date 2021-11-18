import react from "react";
import VisButton from "./VisButton";

class ShowData extends react.Component {
    render() {
     
        return (
            <div className="schoolData">
                <div>
                    <div>
                        <label className="wide">Institution :</label>{" "}
                        <label> {this.props.school} </label>
                    </div>
                    <div>
                        <label className="wide">From : </label>{" "}
                        <label>{this.props.from} </label>
                    </div>
                    <div>
                        <label className="wide">To : </label>
                        <label>{this.props.to} </label>
                    </div>
                    <div>
                        <label className="wide">Qualifcation : </label>{" "}
                        <label>{this.props.qual} </label>
                    </div>
                </div>
               
                <VisButton
                    render={this.props.button}
                    value="delete"
                    className="button delBtn"
                    onClick={() => {
                        this.props.delData(this.props.index);
                    }}
                />
            </div>
        );
    }
}

export default ShowData;
