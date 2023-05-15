import { Component } from 'react';
import { Backdrop, Content } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    console.log('I see modal');
  }

  componentWillUnmount() {
    console.log('I cant  see modal ');
  }

  render() {
    return (
      <Backdrop>
        <Content>{this.props.children}</Content>
      </Backdrop>
    );
  }
}
