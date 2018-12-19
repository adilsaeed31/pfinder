// @flow
import * as React from 'react'

export default class TripSorter extends React.PureComponent {
  componentDidMount() {
  }

  render() {
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
              <div className="control is-loading">
                <input className="input" type="text" placeholder="From"/>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <div className="field">
              <div className="control is-loading">
                <input className="input" type="text" placeholder="To"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  }
}