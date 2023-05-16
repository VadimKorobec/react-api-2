import { Component } from 'react';
import { Modal } from '../Modal/Modal';

export class App extends Component {
  state = {
    showMadal: false,
  };

  toggleModal = () => {
    this.setState(state => ({ showMadal: !state.showMadal }));
  };
  render() {
    const { showMadal } = this.state;

    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showMadal && (
          <Modal onClose={this.toggleModal}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              necessitatibus nostrum sed eaque deserunt libero voluptatum
              voluptatibus minus labore eum commodi ut rem, vel laudantium
              tenetur, inventore nam, eveniet a?
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </div>
    );
  }
}
