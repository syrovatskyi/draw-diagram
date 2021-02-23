import { RelationTypeEnum, SideEnum } from "./interfaces/interfaces.js";
// @ts-ignore
import * as d3 from 'https://unpkg.com/d3?module';
import { data, data2, data3, data4 } from './api/data.js';
const arrData = [
    data, data2, data3, data4
];
createDiagram(arrData);
function createDiagram(data) {
    data.forEach(data => {
        const container = createDiagramContainer();
        drawDiagram(container, data.entities, data.diagram.relationsOnDiagram, data.diagram, data.relations);
    });
}
function createDiagramContainer() {
    const container = document.createElement('div');
    container.setAttribute('class', `diagram-container`);
    document.getElementsByTagName('body')[0].appendChild(container);
    return container;
}
function drawDiagram(container, entities, relationOnDiagram, diagram, relations) {
    drawSvg(container);
    entities.forEach(e => drawEntity(e, container, diagram));
    relationOnDiagram.forEach(r => drawRelation(r, container, diagram, getRelationType(relations, r.name)));
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
function drawSvg(container) {
    d3.select(container).append('svg');
    createOne2OneStart(container);
    createOne2OneEnd(container);
    createOne2ManyEnd(container);
}
function getRelationType(relations, name) {
    const relationType = relations.find(item => item.name === name);
    return relationType === null ? null : relationType.type;
}
function drawRelation(relationOnDiagram, container, diagram, relationType) {
    const svg = d3.select(container).select('svg');
    const startRect = getEntityRect(diagram, relationOnDiagram.startPosition.name);
    const endRect = getEntityRect(diagram, relationOnDiagram.endPosition.name);
    const startPoint = calcRelationPoint(relationOnDiagram.startPosition, startRect);
    const endPoint = calcRelationPoint(relationOnDiagram.endPosition, endRect);
    const startSide = relationOnDiagram.startPosition.side;
    const endSide = relationOnDiagram.endPosition.side;
    const middleP = calcMiddlePoint(startPoint, endPoint, startSide, endSide);
    console.log('middleP', middleP);
    const path = svg.append('path')
        .attr('fill', 'none');
    // @ts-ignore
    if (startPoint.y === endPoint) {
        // @ts-ignore
        path.attr("d", `M ${startPoint.x},${startPoint.y} L ${endPoint.x},${endPoint.y}`);
    }
    else {
        path.attr("d", `M ${startPoint.x},${startPoint.y} L ${middleP.x},${middleP.y} L ${endPoint.x},${endPoint.y}`);
    }
    switch (relationType) {
        case RelationTypeEnum.OneToMany:
            path.attr("marker-start", "url(#o2oStart)").attr("marker-end", "url(#o2mEnd");
            break;
        case RelationTypeEnum.OneToOne:
            path.attr("marker-start", "url(#o2oStart)").attr("marker-end", "url(#o2oEnd");
            break;
    }
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
function calcMiddlePoint(startPoint, endPoint, startSide, endSide) {
    let x = null;
    let y = null;
    if (startSide === 'right' && endSide === 'left') {
        x = startPoint.x + (endPoint.x - startPoint.x) / 2;
        y = endPoint.y;
    }
    if (startSide === 'left' && endSide === 'right') {
        x = endPoint.x + (startPoint.x - endPoint.x) / 2;
        y = endPoint.y;
    }
    if (startSide === 'bottom' && endSide === 'right') {
        x = startPoint.x;
        y = endPoint.y;
    }
    if (startSide === 'bottom' && endSide === 'left') {
        x = startPoint.x;
        y = endPoint.y;
    }
    if (startSide === 'top' && endSide === 'right') {
        x = startPoint.x;
        y = endPoint.y;
    }
    if (startSide === 'top' && endSide === 'left') {
        x = startPoint.x;
        y = endPoint.y;
    }
    if (startSide === 'right' && endSide === 'top') {
        x = endPoint.x;
        y = startPoint.y;
    }
    if (startSide === 'left' && endSide === 'top') {
        x = endPoint.x;
        y = startPoint.y;
    }
    if (startSide === 'right' && endSide === 'bottom') {
        x = endPoint.x;
        y = startPoint.y;
    }
    if (startSide === 'left' && endSide === 'bottom') {
        x = endPoint.x;
        y = startPoint.y;
    }
    if (startSide === 'top' && endSide === 'bottom') {
        x = endPoint.x;
        y = startPoint.y + (endPoint.y - startPoint.y) / 2;
    }
    if (startSide === 'bottom' && endSide === 'top') {
        x = endPoint.x;
        y = endPoint.y + (startPoint.y - endPoint.y) / 2;
    }
    return { x: x, y: y };
}
function calcTwoPoints(startPoint, endPoint, startSide, endSide) {
    let x1;
    let x2;
    let y1;
    let y2;
    if (startSide === SideEnum.Right && endSide === SideEnum.Left) {
        x1 = startPoint.x + (endPoint.x - startPoint.x / 2);
        x2 = x1;
        y1 = startPoint.y;
        y2 = endPoint.y;
    }
    if (startSide === SideEnum.Top && endSide === SideEnum.Bottom) {
        x1 = startPoint.x;
        x2 = endPoint.x;
        y1 = startPoint.y + (endPoint.y - startPoint.y / 2);
        y2 = y1;
    }
    if (startSide === SideEnum.Left && endSide === SideEnum.Right) {
        x1 = endPoint.x + (startPoint.x - endPoint.x / 2);
        x2 = x1;
        y1 = startPoint.y;
        y2 = endPoint.y;
    }
    if (startSide === SideEnum.Bottom && endSide === SideEnum.Top) {
        x1 = startPoint.x;
        x2 = endPoint.x;
        y1 = endPoint.y + (startPoint.y - endPoint.y / 2);
        y2 = y1;
    }
    return [x1, x2, y1, y2];
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
