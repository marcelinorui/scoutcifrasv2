import { ScoutCifrasService } from "../../app/scoutcifras.service";

export interface ICifra {
    name:string;
    type: 'Imagem'|'Texto';
    passwordFieldType: "Year" | "Char" | "String" | "Integer" | "None";
    passwordField:string|number|null;
    canCypher:boolean;
    canDecypher:boolean;
    templateName: string;
    Cypher(text:string, password:string):string;
    Decypher(text:string, password:string):string;
    GetHelpTemplate(service:ScoutCifrasService):void;
    GetHelpDebugDic(isCypher:number): string;
}