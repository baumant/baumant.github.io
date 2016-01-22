var images = [];
for (var i = 35; i < 60; i++) {
	images.push("image-0"+i+".png");
}
console.log(images);
$("img").threesixty({images:images, method:'mousemove', direction:'forward', sensibility: 1});