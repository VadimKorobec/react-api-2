import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    images: '',
  };

  handleImagesChange = event => {
    this.setState({ images: event.currentTarget.value.toLowerCase().trim() });
  };

  handleSubmit = event => {
    event.preventDefault();

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
