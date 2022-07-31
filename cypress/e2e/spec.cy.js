let domain = 'https://main--reddit-lite-2eb4be.netlify.app/'
describe('visit page', () => {
  it('visits reddit client', () => {
    cy.visit(domain)
    cy.get('.posts-wrapper')
  })
})
describe('interactions', () => {
  it('click subreddit', () => {
    cy.get('.subreddit-btn').first().click()
    cy.get('.filterbar').find('h4')
  })
  it('search for post', () => {
    cy.get('input[name=query]').type('react')
    cy.get('.search').find('button').click()
  })
  it('click filters (hot, new, top)', () => {
    cy.get('.subreddit-btn').first().click()
    cy.get('.filterbar').get('#hot-btn').click()
    cy.get('.filterbar').get('#new-btn').click()
    cy.get('.filterbar').get('#top-btn').click()
  })
  it('click comments', () =>{
    cy.get('.posts-wrapper').get('#comment-0').click()
  })
  it('upvote', () =>{
    cy.get('.posts-wrapper').get('#upvote-0').click()
    cy.get('.posts-wrapper').get('.upvotes').find('p').should('be.visible')
  })
  it('downvote', () =>{
    cy.get('.posts-wrapper').get('.upvotes').click()
    cy.get('.posts-wrapper').get('.upvotes').find('p').should('be.visible')
  })
})