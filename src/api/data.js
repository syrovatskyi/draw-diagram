import {RelationTypeEnum, SideEnum} from "../interfaces/interfaces.js";

export const data = {
  entities: [{
    name: "Loan_Request",
    columns: [{
      name: "Borrower"
    }, {
      name: "Deadline"
    }, {
      name: "Amount"
    }]
  }, {
    name: "Borrower",
    columns: [{
      name: "ID"
    }, {
      name: "Addressee_ID"
    }]
  }, {
    name: "Addressee",
    columns: [{
      name: "ID"
    }, {
      name: "Name"
    }, {
      name: "Address"
    }]
  }, {
    name: "Intermediary",
    columns: [{
      name: "ID"
    }, {
      name: "Address_ID"
    }, {
      name: "LoanDate"
    }]
  }, {
    name: "Lender",
    columns: [{
      name: "ID"
    }, {
      name: "Address_ID"
    }]
  }, {
    name: "Lender_Borrower",
    columns: [{
      name: "Borrower_ID"
    }, {
      name: "Lender_ID"
    }, {
      name: "Percentage"
    }]
  }, {
    name: "Loan_Request_Lender",
    columns: [{
      name: "Loan_RequestDate"
    }, {
      name: "Lender_ID"
    }, {
      name: "Amount"
    }]
  }, {
    name: "Repayment",
    columns: [{
      name: "Date"
    }, {
      name: "Amount"
    }]
  }, {
    name: "Loan",
    columns: [{
      name: "Date"
    }, {
      name: "DeadlineAgreed_Date"
    }, {
      name: "RepaymentDate"
    }]
  }, {
    name: "Deadline",
    columns: [{
      name: "Agreed_Date"
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
    entitiesList: [{
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
    relationsList: [{
      name: "BorrowerToLoan_Request",
      start: {
        name: "Borrower",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "Loan_Request",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "BorrowerToLender_Borrower",
      start: {
        name: "Borrower",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "Lender_Borrower",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "BorrowerToAddressee",
      start: {
        name: "Borrower",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "Addressee",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "AddresseeToLender",
      start: {
        name: "Addressee",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "Lender",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "AddresseeToIntermediary",
      start: {
        name: "Addressee",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "Intermediary",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "IntermediaryToLoan",
      start: {
        name: "Intermediary",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "Loan",
        side: SideEnum.Right,
        shiftInPercent: 70
      }
    }, {
      name: "RepaymentToLoan",
      start: {
        name: "Repayment",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "Loan",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "DeadlineToLoan",
      start: {
        name: "Deadline",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "Loan",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "LoanToLender_Borrower",
      start: {
        name: "Loan",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "Lender_Borrower",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      }
    }, {
      name: "LenderToLender_Borrower",
      start: {
        name: "Lender",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "Lender_Borrower",
        side: SideEnum.Right,
        shiftInPercent: 70
      }
    }, {
      name: "Loan_RequestToLoan_Request_Lender",
      start: {
        name: "Loan_Request",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "Loan_Request_Lender",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "LenderToLoan_Request_Lender",
      start: {
        name: "Lender",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
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
      name: "Delivery_ID"
    }, {
      name: "Delivery_Date"
    }, {
      name: "Supplier_ID"
    }]
  }, {
    name: "Delivery",
    columns: [{
      name: "Delivery_ID"
    }, {
      name: "Delivery_Date"
    }, {
      name: "Supplier_ID"
    }]
  }, {
    name: "Order_Detail_Delivery",
    columns: [{
      name: "Delivery_ID"
    }, {
      name: "Order_ID"
    }, {
      name: "Order_Detail_ID"
    }]
  }, {
    name: "Product",
    columns: [{
      name: "Product_ID"
    }, {
      name: "Supplier_ID"
    }]
  }, {
    name: "Order_Detail",
    columns: [{
      name: "Order_Detail_ID"
    }, {
      name: "Product_ID"
    }, {
      name: "Order_ID"
    }]
  }, {
    name: "Order",
    columns: [{
      name: "Order_ID"
    }, {
      name: "Order_Date"
    }, {
      name: "Headquarters_ID"
    }]
  }, {
    name: "Headquarters",
    columns: [{
      name: "Headquarters_ID"
    }, {
      name: "Branch_ID"
    }]
  }, {
    name: "Branch",
    columns: [{
      name: "Branch_ID"
    }]
  }],
  relations: [{
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
  }],
  diagram: {
    entitiesList: [{
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
    relationsList: [{
      name: "SupplierToDelivery",
      start: {
        name: "Supplier",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "Delivery",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "DeliveryToOrder_Detail_Delivery",
      start: {
        name: "Delivery",
        side: SideEnum.Top,
        shiftInPercent: 20
      },
      end: {
        name: "Order_Detail_Delivery",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "Order_DetailToOrder_Detail_Delivery",
      start: {
        name: "Order_Detail",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "Order_Detail_Delivery",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      }
    }, {
      name: "SupplierToProduct",
      start: {
        name: "Supplier",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "Product",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "ProductToOrder_Detail",
      start: {
        name: "Product",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "Order_Detail",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      }
    }, {
      name: "OrderToOrder_Detail",
      start: {
        name: "Order",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "Order_Detail",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "OrderToHeadquarters",
      start: {
        name: "Order",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "Headquarters",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "HeadquartersToBranch",
      start: {
        name: "Headquarters",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
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
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "course",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "professor",
    columns: [{
      name: "Hamilton"
    }, {
      name: "Flitvick"
    }, {
      name: "York"
    }]
  }, {
    name: "group",
    columns: [{
      name: "G-1"
    }, {
      name: "G-2"
    }, {
      name: "G-3"
    }]
  }, {
    name: "progress",
    columns: [{
      name: "mark"
    }, {
      name: "subject"
    }]
  }, {
    name: "subject",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "faculty",
    columns: [{
      name: "Chemical"
    }, {
      name: "Law"
    }, {
      name: "Philological"
    }]
  }, {
    name: "speciality",
    columns: [{
      name: "chemist"
    }, {
      name: "lawyer"
    }, {
      name: "translator"
    }]
  }],
  relations: [{
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
  }],
  diagram: {
    entitiesList: [{
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
    relationsList: [{
      name: "CourseToStudent",
      start: {
        name: "course",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "student",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "ProfessorToCourse",
      start: {
        name: "professor",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "course",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "CourseToGroup",
      start: {
        name: "course",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "group",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "GroupToStudent",
      start: {
        name: "group",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "student",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }, {
      name: "StudentToProgress",
      start: {
        name: "student",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "progress",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "SubjectToProgress",
      start: {
        name: "subject",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "progress",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }, {
      name: "FacultyToStudent",
      start: {
        name: "faculty",
        side: SideEnum.Left,
        shiftInPercent: 30
      },
      end: {
        name: "student",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "FacultyToSpeciality",
      start: {
        name: "faculty",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "speciality",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "SpecialityToStudent",
      start: {
        name: "speciality",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "student",
        side: SideEnum.Bottom,
        shiftInPercent: 70
      }
    }]
  }
};
export const data4 = {
  entities: [{
    name: "Album",
    columns: [{
      name: "ID"
    }, {
      name: "Title"
    }, {
      name: "Description"
    }]
  }, {
    name: "Location",
    columns: [{
      name: "ID"
    }, {
      name: "Name"
    }, {
      name: "ShortName"
    }]
  }, {
    name: "Photo",
    columns: [{
      name: "ID"
    }, {
      name: "Title"
    }, {
      name: "UploadDate"
    }]
  }, {
    name: "Member",
    columns: [{
      name: "ID"
    }, {
      name: "Name"
    }, {
      name: "PhoneNum"
    }]
  }, {
    name: "Comment",
    columns: [{
      name: "ID"
    }, {
      name: "PostDate"
    }, {
      name: "Content"
    }]
  }, {
    name: "Tag",
    columns: [{
      name: "ID"
    }, {
      name: "Title"
    }]
  }],
  relations: [{
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
  }],
  diagram: {
    entitiesList: [{
      name: "Album",
      rect: {
        top: 220,
        left: 320,
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
        top: 50,
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
    relationsList: [{
      name: "AlbumToPhoto",
      start: {
        name: "Album",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "Photo",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "LocationToPhoto",
      start: {
        name: "Location",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "Photo",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "PhotoToComment",
      start: {
        name: "Photo",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      },
      end: {
        name: "Comment",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "TagToPhoto",
      start: {
        name: "Tag",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "Photo",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      }
    }, {
      name: "MemberToPhoto",
      start: {
        name: "Member",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "Photo",
        side: SideEnum.Right,
        shiftInPercent: 70
      }
    }]
  }
};
export const data5 = {
  entities: [{
    name: "Loan_Request",
    columns: [{
      name: "Borrower"
    }, {
      name: "Deadline"
    }, {
      name: "Amount"
    }]
  }, {
    name: "Borrower",
    columns: [{
      name: "ID"
    }, {
      name: "Addressee_ID"
    }]
  }, {
    name: "Addressee",
    columns: [{
      name: "ID"
    }, {
      name: "Name"
    }, {
      name: "Address"
    }]
  }, {
    name: "Intermediary",
    columns: [{
      name: "ID"
    }, {
      name: "Address_ID"
    }, {
      name: "LoanDate"
    }]
  }, {
    name: "Lender",
    columns: [{
      name: "ID"
    }, {
      name: "Address_ID"
    }]
  }, {
    name: "Lender_Borrower",
    columns: [{
      name: "Borrower_ID"
    }, {
      name: "Lender_ID"
    }, {
      name: "Percentage"
    }]
  }, {
    name: "Loan_Request_Lender",
    columns: [{
      name: "Loan_RequestDate"
    }, {
      name: "Lender_ID"
    }, {
      name: "Amount"
    }]
  }, {
    name: "Repayment",
    columns: [{
      name: "Date"
    }, {
      name: "Amount"
    }]
  }, {
    name: "Loan",
    columns: [{
      name: "Date"
    }, {
      name: "DeadlineAgreed_Date"
    }, {
      name: "RepaymentDate"
    }]
  }, {
    name: "Deadline",
    columns: [{
      name: "Agreed_Date"
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
    entitiesList: [{
      name: "Loan_Request",
      rect: {
        top: 5,
        left: 20,
        width: 150,
        height: 150
      }
    }, {
      name: "Borrower",
      rect: {
        top: 0,
        left: 320,
        width: 150,
        height: 150
      }
    }, {
      name: "Addressee",
      rect: {
        top: 50,
        left: 560,
        width: 150,
        height: 150
      }
    }, {
      name: "Intermediary",
      rect: {
        top: 40,
        left: 840,
        width: 150,
        height: 150
      }
    }, {
      name: "Lender",
      rect: {
        top: 280,
        left: 630,
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
        top: 500,
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
        top: 480,
        left: 600,
        width: 100,
        height: 100
      }
    }],
    relationsList: [{
      name: "BorrowerToLoan_Request",
      start: {
        name: "Borrower",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "Loan_Request",
        side: SideEnum.Bottom,
        shiftInPercent: 70
      }
    }, {
      name: "BorrowerToLender_Borrower",
      start: {
        name: "Borrower",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "Lender_Borrower",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "BorrowerToAddressee",
      start: {
        name: "Borrower",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "Addressee",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "AddresseeToLender",
      start: {
        name: "Addressee",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "Lender",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "AddresseeToIntermediary",
      start: {
        name: "Addressee",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "Intermediary",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }, {
      name: "IntermediaryToLoan",
      start: {
        name: "Intermediary",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "Loan",
        side: SideEnum.Right,
        shiftInPercent: 70
      }
    }, {
      name: "RepaymentToLoan",
      start: {
        name: "Repayment",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "Loan",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "DeadlineToLoan",
      start: {
        name: "Deadline",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "Loan",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "LoanToLender_Borrower",
      start: {
        name: "Loan",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "Lender_Borrower",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      }
    }, {
      name: "LenderToLender_Borrower",
      start: {
        name: "Lender",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "Lender_Borrower",
        side: SideEnum.Right,
        shiftInPercent: 70
      }
    }, {
      name: "Loan_RequestToLoan_Request_Lender",
      start: {
        name: "Loan_Request",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "Loan_Request_Lender",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "LenderToLoan_Request_Lender",
      start: {
        name: "Lender",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "Loan_Request_Lender",
        side: SideEnum.Bottom,
        shiftInPercent: 70
      }
    }]
  }
};
export const data6 = {
  entities: [{
    name: "student",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "course",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "professor",
    columns: [{
      name: "Hamilton"
    }, {
      name: "Flitvick"
    }, {
      name: "York"
    }]
  }, {
    name: "group",
    columns: [{
      name: "G-1"
    }, {
      name: "G-2"
    }, {
      name: "G-3"
    }]
  }, {
    name: "progress",
    columns: [{
      name: "mark"
    }, {
      name: "subject"
    }]
  }, {
    name: "subject",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "faculty",
    columns: [{
      name: "Chemical"
    }, {
      name: "Law"
    }, {
      name: "Philological"
    }]
  }, {
    name: "speciality",
    columns: [{
      name: "chemist"
    }, {
      name: "lawyer"
    }, {
      name: "translator"
    }]
  }],
  relations: [{
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
  }],
  diagram: {
    entitiesList: [{
      name: "student",
      rect: {
        top: 200,
        left: 220,
        width: 150,
        height: 100
      }
    }, {
      name: "course",
      rect: {
        top: 140,
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
        left: 50,
        width: 150,
        height: 100
      }
    }, {
      name: "progress",
      rect: {
        top: 20,
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
        top: 320,
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
    relationsList: [{
      name: "CourseToStudent",
      start: {
        name: "course",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "student",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "ProfessorToCourse",
      start: {
        name: "professor",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "course",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "CourseToGroup",
      start: {
        name: "course",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "group",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "GroupToStudent",
      start: {
        name: "group",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "student",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }, {
      name: "StudentToProgress",
      start: {
        name: "student",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "progress",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "SubjectToProgress",
      start: {
        name: "subject",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "progress",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "FacultyToStudent",
      start: {
        name: "faculty",
        side: SideEnum.Left,
        shiftInPercent: 30
      },
      end: {
        name: "student",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "FacultyToSpeciality",
      start: {
        name: "faculty",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "speciality",
        side: SideEnum.Right,
        shiftInPercent: 50
      }
    }, {
      name: "SpecialityToStudent",
      start: {
        name: "speciality",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "student",
        side: SideEnum.Right,
        shiftInPercent: 70
      }
    }]
  }
};


// // A --> FROM
//
// // B --> TO
//
// yA > yB && xA > xB
export const left1 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 150,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 450,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 150,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 470,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const right1 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 150,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 450,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 150,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 470,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const top1 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 150,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 450,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 150,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 470,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
    }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const bottom1 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 150,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 450,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 150,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 470,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};

// yA > yB && xA < xB
export const left2 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 150,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 450,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 150,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 470,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 540,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const right2 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 150,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 450,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 150,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 470,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 540,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const top2 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 150,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 450,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 150,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 470,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 540,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const bottom2 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 150,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 450,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 150,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 470,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 540,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};

// yA > yB && xA = xB
export const left3 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 150,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 450,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 300,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 150,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 470,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const right3 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 150,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 450,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 300,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 150,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 470,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const top3 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 150,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 450,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 300,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 150,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 470,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const bottom3 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 150,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 450,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 300,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 150,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 470,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};

// yA < yB && xA > xB
export const left4 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 150,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 450,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 150,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 470,
        left: 540,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const right4 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 150,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 450,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 150,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 470,
        left: 540,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const top4 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 150,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 450,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 150,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 470,
        left: 540,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const bottom4 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
    relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
    diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 150,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 450,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 150,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 470,
        left: 540,
        width: 150,
        height: 100
      }
    } ],
      relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};

// yA < yB && xA < xB
export const left5 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 150,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 450,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 150,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 470,
        left: 540,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const right5 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 150,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 450,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 150,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 470,
        left: 540,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const top5 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 150,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 450,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 150,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 470,
        left: 540,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const bottom5 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 150,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 450,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 150,
        left: 540,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 470,
        left: 540,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};

// yA < yB && xA = xB

export const left6 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 150,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 300,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 450,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 150,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 470,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const right6 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 150,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 300,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 450,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 150,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 470,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const top6 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 150,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 300,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 450,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 150,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 470,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const bottom6 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 150,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 300,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 450,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 150,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 470,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};

// yA = yB && xA > xB
export const left7 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 600,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 600,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const right7 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 600,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 600,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const top7 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 600,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 600,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const bottom7 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 600,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 600,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};

// yA = yB && xA < xB
export const left8 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 600,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 600,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const right8 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 600,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 600,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const top8 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 600,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 600,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
export const bottom8 = {
  entities: [{
    name: "A",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "B",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "C",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "D",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "E",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "F",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  }, {
    name: "G",
    columns: [{
      name: "Bob"
    }, {
      name: "John"
    }, {
      name: "Tom"
    }]
  }, {
    name: "H",
    columns: [{
      name: "Chemistry"
    }, {
      name: "History"
    }, {
      name: "English"
    }]
  } ],
  relations: [{
    name: 'AToB',
    type: RelationTypeEnum.OneToMany,
    from: "A",
    to: "B"
  }, {
    name: 'CToD',
    type: RelationTypeEnum.OneToMany,
    from: "C",
    to: "D"
  }, {
    name: 'EToF',
    type: RelationTypeEnum.OneToMany,
    from: "E",
    to: "F"
  }, {
    name: 'GToH',
    type: RelationTypeEnum.OneToMany,
    from: "G",
    to: "H"
  }],
  diagram: {
    entitiesList: [{
      name: "A",
      rect: {
        top: 40,
        left: 10,
        width: 150,
        height: 100
      }
    }, {
      name: "B",
      rect: {
        top: 40,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "C",
      rect: {
        top: 350,
        left: 20,
        width: 150,
        height: 100
      }
    }, {
      name: "D",
      rect: {
        top: 350,
        left: 200,
        width: 150,
        height: 100
      }
    }, {
      name: "E",
      rect: {
        top: 40,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "F",
      rect: {
        top: 40,
        left: 600,
        width: 150,
        height: 100
      }
    }, {
      name: "G",
      rect: {
        top: 350,
        left: 410,
        width: 150,
        height: 100
      }
    }, {
      name: "H",
      rect: {
        top: 350,
        left: 600,
        width: 150,
        height: 100
      }
    } ],
    relationsList: [{
      name: "AToB",
      start: {
        name: "A",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "B",
        side: SideEnum.Left,
        shiftInPercent: 30
      }
    }, {
      name: "CToD",
      start: {
        name: "C",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "D",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "EToF",
      start: {
        name: "E",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "F",
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "GToH",
      start: {
        name: "G",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      end: {
        name: "H",
        side: SideEnum.Bottom,
        shiftInPercent: 30
      }
    }]
  }
};
