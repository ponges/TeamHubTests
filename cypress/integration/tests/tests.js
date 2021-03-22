/// <reference types="cypress" />

describe("Testing of K4 Team Hub", () => {

    it("Forgot Password Flow - T78130", () => {
        //open url
        cy.visit("https://teamhub-staging.k4connect.com/").as("teamHubHome");
        cy.get('[data-testid=TA_login-form_reset-password] > .teamhub-auth-MuiButton-label').
            as("forgotPassBtn").click();
        cy.url().should("include", "/login/request-reset");
        cy.get('#TA_forgot-password_email-input').
            as("forgotPasswordEmailInput").
                type("emailnotinsyste@k4.com");
        cy.get('#TA_forgot-password-send-email').
            as("forgotPasswordSendEmail").
                click();
        cy.get('#TA_forgot-password_email-input-helper-text').
            as("msgEmailHelperText").
                contains("The email you entered is not in our system. Please enter a valid email address.");
        cy.get("@forgotPasswordEmailInput").clear().type("invalid.formatemail@com");
        cy.get("@forgotPasswordSendEmail").click();
        cy.get("@msgEmailHelperText").
            contains("Please enter a valid email");
        cy.get("@forgotPasswordEmailInput").clear().type("invalid.formatemail@com");
        cy.go('back'); 
        cy.get('[data-testid=TA_login-form_submit] > .teamhub-auth-MuiButton-label').
            as("loginButton").
                click(); 
        cy.get('#TA_login-form_username-input-helper-text').
            as('login-form_username-input-helper-text').
                contains('email is a required field');
        cy.get('#TA_login-form_password-input-helper-text').
            as('login-form_password-input-helper-text').
                contains('password is a required field'); 
        cy.get('#TA_login-form_username-input').
            as("userNameInput").
                type("nicolas.brown@globallogic.com");
        cy.get('#TA_login-form_password-input').
            as("passwordInout").
                type("Nico@6571"); 
        cy.get("@loginButton").click();
        cy.get('#NB_UserItem > .navigation-MuiSvgIcon-root').
            as('navigation-MuiSvgIcon-root').
                click();
        cy.url().should("include", "k4connect.com/?communityId=");          
        cy.get('#NB-UserItem_logout').
            as('logOutButton').
                click();
        cy.url().should("include", ".com/login");                   

    } )

})