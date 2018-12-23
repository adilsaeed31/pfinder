// @flow
import * as React from 'react'

type Props = {
    from: string,
    to: string,
    price: string,
    info: string,
}

export default function InfoRow(props: Props) {
    return   <div className="columns is-mobile has-background-light is-i-bottom-2">
    <div className="column">
      <div className="columns is-mobile is-marginless">
        <div className="column">
          <p>London</p>
        </div>
        <div className="column">
          >
        </div>
        <div className="column">
          <p>Paris</p>
        </div>
        <div className="column">
          <p>100 E</p>
        </div>
      </div>
      <div className="columns is-mobile is-marginless">
        <div className="column">
          <p>Train AB123 for 02h15</p>
        </div>
      </div>
    </div>
  </div>
}