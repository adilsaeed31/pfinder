// @flow
import * as React from 'react'

// Constants
import { CHEAPEST, FASTEST } from './Constants'

// Components
import InfoRow from './Components/InfoRow'

// Type assignment
import { DealsType } from './Types'

// Api Service
import Fetcher from './Api'

// Model
import TripSorterModel from "./Model"

type State = {
  hasType: string | null,
  cityList: Array<string>,
  currency: string | null,
  deals: Array<DealsType>,
  departure: string,
  arrival: string,
  isSubmit: boolean,
  isLoading: boolean,
}

export default class TripSorter extends React.PureComponent<State> {
  state = {
    hasType: null,
    currency: null,
    cityList: [],
    deals: [],
    departure: "",
    arrival: "",
    isSubmit: false,
    isLoading: false,
  }

  componentDidMount() {
    let list = new Set()
    let cities = []

    Fetcher.get()
      .then(res => {
        // Adding to set object to remove dups
        res.deals.map(f => list.add(f.arrival))
        // pushing to new array for array type
        list.forEach(v => cities.push(v))
        // set to state
        this.setState({cityList: cities, currency: res.currency})
      })
  }

  handleType = (hasType) => {
    this.setState({hasType})
  }

  handleSearch = () => {
    let {hasType, departure, arrival} = this.state
    let deals = []
    Fetcher.get({hasType, departure, arrival})
      .then(res => {

        deals = res.deals.filter(f => f.departure === departure && f.arrival === arrival)

        if (hasType === CHEAPEST) {

        }
        if (hasType === FASTEST) {

        }

        this.setState({
          deals: deals.map(item => new TripSorterModel(item)),
          currency: res.currency
        })
      })

  }

  handleReset = () => {
    this.setState({
      departure: "",
      arrival: "",
      hasType: null,
      deals: [],
      isSubmit: false,
      isLoading: false
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, this.watchProps)
  }

  watchProps = async () => {
    let {departure, arrival} = this.state
    if (departure && arrival) {
      await this.setState({isSubmit: true})
    }
  }

  renderDeals = () => {
    let {deals, currency} = this.state
    const Deals = []

    deals.map((item, key) => Deals.push(<InfoRow key={key} item={item} currency={currency}/>))
    return Deals
  }

  render() {
    let {hasType, cityList, departure, arrival, isSubmit, deals} = this.state

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
              <select name="departure" onChange={this.onChange} value={departure}>
                <option value="">From</option>
                {cityList.map((o, i) => <option key={i} value={o}>{o}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <div className="select is-fullwidth">
              <select name="arrival" onChange={this.onChange} value={arrival}>
                <option value="">To</option>
                {cityList.map((o, i) => <option key={i} value={o}>{o}</option>)}
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
            <button className="button is-success"
                    onClick={this.handleSearch}
                    disabled={!isSubmit}>
              <span className="icon is-small">
                <i className="fas fa-search"/>
              </span>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container is-bottom-2">
        {
          this.renderDeals()
        }
      </div>
      {
        isSubmit &&
        <div className="container">
          <div className="columns">
            <div className="column is-offset-4-desktop is-one-third-desktop is-full-touch is-paddingless">
              <button className="button is-fullwidth"
                      onClick={this.handleReset}
                      disabled={!isSubmit}>
              <span className="icon is-small">
                <i className="fas fa-undo"/>
              </span>
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>
      }
    </section>
  }
}
