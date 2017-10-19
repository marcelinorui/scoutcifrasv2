import { CifraImage } from "../../../app/cifras/image/CifraImage";

export class Galo extends CifraImage {
    constructor() {
        super("Galo",
            [
                'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAImjI+pywYNH2RyqmoRzo6nzYGZaJGTGXmaeqCNS7FdANT2jdvyUQAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIrjI+poH0coFtGTgTtrXzj7nXaloUPGJZmhHqq+aYtOV+xW08ZwPf+z1spCgA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIljI+poL0ODYtu0ndxRnZLz4FH55GbmaGXSrGRC8EVQNf2TYtIAQA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAInjI+pwO3flFyzGmArznLz5H1HKAakeH4pt2at9WolEk91d0G6MycFADs='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIsjI+pwO3fDFD0zHDrkpre3FlciHxkOZ5YeprqCquuzJJzW4e3nXcfBHS8FAUAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAInjI+pwO3fDFB01SvxnZrynnzgIY5BOaKg2rGai8GbiciV7UG6QycFADs='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAImjI+pwO3flFyzGmArznLz5H1HKAakeH4pt2at9WolEk91N485UgAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIrjI+pwO3fDFD0zHDrkpre3FlciHxkOZ5YeprqCquuzJJzW4e3nXe7/lIUAAA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAImjI+pwO3fDFB01SvxnZrynnzgIY5BOaKg2rGai8GbiciV7dF6UgAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAIALAAAAAAUABQAgQAAAH9/fwAAAAAAAAIolI+pywYNH2RyqmoRzo6nzW3AOIlkpAQWmLGrp8GHW8qdMOb6rttHAQA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIujI+poH0coFtGTgTtrXzj7nXaloUPGJZmhHqq+aZtNbJ2AtSxO19ZDgwKgStFAQA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAInjI+poL0ODYtu0ndxRnZLz11AF5DNmJiZKoIHS8GRDNHViOc67iIFADs='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAIALAAAAAAUABQAgQAAAH9/fwAAAAAAAAIrlI+pwO3flFyzGmArznLz5H1HKApkZJ1MRgoB134xXCIzW4/5dUG+szsUAAA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIvjI+pwO3fDFD0zHDrkpre3FlciHxkOZ5YeprqCquuzJJzCYox7tXhbZNAho6XogAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIpjI+pwO3fDFB01SvxnZrynnzgIY5B6ZXooprI2sGajNGbS+ISxDv6UQAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAQALAAAAAAUABQAggAAADAwMGhoaEhISAAAAAAAAAAAAAAAAAMtSLrcDjDKGZ19NyugM+/WBzbiuJQmgQaA0KGVhg5omDL1mIP7e5+/TVA1VCQAADs='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIujI+pwO3fDFD0zHDrkpre3FlciHxkOZ5YeprqCquuzJJzCYox7tXhbfN1cq9AAQA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAIALAAAAAAUABQAgQAAAH9/fwAAAAAAAAIplI+pwO3fDFB01SvxnZrynnzgIY5C6ZXoAgTIGqrmO5N1dsOajvE3VgAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIvjI+pywnQ1DMwohqmzThvf3WLdlkidR6k06To6FKjKa5M/ZF2q37vHoHEbkBTowAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIjjI+pywbNwINJ0jqvy9rq/YGhN4aYiZCoarIj18IverjfUwAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAIrjI+pGwAM24tqTnoszuhS70Fhg41jcpIik6rsu1al/KGbi0dXu2h3/gsUAAA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAImjI+pwOrbngwMTFnvyxrannDgIY5UNJaXOrEYqrkbvNKt/X7mHhQAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAIALAAAAAAUABQAgQAAAH9/fwAAAAAAAAIylI+pywnQ1DMwoirmxUdTBwQOuJFjxHVpuaxd47GM68pUfZ2WF6OvpcrgWhkgaDhrFAAAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAEALAAAAAAUABQAgAAAAAAAAAImjI+pywbNwINJ0jqvy9rq/YGhF3GBuZCHGp7ox45vN18xXFN3FxQAOw=='
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAIALAAAAAAUABQAgQAAAH9/fwAAAAAAAAIulI+pKwAM24tqTnoszuhS70Fhg41jcpIik6rsu1al3DkdWtk3pwS0u9FsDC1MAQA7'
                , 'data:image/gif;base64,R0lGODlhFAAUAHAAACH5BAEAAAQALAAAAAAUABQAggAAADAwMGhoaEhISAAAAAAAAAAAAAAAAAMtSLrcDtDJF6clEFyb9+wepYUNSC7mEgDClaYiM4wS7FahzeGe/vEbXw14KiYAADs='
            ]
        ,null);
    }
}

