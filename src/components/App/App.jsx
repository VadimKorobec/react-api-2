import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Modal } from '../Modal/Modal';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: null,
    showMadal: false,
    loading: false,
  };

  handleFormSubmit = images => {
    console.log(images);
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=31618598-dd0b87f36bc5180b6dfd99237&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(images => this.setState({ images }))
      .finally(() => this.setState({ loading: false }));
  }

  toggleModal = () => {
    this.setState(state => ({ showMadal: !state.showMadal }));
  };
  render() {
    const { showMadal, images } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.loading && <h1>Loading ...</h1>}
        {images && <ImageGallery />}
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
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    );
  }
}
