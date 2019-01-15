// @flow
import * as React from 'react'

// type assignment
import type DealsType from '../Types'

type Props = {
  item: DealsType,
}

export default function InfoRow({ item, currency }: Props) {
  return <div className="columns is-mobile has-background-light is-i-bottom-2">
    <div className="column">
      <div className="columns is-mobile is-marginless">
        <div className="column">
          <p>{item.departure}</p>
        </div>
        <div className="column">
          >
        </div>
        <div className="column">
          <p>{item.arrival}</p>
        </div>
        <div className="column">
          <strong>{`${(item.cost - item.discount)} ${currency}`}</strong>
        </div>
      </div>
      <div className="columns is-mobile is-marginless">
        <div className="column">
          <p><i className={`fas fa-${item.transport}`}></i> {item.reference} for <strong>{item.duration.h}h{item.duration.m}</strong></p>
        </div>
      </div>
    </div>
  </div>
}