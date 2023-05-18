import { Component } from 'react';
import toast from 'react-hot-toast';

export class Searchbar extends Component {
  state = {
    images: '',
  };

  handleImagesChange = event => {
    this.setState({ images: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.images.trim() === '') {
      return toast.error('Please name image');
    }
    this.props.onSubmit(this.state.images);
    this.reset();
  };

  reset = () => {
    this.setState({ images: '' });
  };

  render() {
    const { images } = this.state;

    return (
      <div>
        <header>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="images"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              value={images}
              onChange={this.handleImagesChange}
            />
            <button type="submit">Find</button>
          </form>
        </header>
      </div>
    );
  }
}
