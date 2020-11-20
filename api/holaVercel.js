var data = require('./datos.js')
module.exports = (req, res) => {
  var obj = {};
  if(req.query.city == undefined){
    var keys = Object.keys(data);
    var indexKey = 0;
    Object.entries(data).forEach(([key, value]) => {
      var medium = 0;
      var maximum = 0;
      var minimum = 0;
      var lenght = 0;
      var j=0;

      Object.entries(value).forEach(([k,v]) =>{
        if(v > maximum){
          maximum = v;
        }
        if(j == 0){
          minimum = v;
          j++;
        }
        else if(minimum > v){
          minimum = v;
        }
        medium = medium + v;
        lenght++;
      });

      medium = medium/lenght;
      var objCity = {};
      objCity['Maximum']=maximum;
      objCity['Minimum'] = minimum;
      objCity['Medium'] = medium;
      obj[keys[indexKey]] = objCity;
      indexKey++;
    });
  }
  else{

  }
  //No estoy seguro de esto, en node se define los headers así,
  //pero dicen que con res.json ya automáticamente settean el header a 'Content-Type','application/json';
  res.setHeader('Content-Type','application/json');
  res.status(200).json(obj);
};
