const app = document.getElementById('text-wrapper');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 100
});
typewriter.typeString('Visítanos e inscríbete ya!').pauseFor(200).start();