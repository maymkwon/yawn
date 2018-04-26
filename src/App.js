import React, { Component } from 'react';
import { connect } from 'react-redux'
import ContactPage from './components/exampleFrom/ContactPage'
import ValidateForm from './components/exampleFrom/ValidateForm'
import * as actions from './components/exampleAction/testAction';
import { toJS } from 'immutable'
// import TestLazy from './components/exampleLazy/TestLazy';
import ConfigRoute from './routes/ConfigRoute'
import GridLayout from './components/exampleGrid/GridLayout'
import ButtonContainer from './components/buttons/ButtonContainer'
import styled from 'styled-components'
import { Spring, Transition, config} from 'react-spring'
import InputTest from './InputTest'
import LoginForm from './components/forms/LoginForm'

const Inputs = styled.input`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #3399FF;
  transition: 0.4s;
`

class App extends Component {
  state = {
    focus: false
  }
  // componentDidMount() {
  //   this.props.handleTestgetList(10)
  // }

  onBlur = (e) => {
    this.setState({ focus: false })
  }

  onFocus = (e) => {
    this.setState({focus: true})
  }

  handleLogin = () => {
    console.log('handleLogin')
  }
  
  render() {
    const {focus} = this.state
    const items = ['1', '1', '1', '1', '1', '1', '1']
    return (
      <div className="App">
        <LoginForm handleSubmit={this.handleLogin}/>
        

        {/* <Spring
          from={{ color: 'black' }}
          to={{
            size: focus ? 20 : 14,
            top: focus ? 16 : 0,
            opacity: focus ? 1 : 0,
            show: focus ? true : false
          }}
          onblur={this.onBlur} 
          onfocus={this.onFocus}
          render={(props) => <InputTest {...props}/>}
        />

        <ul>
          <Transition
            native
            keys={items.map(item => item.key)}
            from={{ height: 0, margin: 10}}
            enter={{ height: 40, backgroundColor: 'red'}}
            leave={{ height: 0, backgroundColor: 'red'}}>
            {items.map(item => styles => <li style={styles} >{item}</li>)}
          </Transition>
        </ul> */}
      </div>
    );
  }
}
const TestBox2 = ({ opacity }) => {
  return (<span style={{ opacity }}>on2222</span>)
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.testAction.get('counter'),
    list: state.testAction.get('list')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleTest: (arg) => dispatch(actions.create(arg)),
  handleTestremove: (arg) => dispatch(actions.remove(arg)),
  handleTestgetList: (arg = null) => dispatch(actions.get(arg))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);