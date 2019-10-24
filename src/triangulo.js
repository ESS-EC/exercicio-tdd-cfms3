function Triangulo(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  
  Triangulo.prototype.toString = function () {
    return `Lado A ${this.a}, Lado B ${this.b}, Lado C ${this.c}`
  };

  Triangulo.prototype.tipo = function () {
    if (this.a != this.b && this.a != this.c && this.b != this.c) {
      return "Escaleno";
    } else if (this.a == this.b && this.a == this.c) {
      return "Equilatero";
    } else {
      return "Isosceles";
    }
  };

  Triangulo.prototype.valido = function () {
    if (this.a >= this.b + this.c) {
      return false;
    } else if (this.b >= this.a + this.c) {
      return false;
    } else if (this.c >= this.a + this.b) {
      return false;
    } else {
      return true;
    }
  };
  
  Triangulo.prototype.isRetangulo = function () {
    if (this.a * this.a === this.b * this.b + this.c * this.c) {
      return true;
    } else if (this.b * this.b === this.a * this.a + this.c * this.c) {
      return true;
    } else if (this.c * this.c === this.b * this.b + this.a * this.a) {
      return true;
    } else {
      return false;
    }
  };
  
  module.exports = Triangulo;
