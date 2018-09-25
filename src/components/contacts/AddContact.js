import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import { connect } from 'react-redux';
import { addContact } from '../../actions/contactActions';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    nickname: '',
    website: '',
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, phone, website, nickname } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
      website,
      nickname
    };

    //// SUBMIT CONTACT ////
    this.props.addContact(newContact);

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      nickname: '',
      website: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors, nickname, website } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Adicionar Contato</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Inserir Nome"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Inserir Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Inserir Fone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />{' '}
            <TextInputGroup
              label="Apelido"
              name="nickname"
              placeholder="Inserir Apelido"
              value={nickname}
              onChange={this.onChange}
              error={errors.nickname}
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
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addContact }
)(AddContact);
