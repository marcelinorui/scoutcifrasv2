import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ScoutCifrasService } from "../app/scoutcifras.service";
import { ICifra } from "../app/cifras/ICifra";
import { IScoutCifrasOption } from "../app/cifras/IScoutCifrasOption";
import { isYear, isLetter, isPositiveInteger } from "../app/helper/validation";

@Component({
  selector: 'app-root',
  providers: [ScoutCifrasService],
  templateUrl: './templates/app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  options: Array<IScoutCifrasOption>;
  selectedOption: IScoutCifrasOption;

  showHelp: boolean = false;

  cifras: Array<ICifra>;
  selectedCifra: ICifra;

  textToCypher: string = '';
  cypheredText: string = '';
  passwordText: string = ''

  helpHtml: string = 'help'


  constructor(private scoutCifrasService: ScoutCifrasService) { }

  ngOnInit(): void {
    this.scoutCifrasService.getOptions().then(
      options => {
        this.options = options;
        this.selectedOption = options[0];
        this.onOptionChange(this.selectedOption);
      }
    );
  }

  onOptionChange(newValue: IScoutCifrasOption) {
    this.selectedOption = newValue;
    this.scoutCifrasService.getCifras(newValue).then(cifras => {
      this.cifras = cifras;

      if (cifras && cifras.length > 0) {
        if (!cifras.find((item) => { return item === this.selectedCifra; })) {
          this.selectedCifra = cifras[0];
          if (this.selectedCifra.passwordFieldType !== "None") {
            this.passwordText = '' + this.selectedCifra.passwordField;
          }
        }
        this.TextCypher();
      }

    });
  }

  onCifraChange(cifra: ICifra) {
    this.selectedCifra = cifra;
    if (this.selectedCifra.passwordFieldType !== "None") {
      this.passwordText = '' + this.selectedCifra.passwordField;
    }
    this.TextCypher();
  }

  onPasswordChange(event) {
    this.passwordText = event.currentTarget.value;
    this.TextCypher();
  }

  onTextToCypherChange(event) {
    this.textToCypher = event.currentTarget.value;
    this.TextCypher();
  }

  TextCypher() {
    if (this.selectedOption.value === 0) {
      this.cypheredText = this.selectedCifra.Cypher(this.textToCypher, this.passwordText);
    } else {
      this.cypheredText = this.selectedCifra.Decypher(this.textToCypher, this.passwordText);
    }
  }

  onShowHelp() {
    this.selectedCifra.GetHelpTemplate(this.scoutCifrasService);
    this.showHelp = true;
  }

  onHideHelp() {
    this.showHelp = false;
  }

  protected isValid(password: any): boolean {
    let pft = this.selectedCifra.passwordFieldType;
    if (pft !== "None") {
      if (pft === "Year") {
        return isYear(password);
      } else if (pft === "Char") {
        return isLetter(password);
      } else if (pft === "Integer") {
        return isPositiveInteger(password);
      }
    }
    return true;
  }

  public GetDebugDic(): string {
    if (this.selectedCifra != null && this.selectedOption != null) {
      return this.selectedCifra.GetHelpDebugDic(this.selectedOption.value);
    }
    return "";
  }
}
