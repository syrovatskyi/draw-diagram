import {
  Component,
  IDiagram,
  IEntity,
  IPoint,
  IRect,
  IRelation,
  IRelationOnDiagram,
  IRelationPosition,
  RelationTypeEnum,
  SideEnum
} from "./interfaces.js";
// @ts-ignore
import * as d3 from 'https://unpkg.com/d3?module';


const data: Component = {
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
        left: 280,
        width: 150,
        height: 150
      }
    }, {
      name: "Loan_Request_Lender",
      rect: {
        top: 200,
        left: 20,
        width: 150,
        height: 150
      }
    }, {
      name: "Loan",
      rect: {
        top: 440,
        left: 270,
        width: 150,
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
        top: 420,
        left: 500,
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
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }]
  }
};
const data2: Component = {
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
  } ],
  relations: [ {
    name: 'CourseToStudent',
    type: RelationTypeEnum.OneToMany,
    from: "course",
    to: "student"
  }, {
    name: 'ProfessorToCourse',
    type: RelationTypeEnum.OneToMany,
    from: "professor",
    to: "course"
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
  } ],
  diagram: {
    entitiesOnDiagram: [{
      name: "student",
      rect: {
        top: 120,
        left: 20,
        width: 100,
        height: 100
      }
    }, {
      name: "course",
      rect: {
        top: 80,
        left: 240,
        width: 100,
        height: 100
      }
    }, {
      name: "professor",
      rect: {
        top: 20,
        left: 460,
        width: 100,
        height: 100
      }
    }, {
      name: "group",
      rect: {
        top: 250,
        left: 240,
        width: 100,
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
        shiftInPercent: 50
      }
    }, {
      name: "ProfessorToCourse",
      startPosition: {
        name: "professor",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      endPosition: {
        name: "course",
        side: SideEnum.Right,
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
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      endPosition: {
        name: "student",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      }
    }]
  }
};
const data3: Component = {
  entities: [{
    name: "employer",
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
    name: "employee",
    columns: [{
      id: 1,
      field: "Adam"
    }, {
      id: 2,
      field: "Paul"
    }, {
      id: 3,
      field: "Howard"
    }]
  }, {
    name: "position",
    columns: [{
      id: 1,
      field: "QA"
    }, {
      id: 2,
      field: "Developer"
    }, {
      id: 3,
      field: "HR"
    }]
  }, {
    name: "office",
    columns: [{
      id: 1,
      field: "London"
    }, {
      id: 2,
      field: "New York"
    }, {
      id: 3,
      field: "Tokyo"
    }]
  }, {
    name: "customer",
    columns: [{
      id: 1,
      field: "Spencer"
    }, {
      id: 2,
      field: "Smith"
    }, {
      id: 3,
      field: "Tokugawa"
    }]
  } ],
  relations: [ {
    name: "EmployerToEmployee",
    type: RelationTypeEnum.OneToMany,
    from: "employer",
    to: "employee"
  }, {
    name: "PositionToEmployee",
    type: RelationTypeEnum.OneToMany,
    from: "position",
    to: "employee"
  }, {
    name: "OfficeToEmployee",
    type: RelationTypeEnum.OneToMany,
    from: "office",
    to: "employee"
  }, {
    name: "EmployerToCustomer",
    type: RelationTypeEnum.OneToMany,
    from: "employer",
    to: "customer"
  } ],
  diagram: {
    entitiesOnDiagram: [{
      name: "employer",
      rect: {
        top: 20,
        left: 20,
        width: 100,
        height: 100
      }
    }, {
      name: "employee",
      rect: {
        top: 80,
        left: 240,
        width: 100,
        height: 100
      }
    }, {
      name: "position",
      rect: {
        top: 20,
        left: 460,
        width: 100,
        height: 100
      }
    }, {
      name: "office",
      rect: {
        top: 250,
        left: 440,
        width: 100,
        height: 100
      }
    }, {
      name: "customer",
      rect: {
        top: 250,
        left: 20,
        width: 100,
        height: 100
      }
    }],
    relationsOnDiagram: [{
      name: "EmployerToEmployee",
      startPosition: {
        name: "employer",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      endPosition: {
        name: "employee",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "PositionToEmployee",
      startPosition: {
        name: "position",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      endPosition: {
        name: "employee",
        side: SideEnum.Right,
        shiftInPercent: 30
      }
    }, {
      name: "OfficeToEmployee",
      startPosition: {
        name: "office",
        side: SideEnum.Left,
        shiftInPercent: 50
      },
      endPosition: {
        name: "employee",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      }
    }, {
      name: "EmployerToCustomer",
      startPosition: {
        name: "employer",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      endPosition: {
        name: "customer",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }]
  }
};
const data4: Component = {
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
    name: "StudentToProgress",
    type: RelationTypeEnum.OneToMany,
    from: "student",
    to: "progress"
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
  } ],
  diagram: {
    entitiesOnDiagram: [{
      name: "student",
      rect: {
        top: 120,
        left: 20,
        width: 100,
        height: 100
      }
    }, {
      name: "progress",
      rect: {
        top: 120,
        left: 460,
        width: 100,
        height: 100
      }
    }, {
      name: "subject",
      rect: {
        top: 20,
        left: 240,
        width: 100,
        height: 100
      }
    }, {
      name: "faculty",
      rect: {
        top: 250,
        left: 440,
        width: 100,
        height: 100
      }
    }, {
      name: "speciality",
      rect: {
        top: 350,
        left: 250,
        width: 100,
        height: 100
      }
    }],
    relationsOnDiagram: [{
      name: "StudentToProgress",
      startPosition: {
        name: "student",
        side: SideEnum.Right,
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
        side: SideEnum.Top,
        shiftInPercent: 30
      }
    }, {
      name: "FacultyToStudent",
      startPosition: {
        name: "faculty",
        side: SideEnum.Left,
        shiftInPercent: 50
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
        shiftInPercent: 50
      }
    }]
  }
};
const data5: Component = {
  entities: [{
    name: "customer",
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
    name: "order",
    columns: [{
      id: 1,
      field: "barcode"
    }, {
      id: 2,
      field: "title"
    } ]
  }, {
    name: "courier",
    columns: [{
      id: 1,
      field: "Adam"
    }, {
      id: 2,
      field: "Steven"
    }, {
      id: 3,
      field: "William"
    }]
  }, {
    name: "product",
    columns: [{
      id: 1,
      field: "phone"
    }, {
      id: 2,
      field: "laptop"
    }, {
      id: 3,
      field: "headset"
    }]
  } ],
  relations: [ {
    name: "CustomerToOrder",
    type: RelationTypeEnum.OneToMany,
    from: "customer",
    to: "order"
  }, {
    name: "CourierToOrder",
    type: RelationTypeEnum.OneToOne,
    from: "courier",
    to: "order"
  }, {
    name: "OrderToProduct",
    type: RelationTypeEnum.OneToMany,
    from: "order",
    to: "product"
  } ],
  diagram: {
    entitiesOnDiagram: [{
      name: "customer",
      rect: {
        top: 20,
        left: 20,
        width: 100,
        height: 100
      }
    }, {
      name: "order",
      rect: {
        top: 320,
        left: 240,
        width: 100,
        height: 100
      }
    }, {
      name: "courier",
      rect: {
        top: 520,
        left: 60,
        width: 100,
        height: 100
      }
    }, {
      name: "product",
      rect: {
        top: 100,
        left: 440,
        width: 100,
        height: 100
      }
    }],
    relationsOnDiagram: [{
      name: "CustomerToOrder",
      startPosition: {
        name: "customer",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      endPosition: {
        name: "order",
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "CourierToOrder",
      startPosition: {
        name: "courier",
        side: SideEnum.Top,
        shiftInPercent: 50
      },
      endPosition: {
        name: "order",
        side: SideEnum.Bottom,
        shiftInPercent: 50
      }
    }, {
      name: "OrderToProduct",
      startPosition: {
        name: "order",
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      endPosition: {
        name: "product",
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }]
  }
};

const arrData = [
  data//, data2, data3, data4, data5
];

arrData.forEach(data => {
  const container = createDiagramContainer();
  drawDiagram(container, data.entities, data.diagram.relationsOnDiagram, data.diagram, data.relations);
});

function createDiagramContainer(): Element {
  const container = document.createElement('div');
  container.setAttribute('class', `diagram-container`);
  document.getElementsByTagName('body')[0].appendChild(container);
  return container;
}

function drawDiagram(container: Element, entities: IEntity[], relationOnDiagram: IRelationOnDiagram[], diagram: IDiagram, relations: IRelation[]): void {
  drawSvg(container);
  entities.forEach(e => drawEntity(e, container, diagram));
  relationOnDiagram.forEach(r => drawRelation( r, container, diagram, getRelationType(relations, r.name) ));
}

function getEntityRect(diagram: IDiagram, name: string): IRect {
  const e = diagram.entitiesOnDiagram.find(item => item.name === name);
  return e === null ? null : e.rect;
}

function drawEntity(entity: IEntity, container: Element, diagram: IDiagram ): void {
  const rect = getEntityRect(diagram, entity.name);
  const content = d3.select(container).append('div').attr('class', 'entity');
  content.style('top', rect.top + 'px')
    .style('left', rect.left + 'px')
    .style('width', rect.width + 'px')
    .style('height', rect.height + 'px');
  const table = content.append('table');
  const thead = table.append('caption');
  thead.text(entity.name);
  const columns = entity.columns;
  for (let i = 0; i < columns.length; i++) {
    let column = table.append('tr');
    column.append('td').attr('class', 'column-id').text(columns[i].id);
    column.append('td').attr('class', 'column-field').text(columns[i].field);
  }
}

function drawSvg(container: Element): void {
  d3.select(container).append('svg');
  createOne2OneStart(container);
  createOne2OneEnd(container);
  createOne2ManyEnd(container);
}

function getRelationType(relations: IRelation[], name: string): RelationTypeEnum {
  const relationType = relations.find(item => item.name === name);
  return relationType === null ? null : relationType.type
}



function drawRelation(relationOnDiagram: IRelationOnDiagram, container: Element, diagram: IDiagram, relationType: RelationTypeEnum): void {
  const svg = d3.select(container).select('svg');
  const startRect = getEntityRect(diagram, relationOnDiagram.startPosition.name);
  const endRect = getEntityRect(diagram, relationOnDiagram.endPosition.name);
  const startPoint = calcRelationPoint(relationOnDiagram.startPosition, startRect);
  const endPoint = calcRelationPoint(relationOnDiagram.endPosition, endRect);

  const startSide = relationOnDiagram.startPosition.side;
  const endSide = relationOnDiagram.endPosition.side;

  const middlePoint = calcMiddlePoint(startSide, endSide, startPoint, endPoint);

  const path = svg.append('path')
    .attr('fill', 'none');


    path.attr("d", `M ${startPoint.x},${startPoint.y} L ${endPoint.x},${endPoint.y}`);



  switch (relationType) {
    case RelationTypeEnum.OneToMany:
      path.attr("marker-start", "url(#o2oStart)").attr("marker-end", "url(#o2mEnd");
      break;
    case RelationTypeEnum.OneToOne:
      path.attr("marker-start", "url(#o2oStart)").attr("marker-end", "url(#o2oEnd");
      break;
  }


}

function calcRelationPoint(position: IRelationPosition, rect: IRect): IPoint {
  const {side, shiftInPercent} = position;
  let x;
  let y;
  switch (side) {
    case SideEnum.Top:
      x = rect.left + rect.width * shiftInPercent / 100;
      y = rect.top;
      break;
    case SideEnum.Left:
      x = rect.left;
      y = rect.top + rect.height * shiftInPercent / 100;
      break;
    case SideEnum.Right:
      x = rect.left + rect.width;
      y = rect.top + rect.height * shiftInPercent / 100;
      break;
    case SideEnum.Bottom:
      x = rect.left + rect.width * shiftInPercent / 100;
      y = rect.top + rect.height;
      break;
    default:
      return null;
  }
  return {x: x, y: y}
}

function calcMiddlePoint(startSide: SideEnum, endSide: SideEnum, start: IPoint, end: IPoint): IPoint {
  let x;
  let y;
  if(startSide === SideEnum.Right && endSide === SideEnum.Top  || startSide === SideEnum.Left && endSide === SideEnum.Top || startSide === SideEnum.Right && endSide === SideEnum.Bottom || startSide === SideEnum.Left && endSide === SideEnum.Bottom) {
    if(start.y < end.y || start.y < end.y) {
      x = end.x;
      y = start.y;
    } else {
      x = null;
      y = null;
    }
  }
  return {
    x: x,
    y: y
  }
}

function createOne2OneStart(container: Element): void {
  const marker = d3.select(container).select('svg').append('marker')
    .attr('id', 'o2oStart')
    .attr('refX', 0)
    .attr('refY', 5)
    .attr('markerWidth', 20)
    .attr('markerHeight', 20)
    .attr('orient', 'auto');
  marker.append('line')
    .attr("x1", 10)
    .attr("y1", 0)
    .attr("x2", 10)
    .attr("y2", 10);
}
function createOne2OneEnd(container: Element): void {
  const marker = d3.select(container).select('svg').append('marker')
    .attr('id', 'o2oEnd')
    .attr('refX', 16)
    .attr('refY', 5)
    .attr('markerWidth', 20)
    .attr('markerHeight', 20)
    .attr('orient', 'auto');
  marker.append('line')
    .attr("x1", 5)
    .attr("y1", 0)
    .attr("x2", 5)
    .attr("y2", 10);
}
function createOne2ManyEnd(container: Element): void {
  const marker = d3.select(container).select('svg').append('marker')
    .attr('id', 'o2mEnd')
    .attr('refX', 16)
    .attr('refY', 5)
    .attr('markerWidth', 20)
    .attr('markerHeight', 20)
    .attr('orient', 'auto');
  marker.append('line')
    .attr("x1", 8)
    .attr("y1", 0)
    .attr("x2", 8)
    .attr("y2", 10);
  marker.append('line')
    .attr("x1", 16)
    .attr("y1", 0)
    .attr("x2", 8)
    .attr("y2", 5);
  marker.append('line')
    .attr("x1", 8)
    .attr("y1", 5)
    .attr("x2", 16)
    .attr("y2", 10);
  marker.append('line')
    .attr("x1", 8)
    .attr("y1", 5)
    .attr("x2", 16)
    .attr("y2", 5);
}

