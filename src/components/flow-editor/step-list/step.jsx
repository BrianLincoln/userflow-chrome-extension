import React from 'react';
import StepEditor from './step-editor/step-editor';

class Step extends React.Component {
    constructor(props) {
        super(props);

        this.showStepEditorClick = this.showStepEditorClick.bind(this);
        this.hideStepEditor = this.hideStepEditor.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);

        this.state = {
            showEditor: false
        };
    }
    showStepEditorClick() {
        this.setState({ showEditor: !this.state.showEditor });
    }
    hideStepEditor() {
        this.setState({ showEditor: false });
    }
    handleDeleteClick(e) {
        e.stopPropagation();
        this.props.actions.removeStep(this.props.flowId, this.props.step._id);
    }
    render() {
        if (this.state.showEditor === true) {
            return <StepEditor {...this.props} hideStepEditor={this.hideStepEditor}  />;
        } else {
            return (
                <a className="list-group-item" data-tar={'step' + this.props.step.id} onClick={this.showStepEditorClick}>
                    <span>{this.props.stepNumber + 1}.) {this.props.step.stepType}</span>
                    <span className="pull-right fa fa-trash-o" onClick={this.handleDeleteClick} />
                </a>
            );
        }
    }
}

Step.propTypes = {
    actions: React.PropTypes.object.isRequired,
    flowId: React.PropTypes.string.isRequired,
    step: React.PropTypes.object.isRequired,
    stepNumber: React.PropTypes.number.isRequired
};
export default Step;