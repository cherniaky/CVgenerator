import react from "react";
import VisButton from "./VisButton";

class ShowData extends react.Component {
    render() {
        return (
            <div className="schoolData">
                <div>
                    <div>
                        <label className="wide">CompanyName :</label>{" "}
                        <label> {this.props.school} </label>
                    </div>
                    <div>
                        <label className="wide">Title : </label>{" "}
                        <label>{this.props.from} </label>
                    </div>
                    <div>
                        <label className="wide">Tasks : </label>
                        <label>{this.props.to} </label>
                    </div>
                    <div>
                        <label className="wide">YearExp : </label>{" "}
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
