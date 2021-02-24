import {RelationTypeEnum, SideEnum} from "../interfaces/interfaces.js";

export const data = {
  entities: [{
    name: "Loan_Request",
    columns: [{
      id: 1,
      field: "Borrower"
    }, {
      id: 2,
      field: "Deadline"
    }, {
      id: 3,
      field: "Amount"
    }]
  }, {
    name: "Borrower",
    columns: [{
      id: 1,
      field: "ID"
    }, {
      id: 2,
      field: "Addressee_ID"
    }]
  }, {
    name: "Addressee",
    columns: [{
      id: 1,
      field: "ID"
    }, {
      id: 2,
      field: "Name"
    }, {
      id: 3,
      field: "Address"
    }]
  }, {
    name: "Intermediary",
    columns: [{
      id: 1,
      field: "ID"
    }, {
      id: 2,
      field: "Address_ID"
    }, {
      id: 3,
      field: "LoanDate"
    }]
  }, {
    name: "Lender",
    columns: [{
      id: 1,
      field: "ID"
    }, {
      id: 2,
      field: "Address_ID"
    }]
  }, {
    name: "Lender_Borrower",
    columns: [{
      id: 1,
      field: "Borrower_ID"
    }, {
      id: 2,
      field: "Lender_ID"
    }, {
      id: 3,
      field: "Percentage"
    }]
  }, {
    name: "Loan_Request_Lender",
    columns: [{
      id: 1,
      field: "Loan_RequestDate"
    }, {
      id: 2,
      field: "Lender_ID"
    }, {
      id: 3,
      field: "Amount"
    }]
  }, {
    name: "Repayment",
    columns: [{
      id: 1,
      field: "Date"
    }, {
      id: 2,
      field: "Amount"
    }]
  }, {
    name: "Loan",
    columns: [{
      id: 1,
      field: "Date"
    }, {
      id: 2,
      field: "DeadlineAgreed_Date"
    }, {
      id: 3,
      field: "RepaymentDate"
    }]
  }, {
    name: "Deadline",
    columns: [{
      id: 1,
      field: "Agreed_Date"
    }]
  }],
  relations: [{
    name: 'BorrowerToLoan_Request',
    type: RelationTypeEnum.OneToMany,
    from: "Borrower",
    to: "Loan_Request"
  }, {
    name: 'BorrowerToLender_Borrower',
    type: RelationTypeEnum.OneToMany,
    from: "Borrower",
    to: "Lender_Borrower"
  }, {
    name: 'BorrowerToAddressee',
    type: RelationTypeEnum.OneToOne,
    from: "Borrower",
    to: "Addressee"
  }, {
    name: 'AddresseeToLender',
    type: RelationTypeEnum.OneToOne,
    from: "Addressee",
    to: "Lender"
  }, {
    name: 'AddresseeToIntermediary',
    type: RelationTypeEnum.OneToOne,
    from: "Addressee",
    to: "Intermediary"
  }, {
    name: 'IntermediaryToLoan',
    type: RelationTypeEnum.OneToOne,
    from: "Intermediary",
    to: "Loan"
  }, {
    name: 'RepaymentToLoan',
    type: RelationTypeEnum.OneToMany,
    from: "Repayment",
    to: "Loan"
  }, {
    name: 'DeadlineToLoan',
    type: RelationTypeEnum.OneToMany,
    from: "Deadline",
    to: "Loan"
  }, {
    name: 'LoanToLender_Borrower',
    type: RelationTypeEnum.OneToOne,
    from: "Loan",
    to: "Lender_Borrower"
  }, {
    name: 'Loan_RequestToLoan_Request_Lender',
    type: RelationTypeEnum.OneToMany,
    from: "Loan",
    to: "Loan_Request_Lender"
  }, {
    name: 'LenderToLender_Borrower',
    type: RelationTypeEnum.OneToMany,
    from: "Lender",
    to: "Loan"
  }, {
    name: 'LenderToLoan_Request_Lender',
    type: RelationTypeEnum.OneToOne,
    from: "Lender",
    to: "Loan_Request_Lender"
  }],
  diagram: {
    entitiesOnDiagram: [{
      name: "Loan_Request",
      rect: {
        top: 20,
        left: 20,
        width: 150,
        height: 150
      }
    }, {
      name: "Borrower",
      rect: {
        top: 5,
        left: 320,
        width: 150,
        height: 150
      }
    }, {
      name: "Addressee",
      rect: {
        top: 30,
        left: 560,
        width: 150,
        height: 150
      }
    }, {
      name: "Intermediary",
      rect: {
        top: 180,
        left: 840,
        width: 150,
        height: 150
      }
    }, {
      name: "Lender",
      rect: {
        top: 250,
        left: 580,
        width: 150,
        height: 150
      }
    }, {
      name: "Lender_Borrower",
      rect: {
        top: 230,
        left: 300,
        width: 150,
        height: 150
      }
    }, {
      name: "Loan_Request_Lender",
      rect: {
        top: 230,
        left: 130,
        width: 150,
        height: 150
      }
    }, {
      name: "Loan",
      rect: {
        top: 480,
        left: 270,
        width: 180,
        height: 150
      }
    }, {
      name: "Repayment",
      rect: {
        top: 500,
        left: 20,
        width: 150,
        height: 150
      }
    }, {
      name: "Deadline",
      rect: {
        top: 460,
        left: 600,
        width: 100,
        height: 100
      }
    }],
    relationsOnDiagram: [{
      name: "BorrowerToLoan_Request",
      startPosition: {
        name: "Borrower",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Loan_Request",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "BorrowerToLender_Borrower",
      startPosition: {
        name: "Borrower",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Lender_Borrower",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "BorrowerToAddressee",
      startPosition: {
        name: "Borrower",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Addressee",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "AddresseeToLender",
      startPosition: {
        name: "Addressee",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Lender",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "AddresseeToIntermediary",
      startPosition: {
        name: "Addressee",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Intermediary",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "IntermediaryToLoan",
      startPosition: {
        name: "Intermediary",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Loan",
        side: SideEnum.Right,
        shiftInPercent: 70
      }
    }, {
      name: "RepaymentToLoan",
      startPosition: {
        name: "Repayment",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Loan",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "DeadlineToLoan",
      startPosition: {
        name: "Deadline",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Loan",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "LoanToLender_Borrower",
      startPosition: {
        name: "Loan",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Lender_Borrower",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      }
    }, {
      name: "LenderToLender_Borrower",
      startPosition: {
        name: "Lender",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Lender_Borrower",
        side: SideEnum.Right,
        shiftInPercent: 70
      }
    }, {
      name: "Loan_RequestToLoan_Request_Lender",
      startPosition: {
        name: "Loan_Request",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Loan_Request_Lender",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "LenderToLoan_Request_Lender",
      startPosition: {
        name: "Lender",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Loan_Request_Lender",
        side: SideEnum.Bottom,
        shiftInPercent: 70
      }
    }]
  }
};
export const data2 = {
  entities: [{
    name: "Supplier",
    columns: [{
      id: 1,
      field: "Delivery_ID"
    }, {
      id: 2,
      field: "Delivery_Date"
    }, {
      id: 3,
      field: "Supplier_ID"
    }]
  }, {
    name: "Delivery",
    columns: [ {
      id: 1,
      field: "Delivery_ID"
    }, {
      id: 2,
      field: "Delivery_Date"
    }, {
      id: 3,
      field: "Supplier_ID"
    } ]
  }, {
    name: "Order_Detail_Delivery",
    columns: [{
      id: 1,
      field: "Delivery_ID"
    }, {
      id: 2,
      field: "Order_ID"
    }, {
      id: 3,
      field: "Order_Detail_ID"
    }]
  }, {
    name: "Product",
    columns: [{
      id: 1,
      field: "Product_ID"
    }, {
      id: 2,
      field: "Supplier_ID"
    }]
  }, {
    name: "Order_Detail",
    columns: [{
      id: 1,
      field: "Order_Detail_ID"
    }, {
      id: 2,
      field: "Product_ID"
    }, {
      id: 3,
      field: "Order_ID"
    }]
  }, {
    name: "Order",
    columns: [{
      id: 1,
      field: "Order_ID"
    }, {
      id: 2,
      field: "Order_Date"
    }, {
      id: 3,
      field: "Headquarters_ID"
    }]
  }, {
    name: "Headquarters",
    columns: [{
      id: 1,
      field: "Headquarters_ID"
    }, {
      id: 2,
      field: "Branch_ID"
    }]
  }, {
    name: "Branch",
    columns: [{
      id: 1,
      field: "Branch_ID"
    }]
  } ],
  relations: [ {
    name: "SupplierToDelivery",
    type: RelationTypeEnum.OneToMany,
    from: "Supplier",
    to: "Delivery"
  }, {
    name: "DeliveryToOrder_Detail_Delivery",
    type: RelationTypeEnum.OneToMany,
    from: "Delivery",
    to: "Order_Detail_Delivery"
  }, {
    name: "Order_DetailToOrder_Detail_Delivery",
    type: RelationTypeEnum.OneToMany,
    from: "Order_Detail",
    to: "Order_Detail_Delivery"
  }, {
    name: "SupplierToProduct",
    type: RelationTypeEnum.OneToMany,
    from: "Supplier",
    to: "Product"
  }, {
    name: "ProductToOrder_Detail",
    type: RelationTypeEnum.OneToMany,
    from: "Product",
    to: "Order_Detail"
  }, {
    name: "OrderToOrder_Detail",
    type: RelationTypeEnum.OneToMany,
    from: "Order",
    to: "Order_Detail"
  }, {
    name: "OrderToHeadquarters",
    type: RelationTypeEnum.OneToOne,
    from: "Order",
    to: "Headquarters"
  }, {
    name: "HeadquartersToBranch",
    type: RelationTypeEnum.OneToMany,
    from: "Headquarters",
    to: "Branch"
  }  ],
  diagram: {
    entitiesOnDiagram: [{
      name: "Supplier",
      rect: {
        top: 80,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "Delivery",
      rect: {
        top: 70,
        left: 240,
        width: 150,
        height: 100
      }
    }, {
      name: "Order_Detail_Delivery",
      rect: {
        top: 0,
        left: 560,
        width: 150,
        height: 100
      }
    }, {
      name: "Product",
      rect: {
        top: 320,
        left: 0,
        width: 150,
        height: 100
      }
    }, {
      name: "Order_Detail",
      rect: {
        top: 250,
        left: 270,
        width: 150,
        height: 100
      }
    }, {
      name: "Order",
      rect: {
        top: 300,
        left: 500,
        width: 150,
        height: 100
      }
    }, {
      name: "Headquarters",
      rect: {
        top: 500,
        left: 460,
        width: 150,
        height: 80
      }
    }, {
      name: "Branch",
      rect: {
        top: 430,
        left: 100,
        width: 150,
        height: 80
      }
    }],
    relationsOnDiagram: [{
      name: "SupplierToDelivery",
      startPosition: {
        name: "Supplier",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Delivery",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "DeliveryToOrder_Detail_Delivery",
      startPosition: {
        name: "Delivery",
        side: SideEnum.Top,
        shiftInPercent: 20
      },
      endPosition: {
        name: "Order_Detail_Delivery",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "Order_DetailToOrder_Detail_Delivery",
      startPosition: {
        name: "Order_Detail",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Order_Detail_Delivery",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      }
    }, {
      name: "SupplierToProduct",
      startPosition: {
        name: "Supplier",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Product",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "ProductToOrder_Detail",
      startPosition: {
        name: "Product",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Order_Detail",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      }
    }, {
      name: "OrderToOrder_Detail",
      startPosition: {
        name: "Order",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Order_Detail",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "OrderToHeadquarters",
      startPosition: {
        name: "Order",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Headquarters",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "HeadquartersToBranch",
      startPosition: {
        name: "Headquarters",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Branch",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      }
    }]
  }
};
export const data3 = {
  entities: [{
    name: "student",
    columns: [{
      id: 1,
      field: "Bob"
    }, {
      id: 2,
      field: "John"
    }, {
      id: 3,
      field: "Tom"
    }]
  }, {
    name: "course",
    columns: [{
      id: 1,
      field: "Chemistry"
    }, {
      id: 2,
      field: "History"
    }, {
      id: 3,
      field: "English"
    }]
  }, {
    name: "professor",
    columns: [{
      id: 1,
      field: "Hamilton"
    }, {
      id: 2,
      field: "Flitvick"
    }, {
      id: 3,
      field: "York"
    }]
  }, {
    name: "group",
    columns: [{
      id: 1,
      field: "G-1"
    }, {
      id: 2,
      field: "G-2"
    }, {
      id: 3,
      field: "G-3"
    }]
  }, {
    name: "progress",
    columns: [{
      id: 1,
      field: "mark"
    }, {
      id: 2,
      field: "subject"
    }]
  }, {
    name: "subject",
    columns: [{
      id: 1,
      field: "Chemistry"
    }, {
      id: 2,
      field: "History"
    }, {
      id: 3,
      field: "English"
    }]
  }, {
    name: "faculty",
    columns: [{
      id: 1,
      field: "Chemical"
    }, {
      id: 2,
      field: "Law"
    }, {
      id: 3,
      field: "Philological"
    }]
  }, {
    name: "speciality",
    columns: [{
      id: 1,
      field: "chemist"
    }, {
      id: 2,
      field: "lawyer"
    }, {
      id: 3,
      field: "translator"
    }]
  } ],
  relations: [ {
    name: 'CourseToStudent',
    type: RelationTypeEnum.OneToMany,
    from: "course",
    to: "student"
  }, {
    name: "StudentToProgress",
    type: RelationTypeEnum.OneToMany,
    from: "course",
    to: "student"
  }, {
    name: 'ProfessorToCourse',
    type: RelationTypeEnum.OneToMany,
    from: "student",
    to: "progress"
  }, {
    name: 'CourseToGroup',
    type: RelationTypeEnum.OneToMany,
    from: "course",
    to: "group"
  }, {
    name: 'GroupToStudent',
    type: RelationTypeEnum.OneToMany,
    from: "group",
    to: "student"
  }, {
    name: "SubjectToProgress",
    type: RelationTypeEnum.OneToMany,
    from: "subject",
    to: "progress"
  }, {
    name: "FacultyToStudent",
    type: RelationTypeEnum.OneToMany,
    from: "faculty",
    to: "student"
  }, {
    name: "FacultyToSpeciality",
    type: RelationTypeEnum.OneToMany,
    from: "faculty",
    to: "speciality"
  }, {
    name: "SpecialityToStudent",
    type: RelationTypeEnum.OneToMany,
    from: "speciality",
    to: "student"
  }  ],
  diagram: {
    entitiesOnDiagram: [{
      name: "student",
      rect: {
        top: 150,
        left: 180,
        width: 150,
        height: 100
      }
    }, {
      name: "course",
      rect: {
        top: 130,
        left: 640,
        width: 150,
        height: 100
      }
    }, {
      name: "professor",
      rect: {
        top: 0,
        left: 610,
        width: 150,
        height: 100
      }
    }, {
      name: "group",
      rect: {
        top: 350,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "progress",
      rect: {
        top: 0,
        left: 450,
        width: 80,
        height: 80
      }
    }, {
      name: "subject",
      rect: {
        top: 70,
        left: 0,
        width: 150,
        height: 100
      }
    }, {
      name: "faculty",
      rect: {
        top: 280,
        left: 740,
        width: 150,
        height: 100
      }
    }, {
      name: "speciality",
      rect: {
        top: 350,
        left: 350,
        width: 150,
        height: 100
      }
    }],
    relationsOnDiagram: [{
      name: "CourseToStudent",
      startPosition: {
        name: "course",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      endPosition: {
        name: "student",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "ProfessorToCourse",
      startPosition: {
        name: "professor",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      endPosition: {
        name: "course",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "CourseToGroup",
      startPosition: {
        name: "course",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      endPosition: {
        name: "group",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "GroupToStudent",
      startPosition: {
        name: "group",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      endPosition: {
        name: "student",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }, {
      name: "StudentToProgress",
      startPosition: {
        name: "student",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      endPosition: {
        name: "progress",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "SubjectToProgress",
      startPosition: {
        name: "subject",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      endPosition: {
        name: "progress",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }, {
      name: "FacultyToStudent",
      startPosition: {
        name: "faculty",
        side: SideEnum.Left,
        shiftInPercent: 30
      },
      endPosition: {
        name: "student",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "FacultyToSpeciality",
      startPosition: {
        name: "faculty",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      endPosition: {
        name: "speciality",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "SpecialityToStudent",
      startPosition: {
        name: "speciality",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      endPosition: {
        name: "student",
        side: SideEnum.Bottom,
        shiftInPercent: 70
      }
    } ]
  }
};
export const data4 = {
  entities: [{
    name: "Album",
    columns: [{
      id: 1,
      field: "ID"
    }, {
      id: 2,
      field: "Title"
    }, {
      id: 3,
      field: "Description"
    }]
  }, {
    name: "Location",
    columns: [{
      id: 1,
      field: "ID"
    }, {
      id: 2,
      field: "Name"
    }, {
      id: 3,
      field: "ShortName"
    }]
  }, {
    name: "Photo",
    columns: [{
      id: 1,
      field: "ID"
    }, {
      id: 2,
      field: "Title"
    }, {
      id: 3,
      field: "UploadDate"
    }]
  }, {
    name: "Member",
    columns: [{
      id: 1,
      field: "ID"
    }, {
      id: 2,
      field: "Name"
    }, {
      id: 3,
      field: "PhoneNum"
    }]
  }, {
    name: "Comment",
    columns: [{
      id: 1,
      field: "ID"
    }, {
      id: 2,
      field: "PostDate"
    }, {
      id: 3,
      field: "Content"
    }]
  }, {
    name: "Tag",
    columns: [{
      id: 1,
      field: "ID"
    }, {
      id: 2,
      field: "Title"
    } ]
  } ],
  relations: [ {
    name: "AlbumToPhoto",
    type: RelationTypeEnum.OneToMany,
    from: "Album",
    to: "Photo"
  }, {
    name: "LocationToPhoto",
    type: RelationTypeEnum.OneToMany,
    from: "Location",
    to: "Photo"
  }, {
    name: "TagToPhoto",
    type: RelationTypeEnum.OneToMany,
    from: "Tag",
    to: "Photo"
  }, {
    name: "MemberToPhoto",
    type: RelationTypeEnum.OneToMany,
    from: "Member",
    to: "Photo"
  }, {
    name: "PhotoToComment",
    type: RelationTypeEnum.OneToMany,
    from: "Photo",
    to: "Comment"
  } ],
  diagram: {
    entitiesOnDiagram: [{
      name: "Album",
      rect: {
        top: 20,
        left: 120,
        width: 150,
        height: 100
      }
    }, {
      name: "Location",
      rect: {
        top: 50,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "Photo",
      rect: {
        top: 150,
        left: 300,
        width: 150,
        height: 100
      }
    }, {
      name: "Member",
      rect: {
        top: 250,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "Comment",
      rect: {
        top: 250,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "Tag",
      rect: {
        top: 350,
        left: 220,
        width: 80,
        height: 80
      }
    }],
    relationsOnDiagram: [{
      name: "AlbumToPhoto",
      startPosition: {
        name: "Album",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Photo",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "LocationToPhoto",
      startPosition: {
        name: "Location",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Photo",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "PhotoToComment",
      startPosition: {
        name: "Photo",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      },
      endPosition: {
        name: "Comment",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "TagToPhoto",
      startPosition: {
        name: "Tag",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Photo",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      }
    }, {
      name: "MemberToPhoto",
      startPosition: {
        name: "Member",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      endPosition: {
        name: "Photo",
        side: SideEnum.Right,
        shiftInPercent: 70
      }
    }]
  }
};

