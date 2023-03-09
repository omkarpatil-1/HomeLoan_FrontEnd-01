import { title } from 'process';

export class Menu {
    public static menu: Array<any> = [
      {
        admin: [
          {path: "adminbash", title: "Add Employee", icon: "pe-7s-graph", class: "" }
          ,
          {path:"viewemp" , title:"show employee" ,icon:"pe-7s-graph", class:""}
         
      ],
      emp: [
        {path: "empdash", title: "dashbord", icon: "pe-7s-graph", class: "" },
        {path: "demo", title: "Demmmo", icon: "pe-7s-graph", class: "" }
  
    ],
  
    operation:[
  
      {path: "oeenq", title: "VIEW Cibil", icon: "pe-7s-graph", class: "" },
      {path: "cibil", title: "Create Cibil", icon: "pe-7s-graph", class: "" },
      //{path: "saveenquiry", title: "SaveEnquiry", icon: "pe-7s-graph", class: "" },
    ],
    relation:[
       
        {path: "review", title: "VIEW ENQUIRY", icon: "pe-7s-graph", class: "" },
        {path:"sendmail", title:"Send MAIL", icon:"pe-7s-graph",class:""},
        {path: "recustomer", title: "REGISTER CUSTOMER", icon: "pe-7s-graph", class: "" },
        {path: "redocument", title: "UPLOAD DOCUMENT", icon: "pe-7s-graph", class: "" }

      ],
      account:[
        //{path: "viewapp", title: "VIEW APPLICATION", icon: "pe-7s-graph", class: "" },
        {path: "ledger", title: "LEDGER APPLICATION", icon: "pe-7s-graph", class: "" },
        {path: "loan", title: "LOAN APPLICATION", icon: "pe-7s-graph", class: "" },
        {path: "sanction", title: "View APPLICATION", icon: "pe-7s-graph", class: "" }
       

      ],
      cr:[{path: "credit", title: "Applications", icon: "pe-7s-graph", class: "" },

      ],
      Admin:[{path: "abcdash", title: "DASHBOARD", icon: "pe-7s-graph", class: "" }],

      telehead:[
                {path: "viewpayer", title: "VIEW APPLICATION", icon: "pe-7s-graph", class: "" },
                {path: "viewdefault", title: "VIEW Default", icon: "pe-7s-graph", class: "" },
        
      ],
      manager:[
        {path: "viewapp", title: "VIEW APPLICATION", icon: "pe-7s-graph", class: "" },
        {path: "viewemi", title: "VIEW EMI", icon: "pe-7s-graph", class: "" },           
      ],
      }
    ];

  }
  