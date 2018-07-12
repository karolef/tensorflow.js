function setup() {
  noCanvas();
  // frameRate(1);
  // const vtens = tf.variable(tens);
  // console.log(vtens);
  // const data = tf.tensor([0,0.9,127,255, 100,50,205,55], [2,2,2], 'int32');
  // tens.print();
  //
  // console.log(tens.data());
  // tens.data().then(function(stuff){
  //   console.log(stuff);
  // });

  // console.log(tens.dataSync());
  // console.log(tens.get(0,0,0));
  //
  // tens.set(0,10);
}

function draw() {
  const values = [];
  for (let i = 0; i < 150000; i++) {
    values[i] = random(0, 255);
  }

  const shape = [500, 300];

  // dispose of the tensors after use

  const test = tf.tensor2d(values, shape);
  test.dispose();

  // or
  // tf.tidy(function(){});
  tf.tidy(() => {
    const a = tf.tensor2d(values, shape, 'int32');
    const b = tf.tensor2d(values, shape, 'int32');
    const bT = b.transpose();
    const c = a.matMul(bT);
  });

  // const tens = tf.tensor3d(values, shape, 'int32');

  // dispose of the tensors after use
  // a.dispose();
  // b.dispose();
  // bT.dispose();
  // c.dispose();

  console.log(tf.memory().numTensors);
}
