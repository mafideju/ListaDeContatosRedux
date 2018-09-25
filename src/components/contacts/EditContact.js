import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import { connect } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactActions';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    website: '',
    username: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone, website, username } = nextProps.contact;
    this.setState({
      name,
      email,
      phone,
      website,
      username
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  onSubmit = e => {
    e.preventDefault();

    const { name, email, phone, website, username } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Nome Obrigatório' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email Requerido' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Fone Obrigatório' } });
      return;
    }

    const { id } = this.props.match.params;

    const updContact = {
      id,
      name,
      email,
      phone,
      website,
      username
    };

    //// UPDATE CONTACT ////
    this.props.updateContact(updContact);
    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      website: '',
      username: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, website, username, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Editar Contato</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Nome"
              name="name"
              placeholder="Insira Novo Nome"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Insira Novo Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Fone"
              name="phone"
              placeholder="Insira Novo Fone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <TextInputGroup
              label="Apelido"
              name="username"
              placeholder="Inserir Apelido"
              value={username}
              onChange={this.onChange}
              error={errors.username}
            />{' '}
            <TextInputGroup
              label="Site"
              name="website"
              placeholder="Inserir Site"
              value={website}
              onChange={this.onChange}
              error={errors.website}
            />
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact.contact
});

export default connect(
  mapStateToProps,
  { getContact, updateContact }
)(EditContact);
