
import { ProfessorType } from "./ProfessoType";
import { Role } from "./Role";

export class Professor{
    idUser!:number;
    names!:string;
    lastNames!:string;
    username!:String;
    password!:string;
    email!:string;
    numberPhone!:number;
    state!:string;
    codeProfessor!:number;
    objProfessorType!: ProfessorType;
    roles!: Role[];

    constructor() {
        this.objProfessorType = new ProfessorType(); 
        this.roles = [];
    }
}