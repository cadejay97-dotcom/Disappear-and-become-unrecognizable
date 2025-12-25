import { gsap } from "gsap";
    
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";

gsap.registerPlugin(DrawSVGPlugin,InertiaPlugin,MotionPathHelper,Physics2DPlugin);
