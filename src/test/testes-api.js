const api = require('../api');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Testando conversão de Celsius para Fahrenheit', () => {
  it('Teste: conversão correta de Celsius para Fahrenheit', (done) => {
    chai.request(api)
      .get('/ConverterTemperatura?valor=20&de=C&para=F')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('valor').eql(68)
        done();
      });
  });
});

describe('Testando conversão de Celsius para Kelvin', () => {
  it('Teste: conversão correta de Celsius para Kelvin', (done) => {
    chai.request(api)
      .get('/ConverterTemperatura?valor=20&de=C&para=K')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('valor').eql(293.15)
        done();
      });
  });
});

describe('Testando conversão de Celsius para Celsius', () => {
  it('Teste: conversão correta de Celsius para Celsius', (done) => {
    chai.request(api)
      .get('/ConverterTemperatura?valor=20&de=C&para=C')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('valor').eql(20)
        done();
      });
  });
});

describe('Testando conversão de Fahrenheit para Fahrenheit', () => {
  it('Teste: conversão correta de Fahrenheit para Fahrenheit', (done) => {
    chai.request(api)
      .get('/ConverterTemperatura?valor=32&de=F&para=F')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('valor').eql(32)
        done();
      });
  });
});

describe('Testando conversão de Fahrenheit para Kelvin', () => {
  it('Teste: conversão correta de Fahrenheit para Kelvin', (done) => {
    chai.request(api)
      .get('/ConverterTemperatura?valor=32&de=F&para=K')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('valor').eql(273.15)
        done();
      });
  });
});

describe('Testando conversão de Fahrenheit para Celsius', () => {
  it('Teste: conversão correta de Fahrenheit para Celsius', (done) => {
    chai.request(api)
      .get('/ConverterTemperatura?valor=32&de=F&para=C')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('valor').eql(0)
        done();
      });
  });
});

describe('Testando conversão de Kelvin para Fahrenheit', () => {
  it('Teste: conversão correta de Kelvin para Fahrenheit', (done) => {
    chai.request(api)
      .get('/ConverterTemperatura?valor=273.15&de=K&para=F')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('valor').eql(32)
        done();
      });
  });
});

describe('Testando conversão de Kelvin para Kelvin', () => {
  it('Teste: conversão correta de Kelvin para Kelvin', (done) => {
    chai.request(api)
      .get('/ConverterTemperatura?valor=273.15&de=K&para=K')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('valor').eql(273.15)
        done();
      });
  });
});

describe('Testando conversão de Kelvin para Celsius', () => {
  it('Teste: conversão correta de Kelvin para Celsius', (done) => {
    chai.request(api)
      .get('/ConverterTemperatura?valor=273.15&de=K&para=C')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('valor').eql(0)
        done();
      });
  });
});
