import {
  IDiagram,
  IEntity,
  IPoint,
  IRect,
  IRelation,
  IRelationOnDiagram, IRelationPosition,
  RelationTypeEnum,
  SideEnum
} from "./interfaces";
import * as _ from 'lodash';
// @ts-ignore
import * as d3 from "d3";
import {
  left1, left2,left3, left4, left5, left6, left7, left8,
  right1, right2, right3, right4, right5, right6, right7, right8,
  top1, top2, top3, top4, top5, top6, top7, top8,
  bottom1, bottom2, bottom3, bottom4, bottom5, bottom6, bottom7, bottom8
} from './data';

const arrData = [
  left1, left2,left3, left4, left5, left6, left7, left8,
  right1, right2, right3, right4, right5, right6, right7, right8,
  top1, top2, top3, top4, top5, top6, top7, top8,
  bottom1, bottom2, bottom3, bottom4, bottom5, bottom6, bottom7, bottom8
];

createDiagram(arrData);

function createDiagram(data: any[]) {
  data.forEach(data => {
    const container = createDiagramContainer();
    drawDiagram(container, data.entities, data.diagram.relationsList, data.diagram, data.relations);
  });
}

function createDiagramContainer(): Element {
  const container = document.createElement('div');
  container.setAttribute('class', `diagram-container`);
  document.getElementsByTagName('body')[0].appendChild(container);
  return container;
}

function drawDiagram(container: Element, entities: IEntity[], relationsList: IRelationOnDiagram[], diagram: IDiagram, relations: IRelation[]): void {
  drawSvg(container);
  entities.forEach(e => drawEntity(e, container, diagram));
  relationsList.forEach(r => drawRelation( r, container, diagram, getRelationType(relations, r.name) ));
}

function getEntityRect(diagram: IDiagram, name: string): IRect {
  // @ts-ignore
  const e = diagram.entitiesList.find(item => item.name === name);
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
    column.append('td').attr('class', 'column-field').text(columns[i].name);
  }
}

function drawSvg(container: Element): void {
  d3.select(container).append('svg');
  // createOne2OneStart(container);
  // createOne2OneEnd(container);
  // createOne2ManyEnd(container);
}

function getRelationType(relations: IRelation[], name: string): RelationTypeEnum {
  // @ts-ignore
  const relationType = relations.find(item => item.name === name);
  return relationType === null ? null : relationType.type
}



function drawRelation(relationOnDiagram: IRelationOnDiagram, container: Element, diagram: IDiagram, relationType: RelationTypeEnum): void {
  const svg = d3.select(container).select('svg');
  const startRect = getEntityRect(diagram, relationOnDiagram.start.name);
  const endRect = getEntityRect(diagram, relationOnDiagram.end.name);
  const startPoint = calcRelationPoint(relationOnDiagram.start, startRect);
  const endPoint = calcRelationPoint(relationOnDiagram.end, endRect);

  const startSide = relationOnDiagram.start.side;
  const endSide = relationOnDiagram.end.side;



  const path = svg.append('path')
    .attr('fill', 'none');

  // @ts-ignore
  path.attr("d", `M ${startPoint.x},${startPoint.y} L ${endPoint.x},${endPoint.y}`);
  // // @ts-ignore
  // if (startPoint.y === endPoint.y) {
  //   // @ts-ignore
  //   path.attr("d", `M ${startPoint.x + 15},${startPoint.y} L ${endPoint.x},${endPoint.y}`);
  // }
  //
  //
  // if (startSide === 'bottom' && endSide === 'right'
  //   || startSide === 'bottom' && endSide === 'left'
  //   || startSide === 'top' && endSide === 'right'
  //   || startSide === 'top' && endSide === 'left'
  //   || startSide === 'right' && endSide === 'top'
  //   || startSide === 'left' && endSide === 'top'
  //   || startSide === 'right' && endSide === 'bottom'
  //   || startSide === 'left' && endSide === 'bottom') {
  //   // @ts-ignore
  //   const middleP = calcMiddlePoint(startPoint, endPoint, startSide, endSide);
  //   // @ts-ignore
  //   path.attr("d", `M ${startPoint.x},${startPoint.y} L ${middleP.x},${middleP.y} L ${endPoint.x},${endPoint.y}`);
  // }
  // else {
  //   // @ts-ignore
  //   const middleP = calcTwoMiddlePoints(startPoint, endPoint, startSide, endSide);
  //   // @ts-ignore
  //   path.attr("d", `M ${startPoint.x},${startPoint.y} L ${middleP.x1},${middleP.y1} L ${middleP.x2},${middleP.y2}L ${endPoint.x},${endPoint.y}`);
  // }
  switch (relationType) {
    case RelationTypeEnum.OneToMany:
      path.attr("marker-start", "url(#o2oStart)").attr("marker-end", "url(#o2mEnd)");
      break;
    case RelationTypeEnum.OneToOne:
      path.attr("marker-start", "url(#o2oStart)").attr("marker-end", "url(#o2oEnd)");
      break;
  }


}

function calcRelationPoint(position: IRelationPosition, rect: IRect): null | IPoint {
  const {side, shiftInPercent} = position;
  let x;
  let y;
  switch (side) {
    case SideEnum.Top:
      x = rect.left + rect.width * shiftInPercent / 100;
      y = rect.top - 15;
      break;
    case SideEnum.Left:
      x = rect.left - 15;
      y = rect.top + rect.height * shiftInPercent / 100;
      break;
    case SideEnum.Right:
      x = rect.left + rect.width + 15;
      y = rect.top + rect.height * shiftInPercent / 100;
      break;
    case SideEnum.Bottom:
      x = rect.left + rect.width * shiftInPercent / 100;
      y = rect.top + rect.height + 15;
      break;
    default:
      return null;
  }
  return {x: x, y: y}
}

function calcMiddlePoint(startPoint: IPoint, endPoint: IPoint, startSide: SideEnum, endSide: SideEnum) {
  if (startSide === 'bottom' && endSide === 'right') {
    if (startPoint.y > endPoint.y) {
      return {
        x: startPoint.x,
        y: startPoint.y + 20
      }
    } else {
      return {
        x: startPoint.x,
        y: endPoint.y
      }
    }
  }
  if (startSide === 'bottom' && endSide === 'left') {
    if (startPoint.y > endPoint.y) {
      return {
        x: startPoint.x,
        y: startPoint.y + 20
      }
    } else {
      return {
        x: startPoint.x,
        y: endPoint.y
      }
    }
  }
  if (startSide === 'top' && endSide === 'right') {
    if (startPoint.y < endPoint.y) {
      return {
        x: startPoint.x,
        y: startPoint.y - 20
      }
    } else {
      return {
        x: startPoint.x,
        y: endPoint.y
      }
    }

  }
  if (startSide === 'top' && endSide === 'left') {
    if (startPoint.y < endPoint.y) {
      return {
        x: startPoint.x,
        y: startPoint.y - 20
      }
    } else {
      return {
        x: startPoint.x,
        y: endPoint.y
      }
    }

  }
  if (startSide === 'right' && endSide === 'top') {
    if (startPoint.y > endPoint.y) {
      return {
        x: endPoint.x,
        y: endPoint.y - 20
      }
    } else {
      return {
        x: endPoint.x,
        y: startPoint.y
      }
    }

  }
  if (startSide === 'left' && endSide === 'top') {
    if (startPoint.y > endPoint.y) {
      return {
        x: endPoint.x,
        y: endPoint.y - 20
      }
    } else {
      return {
        x: endPoint.x,
        y: startPoint.y
      }
    }

  }
  if (startSide === 'right' && endSide === 'bottom') {
    if (startPoint.y < endPoint.y) {
      return {
        x: endPoint.x,
        y: endPoint.y + 20
      }
    } else {
      return {
        x: endPoint.x,
        y: startPoint.y
      }
    }

  }
  if (startSide === 'left' && endSide === 'bottom') {
    if (startPoint.y < endPoint.y) {
      return {
        x: endPoint.x,
        y: endPoint.y + 20,
      }
    } else {
      return {
        x: endPoint.x,
        y: startPoint.y,
      }
    }

  }
}

function calcTwoMiddlePoints(startPoint: IPoint, endPoint: IPoint, startSide: SideEnum, endSide: SideEnum) {

  if (startSide === 'right' && endSide === 'left') {
    return {
      x1: startPoint.x + (endPoint.x - startPoint.x) / 2,
      x2: startPoint.x + (endPoint.x - startPoint.x) / 2,
      y1: startPoint.y,
      y2: endPoint.y
    }
  }
  if (startSide === 'right' && endSide === 'right') {
    return {
      x1: startPoint.x + 15,
      x2: startPoint.x + 15,
      y1: startPoint.y,
      y2: endPoint.y
    }
  }
  if (startSide === 'left' && endSide === 'right') {
    return {
      x1: endPoint.x + (startPoint.x - endPoint.x) / 2,
      x2: endPoint.x + (startPoint.x - endPoint.x) / 2,
      y1: startPoint.y,
      y2: endPoint.y
    }
  }
  if (startSide === 'left' && endSide === 'left') {
    return {
      x1: startPoint.x - 15,
      x2: startPoint.x - 15,
      y1: startPoint.y,
      y2: endPoint.y
    }
  }
  if (startSide === 'top' && endSide === 'bottom') {
    return {
      x1: startPoint.x,
      x2: endPoint.x,
      y1: startPoint.y + (endPoint.y - startPoint.y) / 2,
      y2: startPoint.y + (endPoint.y - startPoint.y) / 2
    }
  }
  if (startSide === 'top' && endSide === 'top') {
    if (startPoint.y < endPoint.y) {
      return {
        x1: startPoint.x,
        x2: endPoint.x,
        y1: startPoint.y - 15,
        y2: startPoint.y - 15
      }
    } else {
      return {
        x1: startPoint.x,
        x2: endPoint.x,
        y1: endPoint.y - 15,
        y2: endPoint.y - 15
      }
    }
  }
  if (startSide === 'bottom' && endSide === 'top') {
    return {
      x1: startPoint.x,
      x2: endPoint.x,
      y1: endPoint.y + (startPoint.y - endPoint.y) / 2,
      y2: endPoint.y + (startPoint.y - endPoint.y) / 2
    }
  }
  if (startSide === 'bottom' && endSide === 'bottom') {
    if (startPoint.y > endPoint.y) {
      return {
        x1: startPoint.x,
        x2: endPoint.x,
        y1: startPoint.y + 15,
        y2: startPoint.y + 15
      }
    }
    if (startPoint.y < endPoint.y) {
      return {
        x1: startPoint.x,
        x2: endPoint.x,
        y1: endPoint.y + 15,
        y2: endPoint.y + 15
      }
    }
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

