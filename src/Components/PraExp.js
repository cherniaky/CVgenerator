import react from "react";
import ShowData from "./ShowDataPrac";
import VisButton from "./VisButton";

class PraExp extends react.Component {
    constructor(props) {
        super(props);
        this.state = this.props.PraExp;

        this.delEdu = this.delEdu.bind(this);
        this.setEdit = this.setEdit.bind(this);
    }

    delEdu = (index) => {
        this.setState((prevState) => {
            let prevData = prevState.data;
            //  .map((e) => e);
            prevData.splice(index, 1);
            return {
                data: prevData,
            };
        });

        this.props.getPra();
    };

    updateCompany = (e) => {
        // console.log(e.target.value, "  ", this.state.school);
        this.setState({ company: e.target.value });
    };
    updateTitle = (e) => {
        // console.log(e.target.value, "  ", this.state.school);
        this.setState({ title: e.target.value });
    };
    updateTasks = (e) => {
        // console.log(e.target.value, "  ", this.state.school);
        this.setState({ tasks: e.target.value });
    };
    updateExp = (e) => {
        // console.log(e.target.value, "  ", this.state.school);
        this.setState({ exp: e.target.value });
    };

    addQuali = () => {
        return (
            <div className="addQuali">
                <div>
                    <label>CompanyName : </label>{" "}
                    <input
                        type="text"
                        onChange={this.updateCompany}
                        value={this.state.company}
                    ></input>
                </div>
                <div>
                    <label>Title : </label>{" "}
                    <input
                        type="text"
                        onChange={this.updateTitle}
                        value={this.state.title}
                    ></input>
                </div>
                <div>
                    <label>Tasks : </label>{" "}
                    <input
                        type="text"
                        onChange={this.updateTasks}
                        value={this.state.tasks}
                    ></input>
                </div>
                <div>
                    <label>Year Experience : </label>{" "}
                    <input
                        type="text"
                        onChange={this.updateExp}
                        value={this.state.exp}
                    ></input>
                </div>

                <input
                    className="button"
                    type="button"
                    value="submit"
                    onClick={this.submitQuali}
                ></input>
            </div>
        );
    };

    submitQuali = () => {
        let data = {
            company: this.state.company,
            title: this.state.title,
            tasks: this.state.tasks,
            exp: this.state.exp,
        };

        this.setState((prevState) => {
            let prevData = prevState.data;
            //.map((e) => e);
            prevData.push(data);
            return {
                data: prevData,
                edit: 0,
                company: "",
                title: "",
                tasks: "",
                exp: "",
            };
        });

        this.props.getPra(this.state);
    };

    showEdu = () => {
        let subButton;
        if (this.state.edit === 1) {
            subButton = <div></div>;
        } else {
            subButton = (
                <VisButton
                    render={this.props.button}
                    value="Add"
                    onClick={this.setEdit}
                    className="button"
                />
            );
        }
        if (this.state.data.length === 0) {
            return subButton;
        } else {
            console.log(this.state.data);
            let data = [];
            let ts = this.state;
            for (let i = 0; i < this.state.data.length; i++) {
                data.push(
                    <ShowData
                        key={i}
                        index={i}
                        button={this.props.button}
                        school={ts.data[i].company}
                        from={ts.data[i].title}
                        to={ts.data[i].tasks}
                        qual={ts.data[i].exp}
                        delData={this.delEdu}
                    />
                );
            }
            return (
                <div className="showPra">
                    {data}
                    {subButton}
                </div>
            );
        }
    };

    setEdit = () => {
        this.setState({ edit: 1 });
    };

    handleRender = () => {
        if (this.state.edit === 0) {
            return this.showEdu();
        }
        if (this.state.edit === 1) {
            if (this.props.button === "0") {
                this.state.edit = 0;
                return this.showEdu();
            }
            return (
                <div className="PraExpContainer">
                    {this.showEdu()}
                    {this.addQuali()}
                </div>
            );
        }
    };

    render() {
        return (
            <div className="PraExp">
                <h3 className="heading">Practical Experience </h3>
                {this.handleRender()}
            </div>
        );
    }
}

export default PraExp;
