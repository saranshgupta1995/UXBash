import React, { Component } from 'react';
import { connect } from 'react-redux';

class BackgroundCanvas extends Component {

    initCanvas = () => {

        if (window.canvasRequestIdPika) {
            cancelAnimationFrame(window.canvasRequestIdPika);
            window.canvasRequestIdPika = undefined;
        }

        var mx, my, p, n,
            THICKNESS = Math.pow(this.props.thickness, 2),
            THICKNESS_COPY = THICKNESS,
            SPACING = this.props.spacing,
            MARGIN = 0,
            ROWS = ~~window.innerHeight / SPACING,
            COLS = ~~window.innerWidth / SPACING,
            DRAG = this.props.drag*0.01,
            BG_BLACK = 31,
            NUM_PARTICLES = ROWS * COLS,
            EASE = this.props.ease*0.01;

        var canvas = document.getElementById("canvas");
        canvas.width = MARGIN + COLS * SPACING
        canvas.height = MARGIN + ROWS * SPACING
        var ctx = canvas['getContext']("2d");
        var [w, h] = [canvas.width, canvas.height];
        var a = ctx.createImageData(w, h);
        var b = a.data;

        document.addEventListener('mousemove', function (e) {
            var bounds = canvas.getBoundingClientRect();
            mx = e.clientX - bounds.left;
            my = e.clientY - bounds.top;
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
                b[i] = BG_BLACK;
                b[i + 1] = BG_BLACK;
                b[i + 2] = BG_BLACK;
                b[i + 3] = 255;
            }
        }

        for (let i = 0; i < NUM_PARTICLES; i++) {
            var p = new Particle();
            p.ox = p.x = MARGIN + (SPACING * ((i % COLS)));
            p.oy = p.y = MARGIN + (SPACING * ((i / COLS)));
            particles[i] = p;
        }

        function giveParticleColor(p, color = 255) {
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

        for (let i = 0; i < NUM_PARTICLES; i++) {
            giveParticleColor(particles[i])
        }

        function step() {

            for (let i = 0; i < NUM_PARTICLES; i++) {

                p = particles[i];

                dx = mx - p.x;
                dy = my - p.y;

                d = dx * dx + dy * dy;

                if (d < THICKNESS) {

                    f = -THICKNESS / d;
                    t = atan2(dy, dx);
                    p.vx += f * cos(t);
                    p.vy += f * sin(t);
                    giveParticleColor(p, BG_BLACK);
                    p.x += (p.vx *= DRAG) + (p.ox - p.x) * EASE;
                    p.y += (p.vy *= DRAG) + (p.oy - p.y) * EASE;
                    giveParticleColor(p);
                } else if (p.ox - p.x) {
                    giveParticleColor(p, BG_BLACK);
                    p.x += (p.vx *= DRAG) + (p.ox - p.x) * EASE;
                    p.y += (p.vy *= DRAG) + (p.oy - p.y) * EASE;
                    giveParticleColor(p);
                }


            }

            ctx.putImageData(a, 0, 0);
            window.canvasRequestIdPika = requestAnimationFrame(step);
        }

        step();


    }



    componentDidUpdate() {
        this.initCanvas();
    }

    componentDidMount() {
        this.initCanvas();
    }



    render() {
        return <canvas id="canvas"></canvas>
    }

}

const mapStateToProps = (state) => {
    return {
        spacing: state.BackgroundCanvas.spacing,
        thickness: state.BackgroundCanvas.thickness,
        drag: state.BackgroundCanvas.drag,
        ease: state.BackgroundCanvas.ease,
    }
};

export default connect(mapStateToProps)(BackgroundCanvas);