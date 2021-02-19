import { RelationTypeEnum, SideEnum } from "./interfaces.js";
// @ts-ignore
import * as d3 from 'https://unpkg.com/d3?module';
const data = {
    entities: [{
            name: "user",
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
            name: "country",
            columns: [{
                    id: 1,
                    field: "USA"
                }, {
                    id: 2,
                    field: "Canada"
                }, {
                    id: 3,
                    field: "England"
                }]
        }, {
            name: "cities",
            columns: [{
                    id: 1,
                    field: "New York"
                }, {
                    id: 2,
                    field: "Toronto"
                }, {
                    id: 3,
                    field: "York"
                }]
        }, {
            name: "capital",
            columns: [{
                    id: 1,
                    field: "Washington"
                }, {
                    id: 2,
                    field: "Ottawa"
                }, {
                    id: 3,
                    field: "London"
                }]
        }],
    relations: [{
            type: RelationTypeEnum.OneToMany,
            from: "user",
            to: "country"
        }, {
            type: RelationTypeEnum.OneToOne,
            from: "country",
            to: "capital"
        }, {
            type: RelationTypeEnum.OneToMany,
            from: "country",
            to: "cities"
        }],
    diagram: {
        entitiesOnDiagram: [{
                name: "user",
                rect: {
                    top: 20,
                    left: 20,
                    width: 100,
                    height: 100
                }
            }, {
                name: "country",
                rect: {
                    top: 20,
                    left: 240,
                    width: 100,
                    height: 100
                }
            }, {
                name: "cities",
                rect: {
                    top: 20,
                    left: 460,
                    width: 100,
                    height: 100
                }
            }, {
                name: "capital",
                rect: {
                    top: 200,
                    left: 240,
                    width: 100,
                    height: 100
                }
            }],
        relationsOnDiagram: [{
                name: "UserToCountry",
                startPosition: {
                    name: "user",
                    side: SideEnum.Right,
                    shiftInPercent: 50
                },
                endPosition: {
                    name: "country",
                    side: SideEnum.Left,
                    shiftInPercent: 50
                }
            }, {
                name: "CountryToCapital",
                startPosition: {
                    name: "country",
                    side: SideEnum.Bottom,
                    shiftInPercent: 50
                },
                endPosition: {
                    name: "capital",
                    side: SideEnum.Top,
                    shiftInPercent: 50
                }
            }, {
                name: "CountryToCities",
                startPosition: {
                    name: "country",
                    side: SideEnum.Right,
                    shiftInPercent: 50
                },
                endPosition: {
                    name: "cities",
                    side: SideEnum.Left,
                    shiftInPercent: 50
                }
            }]
    }
};
const data2 = {
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
        }],
    relations: [{
            type: RelationTypeEnum.OneToMany,
            from: "student",
            to: "course"
        }, {
            type: RelationTypeEnum.OneToMany,
            from: "professor",
            to: "course"
        }, {
            type: RelationTypeEnum.OneToMany,
            from: "course",
            to: "group"
        }, {
            type: RelationTypeEnum.OneToMany,
            from: "group",
            to: "student"
        }],
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
                name: "StudentToCourse",
                startPosition: {
                    name: "student",
                    side: SideEnum.Right,
                    shiftInPercent: 50
                },
                endPosition: {
                    name: "course",
                    side: SideEnum.Left,
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
const data3 = {
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
        }],
    relations: [{
            type: RelationTypeEnum.OneToMany,
            from: "employer",
            to: "employee"
        }, {
            type: RelationTypeEnum.OneToMany,
            from: "position",
            to: "employee"
        }, {
            type: RelationTypeEnum.OneToMany,
            from: "office",
            to: "employee"
        }, {
            type: RelationTypeEnum.OneToMany,
            from: "employer",
            to: "customer"
        }],
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
const data4 = {
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
        }],
    relations: [{
            type: RelationTypeEnum.OneToMany,
            from: "student",
            to: "progress"
        }, {
            type: RelationTypeEnum.OneToMany,
            from: "subject",
            to: "progress"
        }, {
            type: RelationTypeEnum.OneToMany,
            from: "faculty",
            to: "student"
        }, {
            type: RelationTypeEnum.OneToMany,
            from: "faculty",
            to: "speciality"
        }, {
            type: RelationTypeEnum.OneToMany,
            from: "speciality",
            to: "student"
        }],
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
const data5 = {
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
                }]
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
        }],
    relations: [{
            type: RelationTypeEnum.OneToMany,
            from: "customer",
            to: "order"
        }, {
            type: RelationTypeEnum.OneToOne,
            from: "courier",
            to: "order"
        }, {
            type: RelationTypeEnum.OneToMany,
            from: "order",
            to: "product"
        }],
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
    data, data2, data3, data4, data5
];
arrData.forEach(data => {
    const container = createDiagramContainer();
    drawDiagram(container, data.entities, data.diagram.relationsOnDiagram, data.diagram);
});
function createDiagramContainer() {
    const container = document.createElement('div');
    container.setAttribute('class', `diagram-container`);
    document.getElementsByTagName('body')[0].appendChild(container);
    return container;
}
function drawDiagram(container, entities, relations, diagram) {
    d3.select(container).append('svg');
    createOne2OneStart(container);
    createOne2OneEnd(container);
    createOne2ManyEnd(container);
    entities.forEach(e => drawEntity(e, container, diagram));
    relations.forEach(r => drawRelation(r, container, diagram));
}
function getEntityRect(diagram, name) {
    const e = diagram.entitiesOnDiagram.find(item => item.name === name);
    return e === null ? null : e.rect;
}
function drawEntity(entity, container, diagram) {
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
function drawRelation(relation, container, diagram) {
    const svg = d3.select(container).select('svg');
    const startRect = getEntityRect(diagram, relation.startPosition.name);
    const endRect = getEntityRect(diagram, relation.endPosition.name);
    const startPoint = calcRelationPoint(relation.startPosition, startRect);
    const endPoint = calcRelationPoint(relation.endPosition, endRect);
    svg.append('path')
        .attr("d", `M ${startPoint.x},${startPoint.y} L ${endPoint.x},${endPoint.y}`)
        .attr("marker-start", "url(#o2oStart)")
        .attr("marker-end", "url(#o2mEnd");
}
function calcRelationPoint(position, rect) {
    const { side, shiftInPercent } = position;
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
    return { x: x, y: y };
}
function createOne2OneStart(container) {
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
function createOne2OneEnd(container) {
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
function createOne2ManyEnd(container) {
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
