/// <reference types="cypress" />
import React from 'react'
import {mount} from 'cypress-react-unit-test'
import App from './App'

describe('App', () => {
  it('works', () => {
    mount(
      <App />,
      {
        cssFile: 'src/index.css'
      }
    )
  })
})
