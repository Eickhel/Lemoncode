declare const mainStyle: string;
declare const exerciseStyle: string;
declare const numbers: string[];
declare const letters: string[];
declare const agentSmith: {
    name: string;
    role: string;
    country: string;
};
declare const head: ([first]: string[]) => string;
declare const tail: ([, ...args]: string[]) => string[];
declare const init: (inputArray: any) => any;
declare const last: (inputArray: any) => any;
declare const concat: (a: any, b: any) => any[];
declare const concatOpt: (...args: any[]) => never[];
declare function clone(source: any): any;
declare const a: {
    name: string;
    surname: string;
    country: string;
};
declare const b: {
    name: string;
    age: number;
    married: boolean;
};
declare function merge(source: any, target: any): any;
declare const books: {
    title: string;
    isRead: boolean;
}[];
declare function isBookRead(books: any, titleToSearch: any): any;
interface book {
    title: string;
    isRead: boolean;
}
declare const booksTS: book[];
declare const isBookReadTS: (books: book[], titleToSearch: string) => boolean;
declare class SlotMachine {
    coins: number;
    private spinSlot;
    play(): void;
}
declare const machine1: SlotMachine;
declare const set: (user: any, property: any, value: any) => any;
declare const julia: {
    name: string;
    surname: string;
    age: number;
};
declare const updatedJulia: any;
declare const curriedSet: (property: any) => (user: any, value: any) => any;
declare const setName: (user: any, value: any) => any;
declare const setSurname: (user: any, value: any) => any;
declare const setAge: (user: any, value: any) => any;
declare const students: {
    name: string;
    califications: number[];
}[];
declare const mean: (list: any) => number;
declare const summarizeClassRoom: (studentList: any) => any;
interface StudentSummary {
    name: string;
    highestCalification: number;
    averageCalifications: number;
}
