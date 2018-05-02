import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';
import * as actions from './components/exampleAction/testAction';
import LoginForm from './components/forms/LoginForm';
import ButtonContainer from './components/buttons/ButtonContainer';
import { Heading } from './style/components';
import Button from './style/components/buttons/Button';
import ScrollHeader from './scroll/ScrollHeader';
import {
  fontSize,
  lineHeight,
  color,
  fontWeight,
  spacing
} from './style/config';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarHeight: 0
    };
  }
  handleLogin = value => {
    console.log('들어왔니?', value);
  };

  componentDidMount() {
    const navbarHeight = document.getElementById('header').offsetHeight;
    this.setState({ navbarHeight });
  }

  render() {
    return (
      <div className="App" style={{ height: 2000 }}>
        <ScrollHeader navbarHeight={this.state.navbarHeight} />
        <div style={{ paddingTop: 100 }}>
          <LoginForm onSubmitFunc={this.handleLogin} />
          <div>
            <Heading>Heading</Heading>
          </div>
          <Heading>Heading2</Heading>
          <a href="">aaa</a>
          <table>
            <thead>
              <tr>
                <th>aaaaa</th>
                <th>aaaaa1</th>
                <th>aaaaa2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>aaaaa</td>
                <td>aaaaa1</td>
                <td>aaaaa2</td>
              </tr>
            </tbody>
          </table>
          <Button.FloatWrap>
            <Button.Float icxStyle="secondary">
              <div>
                <div className="inner">aaa</div>
              </div>
            </Button.Float>
          </Button.FloatWrap>
          <ButtonContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.testAction.get('counter'),
    list: state.testAction.get('list')
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleTest: arg => dispatch(actions.create(arg)),
  handleTestremove: arg => dispatch(actions.remove(arg)),
  handleTestgetList: (arg = null) => dispatch(actions.get(arg))
});

injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0,0,0,0.3);
  }

  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }

  body {
    margin: 0;
    font-size: ${fontSize.body};
    font-weight: ${fontWeight.normal};
    /* line-height: ${lineHeight.body}; */
    ${color.default.color};
    text-align: left;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: ${spacing.space2};
  }

  p {
    margin-top: 0;
    margin-bottom: ${spacing.space1};
  }
  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: ${fontWeight.normal};
  }

  dd {
    margin-bottom: .5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  dfn {
    font-style: italic;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub { bottom: -.25em; }
  sup { top: -.5em; }

  a {
    color: #0000FF;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;

    &:hover {
      color: #0000FF;
      text-decoration: none;
    }
  }


  img {
    vertical-align: middle;
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }
  table {
    border-collapse: collapse;
  }

  caption {
    padding-top: ${spacing.space0};
    padding-bottom: ${spacing.space0};
    color: inherit;
    text-align: left;
    caption-side: bottom;
  }

  th {
    text-align: inherit;
  }
  
  label {
    display: inline-block;
    margin-bottom: ${spacing.space1}
  }


  button {
    border-radius: 0;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type="radio"],
  input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }


  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: listbox;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }


  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(App);
