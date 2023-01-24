import ReactDOM from 'react-dom';
import Star from './Star';
import Home from './Home';
import StarRating from './StarRating';
import ColorProvider from './ColorProvider';
import { useColors } from './ColorProvider';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders a star', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Star />, div);
  expect(div.querySelector('svg')).toBeTruthy();
});

test('renders home', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <ColorProvider>
        <Home />
      </ColorProvider>
    </Router>,
    div
  );
  // Ponieważ id nie jest zdefiniowane
  expect(div.querySelector('.photo-card')).toBeFalsy();
});

test('renders starRating', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarRating />, div);
  expect(div.querySelector('svg')).toBeTruthy();
});
