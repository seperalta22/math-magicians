import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <>
    Layout
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
