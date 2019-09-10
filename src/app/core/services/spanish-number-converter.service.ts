import { Injectable } from '@angular/core';

const Unidades = (num: number) => {
  switch (num) {
    case 1:
      return 'UN';
    case 2:
      return 'DOS';
    case 3:
      return 'TRES';
    case 4:
      return 'CUATRO';
    case 5:
      return 'CINCO';
    case 6:
      return 'SEIS';
    case 7:
      return 'SIETE';
    case 8:
      return 'OCHO';
    case 9:
      return 'NUEVE';
    default:
      return '';
  }
};

const Decenas = (num: number) => {
  let decena = Math.floor(num / 10);
  let unidad = num - decena * 10;
  switch (decena) {
    case 1:
      switch (unidad) {
        case 0:
          return 'DIEZ';
        case 1:
          return 'ONCE';
        case 2:
          return 'DOCE';
        case 3:
          return 'TRECE';
        case 4:
          return 'CATORCE';
        case 5:
          return 'QUINCE';
        default:
          return 'DIECI' + Unidades(unidad);
      }
    case 2:
      switch (unidad) {
        case 0:
          return 'VEINTE';
        default:
          return 'VEINTI' + Unidades(unidad);
      }
    case 3:
      return DecenasY('TREINTA', unidad);
    case 4:
      return DecenasY('CUARENTA', unidad);
    case 5:
      return DecenasY('CINCUENTA', unidad);
    case 6:
      return DecenasY('SESENTA', unidad);
    case 7:
      return DecenasY('SETENTA', unidad);
    case 8:
      return DecenasY('OCHENTA', unidad);
    case 9:
      return DecenasY('NOVENTA', unidad);
    case 0:
      return Unidades(unidad);
  }
};

const DecenasY = (strSin: string, numUnidades: number) =>
  numUnidades > 0 ? strSin + ' Y ' + Unidades(numUnidades) : strSin;

const Centenas = (num: number) => {
  let centenas = Math.floor(num / 100);
  let decenas = num - centenas * 100;
  switch (centenas) {
    case 1:
      if (decenas > 0) return 'CIENTO ' + Decenas(decenas);
      return 'CIEN';
    case 2:
      return 'DOSCIENTOS ' + Decenas(decenas);
    case 3:
      return 'TRESCIENTOS ' + Decenas(decenas);
    case 4:
      return 'CUATROCIENTOS ' + Decenas(decenas);
    case 5:
      return 'QUINIENTOS ' + Decenas(decenas);
    case 6:
      return 'SEISCIENTOS ' + Decenas(decenas);
    case 7:
      return 'SETECIENTOS ' + Decenas(decenas);
    case 8:
      return 'OCHOCIENTOS ' + Decenas(decenas);
    case 9:
      return 'NOVECIENTOS ' + Decenas(decenas);
    default:
      return Decenas(decenas);
  }
};

const Seccion = (
  num: number,
  divisor: number,
  strSingular: string,
  strPlural: string
) => {
  let cientos = Math.floor(num / divisor);
  let resto = num - cientos * divisor;
  let letras = '';
  if (cientos > 0) {
    letras = cientos > 1 ? Centenas(cientos) + ' ' + strPlural : strSingular;
  } else {
    letras = strSingular;
  }
  if (resto > 0) {
    letras += '';
  }
  return letras;
};

const miles = (num: number) => {
  let divisor = 1000;
  let cientos = Math.floor(num / divisor);
  let resto = num - cientos * divisor;
  let strMiles = Seccion(num, divisor, 'UN MIL', 'MIL');
  let strCentenas = Centenas(resto);
  return strMiles == '' || cientos === 0
    ? strCentenas
    : strMiles + ' ' + strCentenas;
};

const millions = (num: number) => {
  let divisor = 1000000;
  let cientos = Math.floor(num / divisor);
  let resto = num - cientos * divisor;
  let strMillones = Seccion(
    num,
    divisor,
    million(num, true),
    million(num, false)
  );
  let strMiles = miles(resto);
  return strMillones == '' || cientos === 0
    ? strMiles
    : strMillones + ' ' + strMiles;
};

const million = (num: number, singular: boolean) => {
  let letraMillon = singular ? 'UN MILLON' : 'MILLONES';
  if (num % 1000000 == 0) {
    letraMillon = letraMillon + ' DE';
  }
  return letraMillon;
};

@Injectable({
  providedIn: 'root'
})
export class SpanishNumberConverterService {
  toString(num: number) {
    return millions(num);
  }
}
