import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

export class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(login, { error, loading }) => {
          return (
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await login();
                this.setState({ email: '', password: '' });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Log into an existing account</h2>
                <Error error={error} />
                <label htmlFor="email">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">Log In</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default Login;
