
import React, { Component } from 'react';

class BackgroundCanvas extends Component {

    componentDidMount() {

        var mx, my, p, n,
            THICKNESS = Math.pow(80, 2),
            THICKNESS_COPY = THICKNESS,
            SPACING = 6,
            MARGIN = 0,
            ROWS = ~~window.innerHeight / SPACING,
            COLS = ~~window.innerWidth / SPACING,
            COLOR = 220,
            DRAG = 0.95,
            NUM_PARTICLES = ROWS * COLS,
            EASE = 0.25;

        var canvas = document.getElementById("canvas");
        canvas.width = MARGIN + COLS * SPACING
        canvas.height = MARGIN + ROWS * SPACING
        var ctx = canvas['getContext']("2d");
        var [w, h] = [canvas.width, canvas.height];
        var a = ctx.createImageData(w, h);
        var b = a.data;

        canvas.addEventListener('mousemove', function (e) {
            var bounds = canvas.getBoundingClientRect();
            mx = e.clientX - bounds.left;
            my = e.clientY - bounds.top;
        });

        canvas.addEventListener('click', function (e) {
            var bounds = canvas.getBoundingClientRect();
            mx = e.clientX - bounds.left;
            my = e.clientY - bounds.top;
            if (THICKNESS === THICKNESS_COPY) {
                THICKNESS -= 0.9 * THICKNESS;
                var additive = 0.2 * THICKNESS;
                var thicknessController = setInterval(() => {
                    THICKNESS += additive;
                    if (THICKNESS === THICKNESS_COPY) {
                        clearInterval(thicknessController);
                    }
                }, 16)
            }
        });


        class Particle {

            x = 0;
            ox = 0;
            y = 0;
            oy = 0;
            vx = 0;
            vy = 0;

        }

        var particles = [];

        function makeImgBlack() {
            for (let i = 0; i < b.length; i += 4) {
                b[i] = 0;
                b[i + 1] = 0;
                b[i + 2] = 0;
                b[i + 3] = 255;
            }
        }

        for (let i = 0; i < NUM_PARTICLES; i++) {
            var p = new Particle();
            p.ox = p.x = MARGIN + (SPACING * ((i % COLS)));
            p.oy = p.y = MARGIN + (SPACING * ((i / COLS)));
            particles[i] = p;
        }

        function giveParticleColor(p, color=255) {
            n = (~~p.x + (~~p.y * w)) * 4;
            b[n + 0] = color;
            b[n + 1] = color;
            b[n + 2] = color;
        }

        var d, dx, dy, f, t;

        let sin = Math.sin.bind(Math);
        let cos = Math.cos.bind(Math);
        let atan2 = Math.atan2.bind(Math);

        makeImgBlack();
        function step() {

            for (let i = 0; i < NUM_PARTICLES; i++) {

                p = particles[i];
                giveParticleColor(p,0);

                dx = mx - p.x;
                dy = my - p.y;

                d = dx * dx + dy * dy;

                f = -THICKNESS / d;

                if (d < THICKNESS) {
                    t = atan2(dy, dx);
                    p.vx += f * cos(t);
                    p.vy += f * sin(t);
                }
                p.x += (p.vx *= DRAG) + (p.ox - p.x) * EASE;
                p.y += (p.vy *= DRAG) + (p.oy - p.y) * EASE;

                giveParticleColor(p);
            }

            ctx.putImageData(a, 0, 0);
            requestAnimationFrame(step);
        }

        step();


    }

    render() {
        return <canvas id="canvas"></canvas>
    }

}

export default BackgroundCanvas;