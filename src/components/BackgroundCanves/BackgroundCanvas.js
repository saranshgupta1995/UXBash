
import React, { Component } from 'react';

class BackgroundCanvas extends Component {

    componentDidMount() {
        let randFun = Math.random;
        let currentMousePosition = {
            x: -1,
            y: -1
        }
        let p;
        window['requestAnimFrame'] = (function () {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window['mozRequestAnimationFrame'] ||
                window['oRequestAnimationFrame'] ||
                window['msRequestAnimationFrame'] ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        var canvas = document.getElementById("canvas");
        var ctx = canvas['getContext']("2d");

        var W = window.innerWidth, H = window.innerHeight;
        canvas['width'] = W;
        canvas['height'] = H;
        canvas['mousePosition'] = {
            x: 0,
            y: 0
        };

        var particleCount = 50,
            particles = [],
            minDist = 300

        function paintCanvas() {
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fillRect(0, 0, W, H);
        }

        function getrelativeMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            currentMousePosition.x = evt.clientX - rect.left
            currentMousePosition.y = evt.clientY - rect.top
            return {
                x: ((evt.clientX - rect.width / 2) / rect.width) / 1.5,
                y: ((evt.clientY - rect.height / 2) / rect.height) / 1.5
            };
        }

        canvas.addEventListener('mousemove', function (evt) {
            getrelativeMousePos(canvas, evt);
        }, false);

        class Particle {
            x = randFun() * W;
            y = randFun() * H;
            lifeTime = 0;
            radius = 1;

            constructor() {
                let that = this;
                setInterval(() => {
                    that.x = randFun() * W;
                    that.y = randFun() * H;
                }, 5000 + randFun() * 100000)
            }

            draw = function () {
                ctx.fillStyle = "rgba(255, 255, 200, 1" + ")";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

                ctx.fill();
            };

            updateSpeed = function () {
                if (!~currentMousePosition.x)
                    return
                let diffX = this.x - currentMousePosition.x
                let diffY = this.y - currentMousePosition.y

                if (diffX * diffX + diffY * diffY < 144) {
                    this.x -= diffX / 200;
                    this.y -= diffY / 200;
                } else if (diffX * diffX + diffY * diffY < 6600) {
                    this.x -= diffX / 40;
                    this.y -= diffY / 40;
                } else {
                    this.x -= (diffX * diffX >= 1600 ? ((diffX) / 1000) : 0) + randFun() * 1 + randFun() * -1;
                    this.y -= (diffY * diffY >= 1600 ? ((diffY) / 1000) : 0) + randFun() * 1 + randFun() * -1;
                }
            };


        }

        for (var i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function draw() {

            paintCanvas();

            let p;
            for (var i = 0; i < particles.length; i++) {
                p = particles[i];
                p.draw();
            }

            update();
        }

        function update() {

            for (var i = 0; i < particles.length; i++) {
                p = particles[i];

                if (p.x + p.radius > W)
                    p.x = p.radius;

                else if (p.x - p.radius < 0) {
                    p.x = W - p.radius;
                }

                if (p.y + p.radius > H)
                    p.y = p.radius;

                else if (p.y - p.radius < 0) {
                    p.y = H - p.radius;
                }

                let p2;
                let k = 0;
                for (var j = i + 1; j < particles.length; j++) {
                    k += distance(p, particles[j]) ? 1 : 0;
                    if (k > 5)
                        break
                }
                p.updateSpeed();

            }
        }

        function distance(p1, p2) {
            let dist, colorIndex;
            let dx = p1.x - p2.x;
            let dy = p1.y - p2.y;

            dist = Math.sqrt(dx * dx + dy * dy);

            if (dist <= minDist) {
                ctx.beginPath();
                colorIndex = parseInt((100.0 * dist / minDist).toString()) + 25;
                ctx.strokeStyle = "rgba(255,255,255 ," + (0.65 - 1* (dist / minDist)) + ")";
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }

            return dist <= minDist
        }

        function animloop() {
            draw();
            window['requestAnimFrame'](animloop);
        }

        animloop();

    }

    render() {
        return <canvas id="canvas"></canvas>
    }

}

export default BackgroundCanvas;