function setup() {
    canvas = createCanvas(windowWidth * 0.99, windowHeight * 0.8)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    coordenadas = ml5.poseNet(video)
    coordenadas.on("pose", resultado)
    nosex=width*0.5
    nosey=height*0.5
    imageMode(CENTER)
}
function draw() {
    video.size(width, height)
    image(edificios, 0.5*width, 0.5*height, width, height)
    image(clifford, width-nosex, nosey, diferencia, 0.6*diferencia)
}
function preload() {
    clifford = loadImage("clifford.png")
    edificios= loadImage("pngtree-pop-style-comic-city-background-picture-image_1440255-transformed.png")
}
function resultado(respuesta) {
    if (respuesta[0]) {
        console.log(respuesta)
        nosex=respuesta[0].pose.nose.x
        nosey=respuesta[0].pose.nose.y
        if(respuesta[0].pose.rightElbow.confidence>0.3){

            rightx=respuesta[0].pose.rightElbow.x
            leftx=respuesta[0].pose.leftElbow.x
            diferencia=Math.abs(leftx-rightx)
        }else{
            diferencia=200
        }
    }
}
nosex=0
nosey=0
diferencia=1