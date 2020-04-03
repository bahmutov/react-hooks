/// <reference types="cypress" />
import React from 'react'
import {mount} from 'cypress-react-unit-test'
import AddUserForm from './AddUserForm'

describe('Add user form', () => {
  it('adds users', () => {
    const addUser = cy.stub()
    mount(<AddUserForm addUser={addUser} />)
    cy.get('[name=name]').type('Joe Smith')
    cy.get('[name=username]').type('joe')
    cy.contains('button', 'Add new user').click()
      .then(() => {
        expect(addUser).to.have.been.calledWith({
          name: 'Joe Smith',
          username: 'joe',
          id: null
        })
      })
  })
})
