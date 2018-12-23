// @flow
import * as React from 'react'

// constants
import { CHEAPEST, FASTEST } from './constants/constants'

// components
import InfoRow from './components/InfoRow'

// type assignment
type State = {
  hasType: ?string|null,
  cityList: Array<string>,
  currency: string|null,
  deals: Array<{
    arrival: string,
    cost: number,
    departure: string,
    discount: number,
    duration: {
      h: string,
      m: string,
    },
    reference: string,
    transport: string,
  }>
}

export default class TripSorter extends React.PureComponent<State> {
  state = {
    hasType: null,
    currency: null,
    cityList: [],
    deals: [],
  }

  componentDidMount() {
    let list = new Set()
    let cities = []

    fetch(`/response.json`)
    .then(res => res.json())
    .then(res => {
      // Adding to set object to remove dups
      res.deals.map(f => list.add(f.arrival)) 
      // pushing to new array for array type
      list.forEach(v => cities.push(v))
      // set to state
      this.setState({cityList: cities})
    })
   
  }

  handleType = (hasType) => {
    this.setState({hasType})
  }

  handleSearch = () => {
    
  }

  render() {
    let {hasType, cityList} = this.state
    let options = []



    return <section className="section">
      <div className="container has-text-centered is-bottom-2">
        <div className="columns">
          <div className="column is-full">
            <h1 className="title">TripSorter</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4 is-offset-4">
                 <div className="select is-fullwidth">
                  <select>
                    <option value="">From</option>
                     {
                       cityList.map(o => <option value={o}>{o}</option>)
                     }
                  </select>
                </div>              
          </div>
        </div>
        <div className="columns">
          <div className="column is-4 is-offset-4">
                   <div className="select is-fullwidth">
                    <select>
                      <option value="">To</option>
                        {
                          cityList.map(o => <option value={o}>{o}</option>)
                        }
                    </select>
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
      <div className="container is-bottom-2">
        <InfoRow/>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-offset-4-desktop is-one-third-desktop is-full-touch is-paddingless">
            <button className="button is-fullwidth">
              <span className="icon is-small">
                <i className="fas fa-undo"/>
              </span>
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  }
}
