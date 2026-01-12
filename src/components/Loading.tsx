import { useEffect, useRef } from "react";
import gsap from "gsap";
import pawbase from "../assets/pawbase.svg";
import paw1 from "../assets/paw1.svg";
import paw2 from "../assets/paw2.svg";
import paw3 from "../assets/paw3.svg";
import paw4 from "../assets/paw4.svg";
import "../styles/paw.css";

export default function Loading() {
  const pawBaseRef = useRef(null);
  const paw1Ref = useRef(null);
  const paw2Ref = useRef(null);
  const paw3Ref = useRef(null);
  const paw4Ref = useRef(null);
  const loadingTextRef = useRef<HTMLDivElement>(null);

  const loadingTexts = [
    "mixing jelly...",
    "adding flavor...",
    "blending smoothly...",
    "preparing pawsomeness...",
  ];

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    // Paw base expands first
    timeline.to(
      pawBaseRef.current,
      {
        scale: 1.2,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
      },
      0
    );

    // Paw base returns to normal
    timeline.to(
      pawBaseRef.current,
      {
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
      },
      0.1
    );

    // Paw 1 animates
    timeline.to(
      paw1Ref.current,
      {
        y: -20,
        scale: 1.15,
        duration: 0.5,
        ease: "elastic.out(1, 0.6)",
      },
      0
    );

    timeline.to(
      paw1Ref.current,
      {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.in",
      },
      0.1
    );

    // Paw 2 animates
    timeline.to(
      paw2Ref.current,
      {
        y: -20,
        scale: 1.15,
        duration: 0.5,
        ease: "elastic.out(1, 0.6)",
      },
      0.1
    );

    timeline.to(
      paw2Ref.current,
      {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.in",
      },
      0.2
    );

    // Paw 3 animates
    timeline.to(
      paw3Ref.current,
      {
        y: -20,
        scale: 1.15,
        duration: 0.5,
        ease: "elastic.out(1, 0.6)",
      },
      0.2
    );

    timeline.to(
      paw3Ref.current,
      {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.in",
      },
      0.3
    );

    // Paw 4 animates
    timeline.to(
      paw4Ref.current,
      {
        y: -20,
        scale: 1.15,
        duration: 0.5,
        ease: "elastic.out(1, 0.6)",
      },
      0.3
    );

    timeline.to(
      paw4Ref.current,
      {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.in",
      },
      0.4
    );

    // Add delay before repeat
    timeline.to({}, { duration: 0.3 }, 0.7);

    // Separate timeline for loading text fade in/out animation
    const textTimeline = gsap.timeline({ repeat: -1 });
    let textIndex = 0;

    // Fade out current text
    textTimeline.to(
      loadingTextRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      },
      0
    );

    // Change text when invisible
    textTimeline.call(
      () => {
        if (loadingTextRef.current) {
          loadingTextRef.current.textContent = loadingTexts[textIndex];
          textIndex = (textIndex + 1) % loadingTexts.length;
        }
      },
      undefined,
      0.5
    );

    // Fade in new text
    textTimeline.to(
      loadingTextRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      },
      0.5
    );
  }, []);

  return (
    <div className="page-container">
      <div className="paw-container">
        <div className="paw-base" ref={pawBaseRef}>
          <img src={pawbase} alt="Paw Base" />
        </div>

        <div className="paw paw-top-left" ref={paw1Ref}>
          <img src={paw1} alt="Paw 1" />
        </div>

        <div className="paw paw-top-center-left" ref={paw2Ref}>
          <img src={paw2} alt="Paw 2" />
        </div>

        <div className="paw paw-top-center-right" ref={paw3Ref}>
          <img src={paw3} alt="Paw 3" />
        </div>

        <div className="paw paw-top-right" ref={paw4Ref}>
          <img src={paw4} alt="Paw 4" />
        </div>
      </div>

      <div ref={loadingTextRef} className="loading-text">
        preparing pawsomeness...
      </div>
    </div>
  );
}
