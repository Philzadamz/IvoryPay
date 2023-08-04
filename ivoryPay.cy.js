import { faker } from '@faker-js/faker'; //faker library
const sex = faker.person.sexType();
const firstName = faker.person.firstName(sex);
const lastName = faker.person.lastName();
const RandomWord = faker.helpers.arrayElement(['IvoryPay', 'One Click Pay', 'newBusiness'])
const RandomNumber = faker.helpers.arrayElement(['07062721772', '080559191869', '080542274302'])
const serverId = 'jogq019f';
let serverDomain = "jogq019f.mailosaur.net"
let emailAddress = 'adamz3145'+'@'+serverDomain
let emailConfirmation 
let dashboard
//const compmail =
describe("Register Now", ()=> {
    it("Sign Up", ()=> {
        Cypress.on('uncaught:exception', (err, runnable) => {

            // Log the error to the console for easy debugging      
            console.error(err);
            // returning false here prevents Cypress from failing the test      
            return false;
        });
        cy.visit("https://qa.d1ainun5cjrnni.amplifyapp.com", {retryOnNetworkFailure: true})
        cy.fixture('elements').then((loc) => {
            cy.get(loc.btn_SignUp).click({force:true})
            cy.get(loc.firstName).type(firstName)
            cy.get(loc.lastName).type(lastName)
            cy.get(loc.emai).type(emailAddress)
            cy.get(loc.businessName).type(RandomWord)
            cy.get(loc.country).click({force: true})
            cy.get(loc.countryValue).click({force: true})
            cy.get(loc.PhnNumber).type(RandomNumber)
            cy.get(loc.Password).type('Adamz12345$')
            cy.get(loc.cPassword).type('Adamz12345$')
            cy.get(loc.radioBtn).check()
            cy.get(loc.radioBtn2).check()
            cy.get(loc.termsChckBox).check()
            cy.wait(5000)
            cy.get(loc.submitBtn).click()
            cy.wait(10000)
            cy.mailosaurGetMessage(serverId, {sentTo: emailAddress}).then(email =>{
                expect(email.html).to.haveOwnProperty('body');
                 cy.document({ log: false }).invoke({ log: false }, 'write', email.html?.body);
                 emailConfirmation = email.html.links[1].href
                 cy.wait(5000)
                 dashboard = email.html.links[1].href
                 cy.wait(5000)
                 cy.visit(emailConfirmation)
                 cy.wait(10000)
                
            
            })

            
        })

    })
    
    it('login', () => {
        cy.visit('https://staging-ivry-dashboard.vercel.app/')
        cy.get('#email').type(emailAddress)
        cy.get('#password').type('Adamz12345$')
        cy.get('button[type=submit]').click()
     })


});