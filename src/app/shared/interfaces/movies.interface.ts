export interface Movies {
  id: string;
  name: string;
  creation_date: string;
  status: MoviesStatus;
}

export enum MoviesStatus {
  ACTIVO = 1,
  INACTIVO = 2
}

export const MoviesStatusColor = [
  {
    status: MoviesStatus.ACTIVO,
    color: 'green'
  },
  {
    status: MoviesStatus.INACTIVO,
    color: 'red'
  }
];

