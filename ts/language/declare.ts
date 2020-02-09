declare var Tree: any; // there is some variable Tree out there

/*
    In this case you are only telling the compiler that there is something called Tree that,
    you will manage and don't care for much typesafety beyond the fact that it is there.
 */


declare module 'lib/errorInfoHandler' {
   var noTypeInfoYet: any; // any var name here really
   export = noTypeInfoYet;
}