// @flow
import * as React from 'react'
import { CHEAPEST, FASTEST } from './constants'

type State = {
  isFromLoading: boolean,
  isToLoading: boolean,
  hasType: string,
}

export default class TripSorter extends React.PureComponent<State> {
  state = {
    isFromLoading: false,
    isToLoading: false,
    hasType: null,
  }

  componentDidMount() {
  }

  handleType = (hasType) => {
    this.setState({hasType})
  }

  render() {
    let {isFromLoading, isToLoading, hasType} = this.state
    return <section className="section">
      <div className="container has-text-centered">
        <div className="columns">
          <div className="column is-full">
            <h1 className="title">TripSorter</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <div className="field">
              <div className={`control ${isFromLoading === true && 'is-loading'}`}>
                <input className="input" type="text" placeholder="From"/>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <div className="field">
              <div className={`control ${isToLoading === true && 'is-loading'}`}>
                <input className="input" type="text" placeholder="To"/>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <div className="buttons has-addons">
              <button onClick={() => this.handleType(CHEAPEST)}
                      className={`button is-primary is-half-width ${hasType === CHEAPEST ? 'is-focused' : 'is-outlined'}`}>
                Cheapest
              </button>
              <button onClick={() => this.handleType(FASTEST)}
                      className={`button is-info is-half-width ${hasType === FASTEST ? 'is-focused' : 'is-outlined'}`}>
                Fastest
              </button>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <button className="button is-success">
              <span className="icon is-small">
                <i className="fas fa-search"/>
              </span>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  }
}