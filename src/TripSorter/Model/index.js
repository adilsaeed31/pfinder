// @flow

// type assignment
import type DealsType from '../Types'

export default class TripSorterModel {
  
  constructor(props: DealsType){
    this.initialize(props)
  }

  initialize(props: DealsType) {
    this.cost = props.cost || 0
    this.departure = props.departure || "N/A"
    this.arrival = props.arrival || "N/A"
    this.discount = props.discount || 0
    this.duration = {
      h: props.duration.h || "00",
      m: props.duration.m || "00",
    }
    this.reference = props.reference || "N/A"
    this.transport = props.transport || "N/A"
  }

}