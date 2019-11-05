module.exports.areaCircle = radius => Math.PI*radius*radius;

maodule.exports.perimeterCircle = radius => 2*Math.PI*radius;

module.exports.areaSquare = side=> side*side;

module.exports.perimeterSquare = side => 4*side;

module.exports.areaRect = (length,breadth)=> length*breadth;


module.exports.perimeterRect = (length,breadth)=> 2*(length+breadth);

module.exports.areaTriangle = (base,height)=>(base*height)/2;

module.exports.areaTrapezoid = (base1,base2,height)=> ((base1+base2)*height)/2;

module.exports.volumeCube = (side)=> side*side*side;

module.exports.volumeBox  = (l,w,h) => (l*w*h);

module.exports.volumeSphere = (radius)=> 4/3 * (Math.PI*radius*radius*radius);

module.exports.triangularPrism = (base,height,Height) => (base*height/2)*Height;

module.exports.volumeCylinder = (radius,height)=> Math.PI*radius*radius*height;
