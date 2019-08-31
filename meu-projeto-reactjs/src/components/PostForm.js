import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form as FinalForm } from 'react-final-form';
import { 
    Form, 
    Button,
} from 'reactstrap';
import { addPostAction, clearPostAction } from '../redux/posts';
import { validatePostDescription } from '../utils/validations';
import InputField from './InputField';

class PostForm extends Component {

    constructor(props) {
        super(props);

        this.inputDescription = React.createRef();
    }

    onSubmit = (values, form) => {
        const { addPost } = this.props;
        const { description } = values;
        addPost(description);
        this.inputDescription.current.focus();
        setTimeout(form.reset);
    }
    
    onClearClick = () => {
        const { clearPost } = this.props;
        clearPost();
    }
    
    renderForm = (renderProps) => {
        const { handleSubmit, form } = renderProps;
        const { submitting, pristine, invalid } = form.getState();
        return (
            <Form onSubmit={handleSubmit} className="mb-2">
                <h1>Postagens</h1>

                <InputField
                    rows={3}
                    type="textarea"
                    name="description"
                    id="input-description"
                    label="Descrição"
                    innerRef={this.inputDescription}
                    validate={validatePostDescription}
                />
                
                <Button type="submit" disabled={submitting || pristine || invalid}>Postar</Button>
                {' '}
                <Button onClick={this.onClearClick}>Limpar</Button>
            </Form>
        );
    }

    render() {
        return (
            <FinalForm 
                onSubmit={this.onSubmit}
                render={this.renderForm}
            />
        )
    }
}

const mapDispatchToProps = {
    addPost: addPostAction,
    clearPost: clearPostAction,
};

export default connect(null, mapDispatchToProps)(PostForm);