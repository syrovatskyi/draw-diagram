export enum RelationTypeEnum {
  OneToOne = "o2o",
  OneToMany = "o2m"
}

export enum SideEnum {
  Left = "left",
  Right = "right",
  Top = "top",
  Bottom = "bottom"
}

export interface IColumn {
  name: string;
}

export interface IEntity {
  name: string;
  columns: IColumn[];
}

export interface IRelation {
  name: string
  type: RelationTypeEnum;
  from: string;
  to: string;
}

export interface IRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface IPoint {
  x: number;
  y: number;
}

export interface IEntityOnDiagram {
  name: string;
  rect: IRect;
}

export interface IRelationPosition {
  name: string;
  side: SideEnum;
  shiftInPercent: number;
}

export interface IRelationOnDiagram {
  name: string;
  start: IRelationPosition;
  end: IRelationPosition;
}

export interface IDiagram {
  entitiesList: IEntityOnDiagram[];
  relationsList: IRelationOnDiagram[];
}


export interface Component {
  entities: IEntity[];
  relations: IRelation[];
  diagram: IDiagram;
}
