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
        left: 140,
        width: 100,
        height: 100
      }
    }, {
      name: "cities",
      rect: {
        top: 20,
        left: 260,
        width: 100,
        height: 100
      }
    }, {
      name: "capital",
      rect: {
        top: 140,
        left: 140,
        width: 100,
        height: 100
      }
    }],
    relationsOnDiagram: [{
      name: "UserToCountry",
      startPosition: {
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      endPosition: {
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }, {
      name: "CountryToCapital",
      startPosition: {
        side: SideEnum.Bottom,
        shiftInPercent: 50
      },
      endPosition: {
        side: SideEnum.Top,
        shiftInPercent: 50
      }
    }, {
      name: "CountryToCities",
      startPosition: {
        side: SideEnum.Right,
        shiftInPercent: 50
      },
      endPosition: {
        side: SideEnum.Left,
        shiftInPercent: 50
      }
    }]
  }
};
const container = document.getElementById('container');
drawDiagram(container, data.entities, data.diagram.relationsOnDiagram, data.diagram);
function drawDiagram(container, entities, relations, diagram) {
  entities.forEach(e => drawEntity(e, container, getEntityRect(diagram, e.name)));
  relations.forEach(r => drawRelation(r, container, diagram));
}
function getEntityRect(diagram, name) {
  const e = diagram.entitiesOnDiagram.find(item => item.name === name);
  return e === null ? null : e.rect;
}
function drawEntity(entity, container, rect) {
  const content = d3.select(container).append('div').attr('class', 'content');
  content.style('position', 'absolute')
    .style('top', rect.top + 'px')
    .style('left', rect.left + 'px')
    .style('width', rect.width + 'px')
    .style('height', rect.height + 'px');
  const table = content.append('table').attr('class', 'entity');
  const thead = table.append('caption');
  thead.text(entity.name);
  for (let i = 0; i < entity.columns.length; i++) {
    let column = table.append('tr');
    column.append('td').attr('class', 'column-id').text(entity.columns[i].id);
    column.append('td').attr('class', 'column-field').text(entity.columns[i].field);
  }
}
function drawRelation(relation, container, diagram) {
  const svg = d3.select(container).append('svg');
  const line = svg.append('line')
    .attr("x1", 20)
    .attr("y1", 30)
    .attr("x2", 300)
    .attr("y2", 300);


  function getStartPoint(position, rect) {

  }
}



function getRelationPoint(position, rect) {
  const { side, shiftInPercent } = position;
  let x;
  let y;
  if (side === SideEnum.Top) {
    x = rect.left + rect.width * shiftInPercent / 100;
    y = rect.top;
  }
  if (side === SideEnum.Left) {
    x = rect.left;
    y = rect.top + rect.height * shiftInPercent / 100;
  }
  if (side === SideEnum.Right) {
    x = rect.left + rect.width;
    y = rect.top + rect.height * shiftInPercent / 100;
  }
  if (side === SideEnum.Bottom) {
    x = rect.left + rect.width * shiftInPercent / 100;
    y = rect.top + rect.height;
  }
  return { x: x, y: y };
}
