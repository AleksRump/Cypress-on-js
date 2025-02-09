export class Quieez{

    quieez_Button = '[href="/#/quizzes"] > .mat-list-item-content > .mat-list-text > .mat-line'
    new_Quieeze_Button = '.controls > a > .mat-raised-button > .mat-button-wrapper'
    name_Quieeze_textbox = '#mat-input-2'
    add_Quiestion_button = '.mat-button-wrapper > .mat-icon'
    quiestion_type_radiobutton = '#mat-radio-2 > .mat-radio-label > .mat-radio-label-content'
    quiestion1_textbox = '#mat-input-3'
    save_quieeze_button = '.form-controls > .controls > :nth-child(2) > .mat-button-wrapper'
    choose_quieeze_dropdown = '#mat-expansion-panel-header-167'
    delete_quiezee_button = '#cdk-accordion-child-167 > .mat-expansion-panel-body > .horizontal-group > .buttons > .mat-warn'
    acception_delete_quieeze_modalwindow_button = '.mat-dialog-actions > .mat-warn'

    quieezPage(){
        cy.get(this.quieez_Button).click()
    }

    createQuieeze(){
        cy.get(this.new_Quieeze_Button).click()
    }

    EnternameQuieeeze(nameQu){
        cy.get(this.name_Quieeze_textbox).type(nameQu)

    }

    addQuiestion(){
        cy.get(this.add_Quiestion_button).click()
    }

    quiestionType(){
        cy.get(this.quiestion_type_radiobutton).click()

    }

    enterFirstQuiestion(firstqu){
        cy.get(this.quiestion1_textbox).type(firstqu)

    }

    saveQuieeze(){
        cy.get(this.save_quieeze_button).click()
        cy.wait(1500)
        cy.get(this.choose_quieeze_dropdown).click()

    }

        deleteQuieeze(){
        cy.get(this.delete_quiezee_button).click()
        cy.wait(1500)
        cy.get(this.acception_delete_quieeze_modalwindow_button).click()

    }

   }