/// <reference types="cypress" />

describe("Testing of ea application", () => {

    it("Login Application", () => {

        //open url
        cy.visit("http://eaapp.somee.com/");
        //click login button with contains...less options
        //cy.contains("Login").click();
        
        //      Get button by id then verify button text then click
        /*cy.get("#loginLink").then(($link) => {
            const linkText = $link.text();
            expect(linkText).is.eql("Login");
        }).click();
        */
        // get text form button by id and save text as alias then click on button then then verify alias text
        // is equal to expected text
        /*
        cy.get("#loginLink").then(($link) => {
        return $link.text();
        }).as("linkText");
        */
        // get login button by id and create alias for button text
        cy.get("#loginLink").click().invoke("text").as("linkText");
        // compare alias to expected Text   
        cy.get("@linkText").then(($x) => {
            expect($x).is.eql("Login");
        })
        //check new url
        cy.url().should("include", "/Account/Login");
        //type in username
        cy.get("#UserName").type("admin");
        //type in password
        cy.get("#Password").type("password");
        //click login button
        cy.get(".btn").click();

        //click Employee list button create alias
        cy.contains("Employee List").click().as("employeeList");

        //find table, identifiable element , go to parent , find unidentifiable element, click
        //cy.get(".table").find("tr").contains("Prashanth").parent().contains("Benefits").click();
        //find table create alias
        cy.get(".table").find("tr").as("rows");
        //use alias and wrap to click all rows
        cy.get("@rows").then(($row) => {
            $row.trigger("click");   
        })
        
        cy.get("@employeeList").click();
        cy.wrap({name:"Karthik"}).should("have.property", "name").and("eq","Karthik");
        // cy.get(".table").find("tr > td").then(($td) => {
        //cy.wrap($td).contains("John").invoke("wrap").parent().contains("Benefits").click();
        //})



    } )

})